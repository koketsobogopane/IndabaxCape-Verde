import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Images/IndabaXLogo.png'; // Assuming your logo image is light and works on dark backgrounds

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/', icon: 'bi-house-fill' },
    { label: 'Blog', href: '/blog', icon: 'bi-journal-text' },
    { label: 'About', href: '/about', icon: 'bi-info-circle-fill' },
    { label: 'FAQ', href: '/faq', icon: 'bi-question-circle-fill' },
    { label: 'Register', href: '/register', icon: 'bi-person-plus-fill' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
                ${
                  isScrolled
                    ? 'bg-brand-primary shadow-lg' // Solid brand-primary when scrolled
                    : 'bg-brand-primary/30' // Slightly transparent brand-primary when not scrolled
                } backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-white font-bold text-xl flex justify-center items-center gap-3"
            >
              <img src={Logo} alt="IndabaX Cabo Verde Logo" width={150} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  // Removed hover:text-brand-accent, keeping text-white consistent
                  className="text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center
                                               hover:bg-brand-secondary/50" // Subtle hover background using brand-secondary with opacity
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white 
                                       hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 
                                       focus:ring-offset-brand-primary focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <i className="bi-x h-6 w-6 text-white" />
              ) : (
                <i className="bi-list h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={isMobileMenuOpen ? 'md:hidden block' : 'md:hidden hidden'}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-brand-primary">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              // Removed hover:text-brand-accent, keeping text-white consistent
              className="text-white block px-3 py-2 rounded-md text-base font-medium 
                                       transition-colors duration-200 flex items-center justify-center
                                       hover:bg-brand-secondary/50" // Subtle hover background for mobile links
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className={`${item.icon} mr-2 flex items-center`} />
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
