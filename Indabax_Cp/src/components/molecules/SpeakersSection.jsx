import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Instagram, Globe, ArrowLeft, ArrowRight } from 'react-bootstrap-icons';
import { speakers } from '../../data/data';
import { getImageURL } from '../../utils/image-utils';

const SpeakersSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 text-gray-900 py-16 lg:py-18 overflow-hidden">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                    flex flex-col lg:grid lg:grid-cols-2
                    gap-12 lg:gap-16 items-center"
      >
        {/* Left Panel: Speakers Info and Controls */}
        {/* On smaller screens, text is centered. On larger screens, it's left-aligned. */}
        <div className="w-full text-center lg:text-left">
          <p className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-2 sm:mb-3">
            SPEAKERS
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Meet the
            <br className="hidden sm:inline" /> Incredible <br /> Speakers
          </h2>
          <p className="text-gray-700 max-w-md mx-auto lg:mx-0 mb-8 sm:mb-10">
            Main event for professionals in the world of AI and Innovation.
          </p>

          {/* Custom Navigation Arrows - Controls */}
          {/* Centered on small screens, left-aligned on large screens */}
          <div className="flex space-x-4 mt-8 justify-center lg:justify-start">
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="w-12 h-12 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 flex-shrink-0"
              aria-label="Previous speaker"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center hover:bg-brand-secondary transition-colors duration-300 flex-shrink-0"
              aria-label="Next speaker"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Right Panel: Speakers Carousel */}
        {/* This column will occupy full width on small screens and half on large */}
        <div className="w-full relative py-4 sm:py-8">
          <Slider ref={sliderRef} {...settings}>
            {speakers.map((speaker) => (
              <div key={speaker.id} className="px-2 sm:px-4">
                <div className="block relative h-72 rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300 sm:h-[500px] md:h-[550px] lg:h-[500px]">
                  {/* Speaker Image */}
                  <div className="absolute inset-0">
                    <img
                      src={getImageURL(speaker.image, 'speakers')}
                      alt={speaker.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          'https://placehold.co/400x400/E0E0E0/333333?text=No+Image';
                      }}
                    />

                    <div className="absolute inset-0  group-hover:bg-black/50 transition-colors duration-300 " />
                  </div>
                  <div className="relative h-fit bg-linear-to-t/longer from-black to-transparent top-96 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {speaker.name}
                    </h3>

                    <div className="flex justify-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    {speaker.social.instagram && (
                      <a
                        href={speaker.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white transition-colors duration-300"
                        aria-label={`Follow ${speaker.name} on Instagram`}
                      >
                        <Instagram size={22} />
                      </a>
                    )}
                    {speaker.social.website && (
                      <a
                        href={speaker.social.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white transition-colors duration-300"
                        aria-label={`Visit ${speaker.name}'s website`}
                      >
                        <Globe size={22} />
                      </a>
                    )}
                    {speaker.social.behance && (
                      <a
                        href={speaker.social.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white transition-colors duration-300"
                        aria-label={`View ${speaker.name}'s Behance portfolio`}
                      >
                        <span className="text-base sm:text-lg font-bold">
                          Be
                        </span>
                      </a>
                    )}
                  </div>
                  </div>
                  {/* Social Icons */}
                  

                  {/* Behance Button (if applicable) */}
                  {speaker.social.behance && (
                    <a
                      href={speaker.social.behance}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2 border border-gray-400 rounded-md text-white  transition-colors duration-300 text-sm sm:text-base"
                    >
                      Be
                    </a>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
