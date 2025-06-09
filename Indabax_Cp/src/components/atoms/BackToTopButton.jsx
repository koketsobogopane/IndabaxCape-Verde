import React, { useState, useEffect } from 'react';
import { ArrowUpCircleFill } from 'react-bootstrap-icons'; // Import the arrow up icon

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
<<<<<<< HEAD
    if (window.pageYOffset > 300) { // Show button after scrolling 300px down
=======
    if (window.pageYOffset > 300) {
      // Show button after scrolling 300px down
>>>>>>> 54a55a691565795f2dbb8235d7956d0610e2458a
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
<<<<<<< HEAD
      behavior: 'smooth' // Smooth scroll animation
=======
      behavior: 'smooth', // Smooth scroll animation
>>>>>>> 54a55a691565795f2dbb8235d7956d0610e2458a
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility); // Add scroll event listener
    return () => {
      window.removeEventListener('scroll', toggleVisibility); // Clean up on component unmount
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <button
      onClick={scrollToTop}
      // Apply Tailwind classes for fixed positioning, styling, and conditional visibility
      className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-opacity duration-300
                  ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}
                  bg-brand-primary text-white hover:bg-brand-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary`}
      aria-label="Scroll to top"
    >
      <ArrowUpCircleFill size={24} /> {/* Bootstrap icon */}
    </button>
  );
};

<<<<<<< HEAD
export default BackToTopButton;
=======
export default BackToTopButton;
>>>>>>> 54a55a691565795f2dbb8235d7956d0610e2458a
