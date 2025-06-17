import React, { useState } from 'react';
import { getImageURL } from '../../utils/image-utils';

const Card = ({ imageUrl, title, description, additionalDescription }) => {
    const displayImageUrl = imageUrl;

    // Define initial and hover colors for the topography pattern
    // These should ideally align with your Tailwind theme's brand-accent colors.
    const initialTopographyColor = 'rgba(255, 255, 255, 0.08)'; // A subtle white for the lines
    const hoverTopographyColor = '#3E5EB9'; // A more opaque brand-accent for hover

    // State to manage the fill color of the SVG topography paths
    const [topographyFillColor, setTopographyFillColor] = useState(initialTopographyColor);

    return (
        <div
            className="block relative max-h-96 rounded-lg overflow-hidden group"
            style={{ transitionDuration: '0.2s' }}
            onMouseEnter={() => setTopographyFillColor(hoverTopographyColor)} // Change color on hover
            onMouseLeave={() => setTopographyFillColor(initialTopographyColor)} // Revert color on mouse leave
        >
            {/* Image section container - will hold the image and background topography */}
            <div className="relative bg-brand-primary inset-0  rounded-lg">

                {/* SVG Topography Pattern */}
                <div
                    className="absolute inset-0 z-0 transition-colors duration-300 ease-in-out"
                    style={{ backgroundColor: 'transparent' }} // Ensure the background of this div is transparent
                >
                    <svg
                        className="w-full h-full opacity-60"
                        viewBox="0 0 100 100" // Adjust viewBox based on desired pattern density and scale
                        preserveAspectRatio="xMidYMid slice" // Ensures the pattern covers the area
                        xmlns="http://www.w3.org/2000/svg"
                        
                    >
                        {/* Define a filter for a subtle blur/glow effect on the lines */}
                        <filter id="topography-blur">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
                        </filter>

                        {/* Topography lines - adjust paths for desired pattern */}
                        {/* Path 1 */}
                        <path
                            d="M0 30 Q 45 10 50 20 T 100 10"
                            stroke={topographyFillColor}
                            strokeWidth="8"
                            fill="none"
                            style={{ transition: 'stroke 0.3s ease-in-out' }} // Transition for stroke color
                        />
                        {/* Path 2 */}
                        <path
                            d="M0 40 Q 20 30 40 40 T 100 25 80"
                            stroke={topographyFillColor}
                            strokeWidth="1.5"
                            fill="none"
                            style={{ transition: 'stroke 0.3s ease-in-out' }}
                        />
                         {/* Path 3 */}
                        <path
                            d="M0 60 Q 30 50 60 60 T 100 60"
                            stroke={topographyFillColor}
                            strokeWidth="3"
                            fill="none"
                            style={{ transition: 'stroke 0.3s ease-in-out' }}
                        />
                        {/* Path 4 */}
                        <path
                            d="M0 80 Q 25 70 50 80 T 100 80"
                            stroke={topographyFillColor}
                            strokeWidth="1"
                            fill="none"
                            style={{ transition: 'stroke 0.3s ease-in-out' }}
                        />
                    </svg>
                </div>

                {/* Main Image or Placeholder - ensured to be on top with z-index */}
                {displayImageUrl ? (
                    <img
                        src={getImageURL(displayImageUrl, 'organisers')}
                        alt={title || "Card Header"}
                        className="relative z-10 transition-transform group-hover:scale-110 duration-500 w-full h-66 object-cover rounded-lg"
                    />
                ) : (
                    // Placeholder div if no imageUrl is provided
                    <div className="relative z-10 w-full h-56 flex items-center justify-center rounded-lg text-text-subtle text-center text-sm p-4 bg-gray-200">
                        <span className="font-semibold">Image Not Available</span>
                    </div>
                )}
            </div>

            {/* Card content section (always visible) */}
            <div className="relative p-5 space-y-3">
                {/* Title (Organiser Name) */}
                <h2 className="text-xl font-bold text-text-heading text-center">
                    {title || "Card Title"}
                </h2>
                {/* Description (Role) */}
                <p className="text-brand-secondary font-semibold text-base text-center">
                    {description || "Role Description"}
                </p>
                {/* Additional Description (Bio) */}
                {additionalDescription && (
                    <p className="text-text-body text-sm leading-relaxed text-center">
                        {additionalDescription}
                    </p>
                )}
            </div>
        </div>
    );
};


export default Card;