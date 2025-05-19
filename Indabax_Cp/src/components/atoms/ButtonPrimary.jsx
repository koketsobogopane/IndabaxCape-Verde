import React from 'react'
import { Link } from 'react-router'

function ButtonPrimary({className,
        children,
        href,...props}) {

    const baseClasses = `
            bg-gradient-to-r from-purple-500 to-pink-500
            hover:from-purple-600 hover:to-pink-600
            text-white font-semibold py-3 px-6 rounded-full
            transition-colors duration-300
            text-lg inline-block
            ${className || ''}
        `;

  if (href) {
            // If href is provided, render as an anchor tag
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

export default ButtonPrimary