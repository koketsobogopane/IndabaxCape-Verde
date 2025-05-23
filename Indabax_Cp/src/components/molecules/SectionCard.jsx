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

const ServicesSection = () => {
    return (
        <section className="py-16 bg-neutral-light relative text-left overflow-hidden">
            {/* Removed Grid Background - subtle backgrounds can be achieved with solid colors */}

            {/* Blob Shapes - changed to solid colors and reduced prominence */}
            <div className="absolute top-0 left-0 w-56 h-56 rounded-full bg-brand-secondary opacity-20 blur-2xl transform -translate-x-1/4 -translate-y-1/4" />
            <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-brand-primary opacity-20 blur-2xl transform translate-x-1/4 translate-y-1/4" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Top Section: IndabaX Mission/Focus */}
                <div className="mb-12 text-center md:text-left">
                    <p className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-2">
                        — Empowering Africa through AI
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-6 leading-tight">
                        Deep Learning IndabaX: <br className="hidden md:inline"/> Fostering AI Innovation Across the Continent
                    </h2>
                    <p className="text-text-body max-w-2xl mx-auto md:mx-0">
                        The Deep Learning IndabaX is more than a conference; it's a critical movement dedicated to advancing Artificial Intelligence research and application within African communities. We bring together researchers, students, and practitioners to share knowledge, build networks, and drive solutions tailored to Africa's unique challenges.
                    </p>
                </div>

                {/* Service Cards Grid (Now representing Mission, Vision, Purpose) */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Card 1: Our Mission */}
                    <Link to="/about#mission" className="block relative h-72 rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col">
                            <div className="relative h-48">
                                <img
                                    src={missionImg} // Replace with actual image
                                    alt="Our Mission"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* Subtle overlay using brand primary */}
                                <div className="absolute inset-0 bg-brand-primary/30 group-hover:bg-brand-primary/50 transition-colors duration-300" />
                            </div>
                            <div className="p-6 flex flex-col justify-center h-24">
                                <h3 className="text-xl font-semibold text-text-heading mb-2">Our Mission</h3>
                                {/* Optional: Shorten the descriptive text for the card */}
                            </div>
                        </div>
                    </Link>

                    {/* Card 2: Our Vision */}
                    <Link to="/about#vision" className="block relative h-72 rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col">
                            <div className="relative h-48">
                                <img
                                    src={visionImg} // Replace with actual image
                                    alt="Our Vision"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* Subtle overlay using brand secondary */}
                                <div className="absolute inset-0 bg-brand-secondary/30 group-hover:bg-brand-secondary/50 transition-colors duration-300" />
                            </div>
                            <div className="p-6 flex flex-col justify-center h-24">
                                <h3 className="text-xl font-semibold text-text-heading mb-2">Our Vision</h3>
                                {/* Optional: Shorten the descriptive text for the card */}
                            </div>
                        </div>
                    </Link>

                    {/* Card 3: Our Purpose */}
                    <Link to="/about#purpose" className="block relative h-72 rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col">
                            <div className="relative h-48">
                                <img
                                    src={purposeImg} // Replace with actual image
                                    alt="Our Purpose"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* Subtle overlay using brand accent */}
                                <div className="absolute inset-0 bg-brand-accent/30 group-hover:bg-brand-accent/50 transition-colors duration-300" />
                            </div>
                            <div className="p-6 flex flex-col justify-center h-24">
                                <h3 className="text-xl font-semibold text-text-heading mb-2">Our Purpose</h3>
                                {/* Optional: Add a short description if needed */}
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Logos Section (Now Partners/Sponsors) */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
                    <img src={partnerLogo1} alt="Partner Logo 1" className="h-10 md:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0" />
                    <img src={partnerLogo2} alt="Partner Logo 2" className="h-10 md:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0" />
                    <img src={partnerLogo3} alt="Partner Logo 3" className="h-10 md:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0" />
                    <img src={partnerLogo4} alt="Partner Logo 4" className="h-10 md:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0" />
                    <img src={partnerLogo5} alt="Partner Logo 5" className="h-10 md:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0" />
                    {/* Add more partner logos here */}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;