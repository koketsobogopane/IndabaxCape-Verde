import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-4 w-full z-10 flex justify-center-safe">
      <nav className=" py-4 w-[75%] bg-sky-100 rounded-lg drop-shadow-xl">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="font-bold text-lg">#IndabAx</div>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link to="/" className="hover:text-shadow-amber-200 text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-shadow-amber-200 text-sm">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-shadow-amber-200 text-sm"
              >
                Participate
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-shadow-amber-200 text-sm"
              >
                Program
              </Link>
            </li>
          </ul>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="focus:outline-none text-black"
              type="button"
            >
              <i className="bi bi-list-nested" />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="bg-gray-700 py-2 md:hidden">
            <ul className="px-4 py-2 space-y-2">
              <li>
                <Link to="/" className="block hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="block hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="block hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
