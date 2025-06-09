import React from 'react';
// Corrected import: Link typically comes from 'react-router-dom' for web apps
import { Link } from 'react-router-dom';

const FooterSection = () => {
  const socialLinks = [
    { name: 'Facebook', icon: 'bi-facebook', href: 'https://www.facebook.com' },
    { name: 'Twitter', icon: 'bi-twitter', href: 'https://twitter.com' },
    {
      name: 'Instagram',
      icon: 'bi-instagram',
      href: 'https://www.instagram.com',
    },
    { name: 'LinkedIn', icon: 'bi-linkedin', href: 'https://www.linkedin.com' },
  ];

  return (
    // Changed background from gray-900 to brand-primary
    <footer className="bg-brand-primary text-white py-6 md:py-8 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          {/* Navigation Links Section */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
            <Link
              to="/"
              // Changed text-gray-400 to text-neutral-medium for consistency
              className="text-neutral-medium hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="text-neutral-medium hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              Contact Us
            </Link>
            <Link
              to="/privacy-policy"
              className="text-neutral-medium hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-neutral-medium hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              Terms of Service
            </Link>
          </div>

          {/* Copyright and Designed By Section */}
          {/* Changed text-gray-500 to text-neutral-medium */}
          <div className="text-center text-neutral-medium text-sm order-3 md:order-2">
            <p>
              &copy; {new Date().getFullYear()} IndabaX. All rights reserved.
            </p>
            <p>
              Designed & Developed by{' '}
              <a
                href="https://your-company.com" // Replace with actual link
                target="_blank"
                rel="noopener noreferrer"
                // Changed text-purple-400 to text-brand-accent
                className="text-brand-accent hover:underline"
              >
                Your Company Name
              </a>
            </p>
          </div>

          {/* Social Media Links Section */}
          <div className="flex justify-center md:justify-end gap-4 order-2 md:order-3">
            {socialLinks.map((link, index) => (
              <a
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index} // Consider unique IDs for keys in real applications
                href={link.href}
                // Changed text-gray-300 to text-neutral-medium for icons
                className="text-neutral-medium hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Connect with us on ${link.name}`}
              >
                <i className={`bi ${link.icon} text-2xl`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
