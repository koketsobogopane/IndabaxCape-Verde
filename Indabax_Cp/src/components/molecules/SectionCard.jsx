import React from 'react';
import { Link } from 'react-router-dom';

// You'll need actual images for the service cards and logos.
// Make sure these paths are correct relative to this component.
import missionImg from '../../assets/Images/missionImg.jpg'; // Placeholder - replace with actual image relevant to mission
import visionImg from '../../assets/Images/visionImg.jpg'; // Placeholder - replace with actual image relevant to vision
import purposeImg from '../../assets/Images/purposeImg.jpg'; // Placeholder - replace with actual image relevant to purpose

// Placeholder for logos (you'll need to import your actual logo images)
// Using more generic names as these might be partners or sponsors
import partnerLogo1 from '../../assets/Images/logos/google-icon-logo-svgrepo-com.svg';
import partnerLogo2 from '../../assets/Images/logos/forbes-logo-svgrepo-com.svg';
import partnerLogo3 from '../../assets/Images/logos/microsoft-logo-svgrepo-com.svg';
import partnerLogo4 from '../../assets/Images/logos/salesforce-2-logo-svgrepo-com.svg';
import partnerLogo5 from '../../assets/Images/logos/cisco-2-logo-svgrepo-com.svg';

// Import your CallToAction component
import CallToAction from './CallToActionSection'; // Adjust path as needed
<<<<<<< HEAD
import TextLink from '../atoms/TextLink';

const ServicesSection = ({ showPartners = false }) => { // Added showPartners prop with a default value
=======

const ServicesSection = ({ showPartners = false }) => {
  // Added showPartners prop with a default value
>>>>>>> 54a55a691565795f2dbb8235d7956d0610e2458a
  // Array of partner logos. You can dynamically populate this from an API or config.
  const partners = [
    partnerLogo1,
    partnerLogo2,
    partnerLogo3,
    partnerLogo4,
    partnerLogo5,
    // Add more partner logos here
  ];

  return (
    <section className="py-16 bg-neutral-light relative text-left overflow-hidden">
      {/* Removed Grid Background - subtle backgrounds can be achieved with solid colors */}

      {/* Blob Shapes - changed to solid colors and reduced prominence */}
      <div className="absolute top-0 left-0 w-56 h-5 rounded-full bg-brand-secondary opacity-20 blur-2xl transform -translate-x-1/4 -translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section: IndabaX Mission/Focus */}
        <div className="mb-12 text-center md:text-left">
          <p className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-2">
            — Empowering Africa through AI
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-6 leading-tight">
<<<<<<< HEAD
            Deep Learning IndabaX: <br className="hidden md:inline" /> Fostering AI Innovation Across the Continent
          </h2>
          <p className="text-text-body max-w-2xl mx-auto md:mx-0">
            The Deep Learning IndabaX is more than a conference; it's a critical movement dedicated to advancing Artificial Intelligence research and application within African communities. We bring together researchers, students, and practitioners to share knowledge, build networks, and drive solutions tailored to Africa's unique challenges. <TextLink href='https://deeplearningindaba.com/about/our-mission/'>Learn more about Deep Learning Indaba here.</TextLink>
=======
            Deep Learning IndabaX: <br className="hidden md:inline" /> Fostering
            AI Innovation Across the Continent
          </h2>
          <p className="text-text-body max-w-2xl mx-auto md:mx-0">
            The Deep Learning IndabaX is more than a conference; it's a critical
            movement dedicated to advancing Artificial Intelligence research and
            application within African communities. We bring together
            researchers, students, and practitioners to share knowledge, build
            networks, and drive solutions tailored to Africa's unique
            challenges.
>>>>>>> 54a55a691565795f2dbb8235d7956d0610e2458a
          </p>
        </div>

        {/* Service Cards Grid (Now representing Mission, Vision, Purpose) */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Our Mission */}
          <Link
            to="/about#mission"
            className="block relative h-72 rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300"
          >
            <div className="absolute inset-0">
              <img
                src={missionImg} // Replace with actual image
                alt="Our Mission"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Subtle overlay using brand primary */}
              <div className="absolute inset-0 bg-brand-primary/30 group-hover:bg-brand-primary/50 transition-colors duration-300" />
            </div>
            <div className="relative h-full flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Our Mission
              </h3>
              {/* Optional: Add a short description here if needed */}
            </div>
          </Link>

          {/* Card 2: Our Vision */}
          <Link
            to="/about#vision" // Changed link to vision
            className="block relative h-72 rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300"
          >
            <div className="absolute inset-0">
              <img
                src={visionImg} // Changed image to visionImg
                alt="Our Vision"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Subtle overlay using brand primary */}
              <div className="absolute inset-0 bg-brand-primary/30 group-hover:bg-brand-primary/50 transition-colors duration-300" />
            </div>
            <div className="relative h-full flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Our Vision
              </h3>
              {/* Optional: Add a short description here if needed */}
            </div>
          </Link>

          {/* Card 3: Our Purpose */}
          <Link
            to="/about#purpose" // Changed link to purpose
            className="block relative h-72 rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300"
          >
            <div className="absolute inset-0">
              <img
                src={purposeImg} // Changed image to purposeImg
                alt="Our Purpose"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Subtle overlay using brand primary */}
              <div className="absolute inset-0 bg-brand-primary/30 group-hover:bg-brand-primary/50 transition-colors duration-300" />
            </div>
            <div className="relative h-full flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Our Purpose
              </h3>
              {/* Optional: Add a short description here if needed */}
            </div>
          </Link>
        </div>

        {/* --- */}

        {/* Conditional Rendering for Partners or Call to Action */}
        {showPartners && partners.length > 0 ? (
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {partners.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                className="h-10 md:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            ))}
          </div>
        ) : (
<<<<<<< HEAD
          <div className="mt-16"> {/* Added margin top for spacing */}
=======
          <div className="mt-16">
            {' '}
            {/* Added margin top for spacing */}
>>>>>>> 54a55a691565795f2dbb8235d7956d0610e2458a
            <CallToAction />
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
