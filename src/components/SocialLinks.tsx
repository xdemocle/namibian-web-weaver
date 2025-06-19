import { FaLinkedin, FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { socialLinks } from '../config/links';

interface SocialLinksProps {
  className?: string;
  layout?: 'grid' | 'inline';
  showDescription?: boolean;
  centered?: boolean;
}

const SocialLinks = ({
  className = '',
  layout = 'grid',
  showDescription = true,
  centered = true,
}: SocialLinksProps) => {
  // Map of social media icons
  const socialIcons = {
    facebook: FaFacebookF,
    linkedin: FaLinkedin,
    instagram: FaInstagram,
    tiktok: FaTiktok,
  };

  if (layout === 'inline') {
    return (
      <div className={`flex ${centered ? 'justify-center' : ''} space-x-8 ${className}`}>
        {Object.entries(socialLinks).map(([key, social]) => {
          const Icon = socialIcons[key as keyof typeof socialIcons];
          return (
            <a
              key={key}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label={social.ariaLabel}
            >
              <Icon size={24} />
            </a>
          );
        })}
      </div>
    );
  }

  // Grid layout (for pages)
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {Object.entries(socialLinks).map(([key, social]) => {
        const Icon = socialIcons[key as keyof typeof socialIcons];
        return (
          <Card key={key} className="hover:shadow-lg transition-shadow h-full">
            <CardHeader>
              <CardTitle className={`flex items-center ${centered ? 'justify-center' : ''} ${social.color}`}>
                <Icon className="w-6 h-6 mr-2" />
                {social.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {showDescription && (
                <p className="text-gray-600 mb-4">
                  {social.description}
                </p>
              )}
              <Button asChild variant="outline" className="w-full">
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow Us
                </a>
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default SocialLinks;
