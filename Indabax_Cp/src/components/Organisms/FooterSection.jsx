import React from 'react';
import { Link } from 'react-router'


const FooterSection = () => {
    const socialLinks = [
        { name: 'Facebook', icon: 'bi-facebook', href: 'https://www.facebook.com' },
        { name: 'Twitter', icon: 'bi-twitter', href: 'https://twitter.com' },
        { name: 'Instagram', icon: 'bi-instagram', href: 'https://www.instagram.com' },
        { name: 'LinkedIn', icon: 'bi-linkedin', href: 'https://www.linkedin.com' },
    ];

    return (
        <footer className="bg-gray-900 text-white py-6 md:py-8 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
                    
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
                        <Link // Changed to Link
                            to="/"  // Use "to" prop for React Router
                            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
                        >
                            Home
                        </Link>
                        <Link // Changed to Link
                            to="/contact"
                            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
                        >
                            Contact Us
                        </Link>
                        <Link // Changed to Link
                            to="/privacy-policy"
                            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
                        >
                            Privacy Policy
                        </Link>
                         <Link // Changed to Link
                            to="/terms-of-service"
                            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
                        >
                            Terms of Service
                        </Link>
                    </div>

                    <div className="text-center text-gray-500 text-sm order-3 md:order-2">
                        <p>
                            &copy; {new Date().getFullYear()} IndabaX. All rights
                            reserved.
                        </p>
                        <p>
                            Designed & Developed by{' '}
                            <a
                                href="https://your-company.com" // Replace with actual link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-400 hover:underline"
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
                                    key={index}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white transition-colors"
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