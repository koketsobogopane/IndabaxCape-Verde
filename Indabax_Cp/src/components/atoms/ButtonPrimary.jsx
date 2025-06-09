import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this is 'react-router-dom' for Link

function ButtonPrimary({ className, children, href, ...props }) {
  const baseClasses = `
        bg-brand-accent            /* Use solid brand-accent color */
        hover:bg-brand-accent/70         /* Slightly darker teal for hover effect */
        text-white font-semibold py-3 px-6 rounded-full
        transition-colors duration-300
        text-lg inline-block
        ${className || ''}
    `;

  if (href) {
    // If href is provided, render as an anchor tag
    return (
      <Link to={href} className={baseClasses} {...props}>
        {children}
      </Link>
    );
  }
  // Otherwise, render as a button
  return (
    <button className={baseClasses} type="button" {...props}>
      {children}
    </button>
  );
}

export default ButtonPrimary;
