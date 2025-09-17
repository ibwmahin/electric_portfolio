/**
 * Footer Component
 * 
 * Site footer with social media links and copyright information.
 * Features animated social icons and clean typography.
 */

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTwitter, 
  faInstagram, 
  faDribbble, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';

/**
 * Site footer with social links and copyright
 */
export function Footer() {
  const socialLinks = [
    { icon: faTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: faInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: faDribbble, href: 'https://dribbble.com', label: 'Dribbble' },
    { icon: faLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-8"
        >
          {/* Follow Me Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              Follow Me
            </h3>
            
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © 2023 Subtle Folio – Framer Template
            </p>
            <p className="text-xs text-muted-foreground">
              by{' '}
              <a 
                href="https://twitter.com/nurpraditya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Nur Praditya
              </a>
              {' // '}
              <a 
                href="https://morvalabs.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                MorvaLabs
              </a>
              {' // '}
              <a 
                href="https://framer.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Framer
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}