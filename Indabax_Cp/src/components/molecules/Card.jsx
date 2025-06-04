import React from 'react';

const Card = ({ imageUrl, title, description, additionalDescription }) => {
  // Use a solid background placeholder if imageUrl is not provided
  // Using a more generic placeholder URL or a Tailwind class for a solid color background
  // If you prefer a static placeholder image, use: "https://via.placeholder.com/400x300.png?text=No+Image"
  const displayImageUrl = imageUrl; // Keep original if provided, otherwise handle via className for no image

  return (
    <div
      className="bg-white rounded-xl shadow-lg border border-neutral-medium
                       hover:shadow-xl transition-all duration-300
                       hover:translate-y-[-5px] hover:border-brand-accent
                       overflow-hidden"
      style={{ transitionDuration: '0.2s' }}
    >
      {/* Image at the top of the card */}
      <div className="relative">
        {displayImageUrl ? (
          <img
            src={displayImageUrl}
            alt={title || 'Card Header'}
            className="w-full h-56 object-cover rounded-t-xl"
          />
        ) : (
          // Placeholder div if no imageUrl is provided
          <div className="w-full h-56 flex items-center justify-center bg-neutral-medium rounded-t-xl text-text-subtle text-center text-sm p-4">
            <span className="font-semibold">Image Not Available</span>
          </div>
        )}
        {/* Removed gradient overlay. You can add a subtle solid overlay if needed,
                    e.g., <div className="absolute inset-0 bg-brand-primary/10 rounded-t-xl" />
                    but for organizer cards, often a clean image is preferred. */}
      </div>

      {/* Card content section */}
      <div className="p-6 space-y-3">
        {' '}
        {/* Adjusted spacing */}
        {/* Title (Organiser Name) */}
        <h2 className="text-xl font-bold text-text-heading text-center">
          {' '}
          {/* Smaller font, bold, text-text-heading */}
          {title || 'Card Title'}
        </h2>
        {/* Description (Role) */}
        <p className="text-brand-secondary font-semibold text-base text-center">
          {' '}
          {/* brand-secondary for role, semibold */}
          {description || 'Role Description'}
        </p>
        {/* Additional Description (Bio) */}
        {additionalDescription && (
          <p className="text-text-body text-sm leading-relaxed text-center">
            {' '}
            {/* text-text-body for bio, smaller, relaxed leading */}
            {additionalDescription}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
