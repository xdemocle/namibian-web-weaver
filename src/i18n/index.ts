import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { en } from './dictionaries/en';
import { af } from './dictionaries/af';

export const LOCALES = ['en', 'af'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

/** URL prefix per locale. English is the default and carries no prefix. */
export const LOCALE_PREFIX: Record<Locale, string> = {
  en: '',
  af: '/af',
};

/** Human readable name of each locale, for the switcher. */
export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  af: 'Afrikaans',
};

/** BCP-47 tags used for <html lang>, og:locale and hreflang. */
export const LOCALE_TAGS: Record<Locale, string> = {
  en: 'en',
  af: 'af',
};

export const LOCALE_OG: Record<Locale, string> = {
  en: 'en-US',
  af: 'af-NA',
};

const dictionaries: Record<Locale, Record<string, string>> = { en, af };

/** Which locale does this path belong to? */
export const localeFromPath = (pathname: string): Locale => {
  const clean = pathname.split('?')[0].split('#')[0];
  if (clean === '/af' || clean.startsWith('/af/')) return 'af';
  return DEFAULT_LOCALE;
};

/** Strip the locale prefix from a path: '/af/about' -> '/about'. */
export const stripLocale = (pathname: string): string => {
  const clean = pathname.split('?')[0].split('#')[0];
  if (clean === '/af') return '/';
  if (clean.startsWith('/af/')) return clean.slice(3);
  return clean || '/';
};

/** Add the locale prefix to a path: '/about' + 'af' -> '/af/about'. */
export const localePath = (path: string, locale: Locale): string => {
  if (locale === DEFAULT_LOCALE) return path;
  return path === '/' ? LOCALE_PREFIX[locale] : `${LOCALE_PREFIX[locale]}${path}`;
};

/** The same page in the other language. */
export const otherLocalePath = (pathname: string): string => {
  const locale = localeFromPath(pathname);
  const other: Locale = locale === 'af' ? 'en' : 'af';
  return localePath(stripLocale(pathname), other);
};

const interpolate = (template: string, params?: Record<string, string>): string => {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (match, key) => (key in params ? params[key] : match));
};

/**
 * Translator for a given locale. Falls back to English, then to the key itself,
 * so a missing translation degrades to readable English instead of a blank.
 */
export const makeT =
  (locale: Locale) =>
  (key: string, params?: Record<string, string>): string => {
    const dict = dictionaries[locale] ?? en;
    const value = dict[key] ?? en[key] ?? key;
    return interpolate(value, params);
  };

/** The active locale for the current route. */
export const useLocale = (): Locale => {
  const { pathname } = useLocation();
  return useMemo(() => localeFromPath(pathname), [pathname]);
};

/** Translator bound to the active locale. */
export const useT = () => {
  const locale = useLocale();
  return useMemo(() => makeT(locale), [locale]);
};

/* ------------------------------------------------------------------ *
 * Language preference
 *
 * The Worker redirects Afrikaans visitors to /af based on the
 * Accept-Language header. An explicit choice made with the switcher is
 * stored in a cookie so the Worker stops second-guessing it.
 * ------------------------------------------------------------------ */

export const LOCALE_COOKIE = 'lizwise_locale';

/** Remember the visitor's explicit language choice. */
export const rememberLocale = (locale: Locale): void => {
  if (typeof document === 'undefined') return;
  document.cookie = `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
};

/** The language the visitor picked, if any. */
export const storedLocale = (): Locale | null => {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${LOCALE_COOKIE}=([^;]+)`));
  if (!match) return null;
  const value = decodeURIComponent(match[1]).toLowerCase();
  return value === 'af' || value === 'en' ? value : null;
};

/** Does this browser prefer Afrikaans? */
export const browserPrefersAfrikaans = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  return languages.some(tag => /^af\b/i.test(tag || ''));
};

/**
 * Client-side fallback for the locale redirect, used when the site is served
 * without the Worker in front (static preview, Pages). It mirrors the Worker's
 * rule exactly:
 *
 *  - an explicit choice in the cookie always wins;
 *  - a visitor whose device prefers Afrikaans is sent to the /af version of
 *    the page they asked for;
 *  - a visitor who is already on an /af URL is left alone, because an
 *    explicit URL is itself a choice.
 */
export const applyBrowserLocale = (): void => {
  if (typeof window === 'undefined') return;

  const chosen = storedLocale();
  // An explicit 'en' choice means the unprefixed URLs are correct.
  if (chosen === 'en') return;

  const wantsAfrikaans = chosen === 'af' || browserPrefersAfrikaans();
  if (!wantsAfrikaans) return;

  const { pathname, search, hash } = window.location;
  // Already on an Afrikaans URL: never bounce away from it.
  if (localeFromPath(pathname) === 'af') return;

  const target = `/af${pathname === '/' ? '' : pathname}${search}${hash}`;
  window.location.replace(target);
};
