import type { ImgHTMLAttributes } from 'react';
import { DESKTOP_MIN_WIDTH, thumbnails } from '@/generated/thumbnails';

type ThumbnailProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'width' | 'height' | 'loading'> & {
  /** Path of the ORIGINAL photo, e.g. '/uploads/products/rusks.jpg'. Pass the same path to the lightbox. */
  src: string;
  alt: string;
  /** Above-the-fold photo: load eagerly with high fetch priority. */
  priority?: boolean;
};

/**
 * A photo rendered from its pre-sized thumbnails instead of the original.
 *
 * Mobile and tablet (< 1024px) share one thumbnail; desktop gets its own. Both
 * carry their real pixel size in width/height, so the layout is reserved before
 * the file arrives. The original is only fetched by the lightbox on click.
 */
const Thumbnail = ({ src, alt, priority = false, ...imgProps }: ThumbnailProps) => {
  const entry = thumbnails[src];
  if (!entry) {
    // Fails the SSG build rather than silently shipping the full-size original.
    throw new Error(
      `[Thumbnail] No thumbnail for "${src}". Add it to scripts/thumbnail-sizes.json and run bun run thumbs.`
    );
  }
  const { mobile, desktop } = entry;
  // React 18.2 has no fetchPriority prop; the lowercase attribute passes straight through.
  const priorityAttrs = priority ? ({ fetchpriority: 'high' } as Record<string, string>) : {};

  return (
    <picture className='contents'>
      {desktop.src !== mobile.src && (
        <source
          media={`(min-width: ${DESKTOP_MIN_WIDTH}px)`}
          srcSet={desktop.src}
          width={desktop.width}
          height={desktop.height}
          type={desktop.src.endsWith('.webp') ? 'image/webp' : 'image/jpeg'}
        />
      )}
      <img
        src={mobile.src}
        width={mobile.width}
        height={mobile.height}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        {...priorityAttrs}
        {...imgProps}
      />
    </picture>
  );
};

export default Thumbnail;
