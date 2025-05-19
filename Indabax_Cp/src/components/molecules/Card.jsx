import React from 'react';

const Card = ({ imageUrl, title, description, additionalDescription }) => {
    // Use a placeholder if imageUrl is not provided
    const displayImageUrl = imageUrl || "https://placehold.co/400x300";
    return (
        <div
            className="bg-white/5 backdrop-blur-md rounded-xl shadow-lg border border-white/10
                       hover:shadow-xl transition-all duration-300
                       hover:scale-[1.02] hover:border-purple-500/20
                       overflow-hidden hover:translate-y-[-5px]
                       "
            style={{ transitionDuration: '0.2s' }}
        >
            {/* Image at the top of the card */}
            <div className="relative">
                <img
                    src={displayImageUrl}
                    alt="Card Header"
                    className="w-full h-56 object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-t-xl" />
            </div>

            {/* Card content section */}
            <div className="p-6 space-y-4">
                {/* Title */}
                <h2 className="text-2xl font-semibold text-white text-center">
                    {title || "Card Title"}
                </h2>
                {/* Description */}
                <p className="text-gray-300 text-base">
                    {description ||
                        "This is a descriptive text for the card. It can be a few lines long. The text is centered and has a reasonable line height."}
                </p>
                {additionalDescription && (
                    <p className="text-gray-300 text-base">
                        {additionalDescription}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Card;