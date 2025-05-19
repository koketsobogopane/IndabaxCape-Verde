import React from 'react';
import { Link } from 'react-router-dom';

function LinkCard({ index, card }) {
  return (
    <>
      <Link
        key={index}
        to={card.linkUrl}
        className="group bg-white/5 backdrop-blur-md rounded-xl shadow-lg border border-white/10 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col"
      >
        <div className="relative">
          <img
            src={card.imageUrl}
            alt={card.title}
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <div className="absolute inset-0 bg-black/20 rounded-t-xl" />
        </div>
        <div className="p-6 flex-grow flex items-center">
          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
            {card.title}
          </h3>
        </div>
      </Link>
    </>
  );
}

export default LinkCard;
