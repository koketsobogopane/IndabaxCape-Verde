import React from 'react';
import PlaceholderImage from "../../assets/Images/placeHolder.png"

const Card = ({ imageUrl, title, description, additionalDescription }) => {
    // Use a placeholder if imageUrl is not provided
    const displayImageUrl = imageUrl || PlaceholderImage;

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            {/* Image at the top of the card */}
            <img
                src={displayImageUrl}
                alt="Card Header"
                className="w-full h-48 object-cover"
            />

            {/* Card content section */}
            <div className="p-6">
                {/* Centered Heading */}
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">{title || "Card Title"}</h2>

                {/* Descriptive Text */}
                <p className="text-gray-700 text-base mb-4">
                    {description || "This is a descriptive text for the card. It can be a few lines long. The text is centered and has a reasonable line height."}
                </p>
                <p className="text-gray-700 text-base">
                    {additionalDescription}
                </p>
            </div>
        </div>
    );
};

export default Card