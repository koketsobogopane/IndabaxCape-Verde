import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you have react-router-dom for navigation

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-neutral-light flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        {/* Large 404 text */}
        <h1 className="text-9xl font-extrabold text-brand-primary opacity-70 mb-4 sm:mb-6">
          404
        </h1>

        {/* Main heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-text-heading mb-4">
          Page Not Found
        </h2>

        {/* Descriptive text */}
        <p className="text-lg sm:text-xl text-text-body mb-8">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>

        {/* Call to action button */}
        <Link
          to="/" // Link back to the homepage
          className="inline-block bg-brand-accent hover:bg-brand-primary text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-md text-lg"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
