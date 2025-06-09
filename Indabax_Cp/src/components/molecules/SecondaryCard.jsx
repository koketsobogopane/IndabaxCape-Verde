import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use react-router-dom for navigation
import { CalendarEvent } from 'react-bootstrap-icons'; // For date icon

// Add excerpt, date, and link as props
function SecondaryCard({ imageUrl, title, excerpt, date, link = '#' }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {imageUrl && (
        <div className="relative w-full h-48 sm:h-56 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-5 flex flex-col flex-grow">
        {/* Date */}
        {date && (
          // Changed text-gray-500 to text-text-subtle for consistency
          <p className="text-sm text-text-subtle mb-2 flex items-center">
            {/* Changed text-gray-400 for icon to text-text-subtle */}
            <CalendarEvent className="mr-2 text-text-subtle" /> {date}
          </p>
        )}
        {/* Title */}
        <h3 className="text-xl font-semibold text-text-heading mb-3 leading-tight group-hover:text-brand-accent transition-colors duration-200">
          {title}
        </h3>
        {/* Excerpt */}
        {excerpt && (
          // Changed text-gray-700 to text-text-body for consistency
          <p className="text-text-body text-base mb-4 flex-grow line-clamp-3">
            {excerpt}
          </p>
        )}
        {/* Read More Link */}
        <Link
          to={link}
          // Changed text-purple-600 and hover:text-purple-800 to brand-accent and its hover
          className="mt-auto inline-flex items-center text-brand-accent font-semibold hover:text-teal-600 transition-colors duration-200"
        >
          Read More
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default SecondaryCard;
