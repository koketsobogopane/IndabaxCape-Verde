import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import Logo from '../../assets/Images/IndabaXLogo.png'; // Assuming your logo image is light and works on dark backgrounds
// Only import CaretDownFill and CaretUpFill as they are still used for the dropdown caret
import { CaretDownFill, CaretUpFill } from 'react-bootstrap-icons';


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false); // State for events dropdown
    const location = useLocation(); // Get the current location object

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Close dropdown when mobile menu is toggled
        if (isEventsDropdownOpen) {
            setIsEventsDropdownOpen(false);
        }
    };

    // Data for past events (you would typically fetch this from an API or a data source)
    const allPastEvents = [
        { id: '2024', label: 'Indabax Cape Verde 2024', path: '/event/2024' },
    ];

    const navItems = [
        { label: 'Home', href: '/' }, // Removed icon property
        { label: 'About', href: '/about' }, // Removed icon property
        {
            label: 'Past Events',
            type: 'dropdown', // Special type for dropdown
            subItems: allPastEvents,
        },
        { label: 'FAQ', href: '/faq' }, // Removed icon property
    ];

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

    // Function to determine if a link is active
    const isActive = (path) => {
        // For dropdowns (like /event/...), check if the current path starts with the base path
        if (path === '/event' && location.pathname.startsWith('/event/')) {
            return true;
        }
        // For exact matches
        return location.pathname === path;
    };


    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
                ${isScrolled
                    ? 'bg-brand-primary shadow-lg' // Solid brand-primary when scrolled
                    : 'bg-brand-primary/30' // Slightly transparent brand-primary when not scrolled
                } backdrop-blur-sm`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-white font-bold text-xl flex justify-center items-center gap-3">
                            <img src={Logo} alt="IndabaX Cabo Verde Logo" width={150} />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                item.type === 'dropdown' ? (
                                    <div
                                        key={item.label}
                                        className="relative"
                                        onClick={toggleMobileMenu}                                       
                                    >
                                        <button
                                            type="button"
                                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center focus:outline-none
                                                       ${isActive('/event') // Check if any event page is active
                                                           ? 'bg-brand-secondary text-white' // Active style
                                                           : 'text-white hover:bg-brand-secondary/50' // Default or hover style
                                                       }`}
                                            aria-expanded={isEventsDropdownOpen}
                                            onClick={() => setIsEventsDropdownOpen(!isEventsDropdownOpen)} // Toggle on click for accessibility
                                        >
                                            {item.label} {/* Removed item.icon */}
                                            {isEventsDropdownOpen ? (
                                                <CaretUpFill className="ml-2 text-xs" />
                                            ) : (
                                                <CaretDownFill className="ml-2 text-xs" />
                                            )}
                                        </button>
                                        {isEventsDropdownOpen && (
                                            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-brand-primary ring-1 ring-black ring-opacity-5 z-20">
                                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                    {item.subItems.map((subItem) => (
                                                        <Link
                                                            key={subItem.id}
                                                            to={subItem.path}
                                                            className={`block px-4 py-2 text-sm transition-colors duration-200
                                                                        ${isActive(subItem.path)
                                                                            ? 'bg-brand-accent text-brand-primary font-semibold' // Active dropdown item style
                                                                            : 'text-white hover:bg-brand-secondary/70' // Default or hover dropdown item style
                                                                        }`}
                                                            role="menuitem"
                                                            onClick={() => setIsEventsDropdownOpen(false)} // Close dropdown on item click
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        key={item.label}
                                        to={item.href}
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center
                                                   ${isActive(item.href)
                                                       ? 'bg-brand-secondary text-white' // Active style
                                                       : 'text-white hover:bg-brand-secondary/50' // Default or hover style
                                                   }`}
                                    >
                                        {item.label} {/* Removed item.icon */}
                                    </Link>
                                )
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
                                <span className="h-6 w-6 flex items-center justify-center text-white text-xl">X</span> // Replaced bi-x icon
                            ) : (
                                <span className="h-6 w-6 flex items-center justify-center text-white text-xl">&#9776;</span> // Replaced bi-list icon (☰)
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
                        item.type === 'dropdown' ? (
                            <div key={item.label}>
                                <button
                                    type="button"
                                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium
                                               transition-colors duration-200 flex items-center justify-between focus:outline-none
                                               ${isActive('/event')
                                                   ? 'bg-brand-secondary text-white' // Active style for mobile dropdown trigger
                                                   : 'text-white hover:bg-brand-secondary/50'
                                               }`}
                                    onClick={() => setIsEventsDropdownOpen(!isEventsDropdownOpen)}
                                >
                                    <span className="flex items-center">{item.label}</span> {/* Removed item.icon */}
                                    {isEventsDropdownOpen ? (
                                        <CaretUpFill className="ml-2 text-sm" />
                                    ) : (
                                        <CaretDownFill className="ml-2 text-sm" />
                                    )}
                                </button>
                                {isEventsDropdownOpen && (
                                    <div className="ml-4 mt-1 space-y-1">
                                        {item.subItems.map((subItem) => (
                                            <Link
                                                key={subItem.id}
                                                to={subItem.path}
                                                className={`block px-4 py-2 text-sm rounded-md transition-colors duration-200
                                                            ${isActive(subItem.path)
                                                                ? 'bg-brand-accent text-brand-primary font-semibold' // Active dropdown item style
                                                                : 'text-white hover:bg-brand-secondary/70'
                                                            }`}
                                                onClick={() => {
                                                    setIsMobileMenuOpen(false); // Close mobile menu
                                                    setIsEventsDropdownOpen(false); // Close dropdown
                                                }}
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={item.label}
                                to={item.href}
                                className={`block px-3 py-2 rounded-md text-base font-medium
                                           transition-colors duration-500 flex items-center justify-center
                                           ${isActive(item.href)
                                               ? 'bg-brand-secondary text-white ' // Active style for mobile link
                                               : 'text-white hover:bg-brand-secondary/50 '
                                           }`}
                                onClick={() => setIsMobileMenuOpen(false)} // Close mobile menu on link click
                            >
                                {item.label} {/* Removed item.icon */}
                            </Link>
                        )
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;