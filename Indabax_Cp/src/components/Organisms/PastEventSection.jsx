import React from 'react';
import { CalendarEvent, Clock, Person } from 'react-bootstrap-icons'; // Added 'Person' icon
import { getImageURL } from '../../utils/image-utils'; // Assuming this utility is available
import { Link } from 'react-router-dom'; // If you need internal links

/**
 * PastEventSection React Component
 *
 * Displays details of a past event including:
 * - Title and Description
 * - Image Gallery
 * - Event Schedule
 * - Comments/Testimonials
 * - Optional: Event at a Glance statistics
 */
const PastEventSection = ({
  title,
  description,
  eventDate,
  images,
  schedule,
  comments,
  stats, // Optional prop for "Event at a Glance"
  id
}) => {
  const backgroundStyle = {
    backgroundColor: 'var(--color-neutral-light)', // Consistent background
  };

  // --- Image Gallery Logic ---
  const featuredImage = images?.[0];
  const otherImages = images?.slice(1);

  // --- Comments Logic (reusing your structure) ---
  const featuredComment = comments?.[0];
  const otherComments = comments?.slice(1); // Showing all comments after the first for better context

  return (
    <section className="py-25" style={backgroundStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Event Title, Date and Description */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-heading mb-2">
            {title}
          </h1>
          <p className="text-xl text-brand-accent font-semibold mb-4 flex items-center justify-center">
            <CalendarEvent className="mr-2" /> {eventDate}
          </p>
          <p className="text-text-body max-w-2xl mx-auto">{description}</p>
        </div>

        {/* --- Event Highlights & Image Gallery --- */}
        {images && images.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-heading text-center mb-8">
              Event Highlights
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredImage && (
                <div className="relative h-full rounded-lg shadow-lg overflow-hidden group">
                  <img
                    src={getImageURL(featuredImage.url, '2024')}
                    alt={featuredImage.alt || 'Featured event image'}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-primary/60 group-hover:bg-brand-primary/70 transition-colors duration-300" />
                  <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
                    <p className="text-lg font-bold">Featured Moment</p>
                    <p className="text-sm">{featuredImage.alt}</p>
                  </div>
                </div>
              )}
              <div
                className={`grid gap-4 ${
                  featuredImage ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'
                }`}
              >
                {otherImages?.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-48 rounded-lg shadow overflow-hidden group"
                  >
                    <img
                      src={getImageURL(image.url, '2024')}
                      alt={image.alt || `Event image ${index + 2}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-primary/30 group-hover:bg-brand-primary/50 transition-colors duration-300" />
                    <div className="relative z-10 p-3 flex flex-col justify-end h-full text-white text-sm">
                      <p className="font-semibold">{image.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Optional: Add a "View All Photos" button if you have many images */}
            {/* <div className="text-center mt-8">
              <Link to="/gallery" className="btn btn-primary">View All Photos</Link>
            </div> */}
          </section>
        )}

        {/* --- Event Schedule --- */}
        {schedule && schedule.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-heading text-center mb-8">
              Event Schedule
            </h2>
            <div className="space-y-6">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex items-start group hover:shadow-lg transition-shadow duration-300"
                >
                  <Clock className="text-brand-primary text-2xl mr-4 mt-1 flex-shrink-0 group-hover:text-brand-accent transition-colors" />
                  <div>
                    <p className="text-lg font-semibold text-text-heading">
                      {item.title}
                    </p>
                    <p className="text-text-subtle text-sm mb-2">
                      {item.time}
                      {item.speaker && (
                        <span className="ml-3 flex items-center text-brand-secondary">
                          <Person className="mr-1" /> {item.speaker}
                        </span>
                      )}
                    </p>
                    <p className="text-text-body">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* --- Event at a Glance Statistics (Optional) --- */}
        {stats && stats.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-heading text-center mb-8">
              Event at a Glance
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-brand-primary text-white p-6 rounded-lg shadow-md hover:bg-brand-secondary transition-colors duration-300"
                >
                  <p className="text-4xl font-bold mb-2">{stat.number}</p>
                  <p className="text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* --- Comments/Testimonials Section (adapted from your original) --- */}
        {comments && comments.length > 0 && (
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-heading text-center mb-8">
              What People Said
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Featured Comment Card (Left Side) */}
              {featuredComment && (
                <div className="md:col-span-1 text-left md:row-span-2">
                  <div className="relative h-full rounded-lg shadow-lg overflow-hidden group">
                    <img
                      src={getImageURL(featuredComment.imageUrl, 'commentImages')}
                      alt={featuredComment.name || 'Featured comment image'}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-primary/60 group-hover:bg-brand-primary/70 transition-colors duration-300" />

                    <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
                      <p className="text-sm font-semibold mb-2">Most Popular</p>
                      <h3 className="text-2xl font-bold mb-4 leading-tight">
                        "{featuredComment.comment}"
                      </h3>
                      <p className="text-xs text-white mb-4">
                        {featuredComment.date} - By {featuredComment.name}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Other Comment Cards (Right Side Grid) */}
              {otherComments?.map((comment, index) => (
                <div
                  key={index} // Consider using a unique 'id' from comment data instead of 'index' for key
                  className="rounded-lg text-left shadow-md overflow-hidden bg-white group hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={getImageURL(comment.imageUrl, 'commentImages')}
                    alt={comment.name || 'Comment image'}
                    className="w-full h-48 object-cover object-center"
                  />
                  <div className="p-4">
                    <div className="flex items-center text-text-subtle text-sm mb-2">
                      <CalendarEvent className="mr-1 text-text-subtle" />{' '}
                      {comment.date}
                      <Clock className="ml-4 mr-1 text-text-subtle" />{' '}
                      {comment.time}{' '}
                    </div>
                    <h4 className="text-lg font-semibold text-text-heading mb-2">
                      {comment.name}
                    </h4>
                    <p className="text-text-body text-sm mb-4 line-clamp-3">
                      "{comment.comment}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Optional: Add a "View All Comments" button */}
            {/* <div className="text-center mt-8">
              <Link to="/event-comments" className="btn btn-secondary">View All Comments</Link>
            </div> */}
          </section>
        )}
      </div>
    </section>
  );
};

export default PastEventSection;