import React from 'react';
import { CalendarEvent, Clock } from 'react-bootstrap-icons'; // Assuming Bootstrap Icons are available for date/time
import { getImageURL } from '../../utils/image-utils';
import { Link } from 'react-router-dom';

const CommentDisplaySection = ({ title, description, comments }) => {
  // Use neutral-light for the background
  const backgroundStyle = {
    backgroundColor: 'var(--color-neutral-light)', // Using CSS variable for consistency
  };

  // Filter out the first comment for the featured spot
  const featuredComment = comments?.[0];
  // Note: Original code skipped comments[1] with slice(2).
  // If you intend to show all comments after the first, change to comments?.slice(1).
  const otherComments = comments?.slice(2);

  return (
    <section className="py-12" style={backgroundStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Description */}
        <div className="text-center mb-10">
          {/* Removed gradient from title, using text-text-heading */}
          <h1 className="text-3xl sm:text-4xl font-bold text-text-heading mb-4">
            {title}
          </h1>
          {/* Changed text color to text-text-body */}
          <p className="text-text-body max-w-2xl mx-auto">{description}</p>
        </div>

        {/* Grid Layout for Comments/News */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Comment Card (Left Side) */}
          {featuredComment && (
            <div className="md:col-span-1 md:row-span-2">
              <div className="relative h-full rounded-lg shadow-lg overflow-hidden group">
                <img
                  src={getImageURL(featuredComment.imageUrl, 'commentImages')}
                  alt={featuredComment.name || 'Featured image'}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay for readability - changed to brand-primary with opacity */}
                <div className="absolute inset-0 bg-brand-primary/60 group-hover:bg-brand-primary/70 transition-colors duration-300" />

                {/* Content positioned at the bottom-left */}
                <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
                  {/* Kept white for contrast on dark overlay, but could be brand-accent if desired */}
                  <p className="text-sm font-semibold mb-2">Most Popular</p>
                  <h3 className="text-2xl font-bold mb-4 leading-tight">
                    {featuredComment.comment}
                  </h3>
                  {/* Changed text-gray-200 to text-white for consistency */}
                  <p className="text-xs text-white mb-4">
                    {featuredComment.date} - By {featuredComment.name}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Other Comment Cards (Right Side Grid) */}
          {otherComments?.map((comment, index) => (
            // Consider using a unique 'id' from comment data instead of 'index' for key
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="rounded-lg shadow-md overflow-hidden bg-white group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Small Image on Top */}
              <img
                src={getImageURL(comment.imageUrl, 'commentImages')}
                alt={comment.name || 'Comment image'}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-4">
                {/* Date and Time Row - changed icon and text color to text-text-subtle */}
                <div className="flex items-center text-text-subtle text-sm mb-2">
                  <CalendarEvent className="mr-1 text-text-subtle" />{' '}
                  {comment.date}
                  <Clock className="ml-4 mr-1 text-text-subtle" />{' '}
                  {comment.time}{' '}
                </div>
                {/* Title/Name - changed text color to text-text-heading */}
                <h4 className="text-lg font-semibold text-text-heading mb-2">
                  {comment.name}
                </h4>
                {/* Short Comment/Description - changed text color to text-text-body */}
                <p className="text-text-body text-sm mb-4 line-clamp-3">
                  {comment.comment}
                </p>
                {/* Read More Link - changed text color to brand-accent
                <Link
                  to={comment.link || '#'}
                  className="text-brand-accent hover:text-brand-accent/60 text-sm font-medium"
                >
                  Read More &rarr;
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommentDisplaySection;
