import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this is 'react-router-dom' for Link

function ButtonSecondary({ className, children, href, ...props }) {
    const baseClasses = `
        bg-transparent
        border-2 border-brand-accent    /* Border in brand-accent color */
        text-brand-accent              /* Text in brand-accent color */
        hover:bg-brand-accent          /* Solid brand-accent on hover */
        hover:text-white               /* White text on hover */
        font-semibold py-3 px-6 rounded-full
        transition-colors duration-300
        text-lg inline-block
        shadow-md hover:shadow-lg      /* Subtle shadow for depth and inviting feel */
        transform hover:scale-105      /* Slight scale up on hover for invitation */
        ${className || ''}
    `;

    if (href) {
        // If href is provided, render as a Link component
        return (
            <Link
                to={href}
                className={baseClasses}
                {...props}
            >
                {children}
            </Link>
        );
    }
    // Otherwise, render as a button
    return (
        <button
            className={baseClasses}
            type='button'
            {...props}
        >
            {children}
        </button>
    );
}

export default ButtonSecondary;
