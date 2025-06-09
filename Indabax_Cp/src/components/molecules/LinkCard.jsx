import React from 'react';
import { Link } from 'react-router-dom';

function LinkCard({ index, card }) {
  return (
    <>
      <Link
        key={index} // Consider using a unique 'id' from card data instead of 'index' for key
        to={card.linkUrl}
        // Changed from bg-white/5 backdrop-blur-md rounded-xl shadow-lg border border-white/10
        // to bg-white rounded-xl shadow-md border border-neutral-medium
        className="group bg-white rounded-xl shadow-md border border-neutral-medium overflow-hidden 
                   transition-all duration-300 hover:shadow-lg hover:translate-y-[-3px] flex flex-col"
      >
        <div className="relative">
          <img
            src={card.imageUrl}
            alt={card.title}
            className="w-full h-64 object-cover rounded-t-xl"
          />
          {/* Removed dark overlay (bg-black/20). If an overlay is desired,
              consider a subtle brand color like bg-brand-primary/10 or bg-brand-accent/10. */}
        </div>
        <div className="p-6 flex-grow flex items-center">
          {/* Changed text-white to text-text-heading and hover:text-blue-400 to hover:text-brand-accent */}
          <h3 className="text-xl font-semibold text-text-heading group-hover:text-brand-accent transition-colors duration-300">
            {card.title}
          </h3>
        </div>
      </Link>
    </>
  );
}

export default LinkCard;
