import React from 'react';
import { Link } from 'react-router-dom';

// You'll need actual images for the "pillars" or "offerings" of IndabaX.
// These should be abstract or conceptual images representing the themes.
import knowledgeSharingImg from '../../assets/Images/knowledge-sharing.jpg'; // Conceptual: representing learning/dissemination
import communityBuildingImg from '../../assets/Images/community-building.jpg'; // Conceptual: representing collaboration/networking
import innovationDriveImg from '../../assets/Images/innovation-drive.jpg'; // Conceptual: representing research/problem-solving

// Placeholder for logos (you'll need to import your actual logo SVGs)
import partnerLogo1 from '../../assets/Images/logos/cisco-2-logo-svgrepo-com.svg';
import partnerLogo2 from '../../assets/Images/logos/salesforce-2-logo-svgrepo-com.svg';
import partnerLogo3 from '../../assets/Images/logos/microsoft-logo-svgrepo-com.svg';
import partnerLogo4 from '../../assets/Images/logos/forbes-logo-svgrepo-com.svg';
import partnerLogo5 from '../../assets/Images/logos/google-icon-logo-svgrepo-com.svg';

const ServicesSection = () => {
    return (
        <section className="py-16 bg-white relative text-left overflow-hidden">
            {/* Grid Background */}
            <div
                className="absolute inset-0 bg-[grid_pattern] opacity-20"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px', // Adjust grid size as needed
                }}
            />

            {/* Blob Shapes (similar to your existing code) */}
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-green-500 opacity-30 blur-3xl transform translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Top Section: IndabaX Mission/Focus */}
                <div className="mb-12 text-center md:text-left">
                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">
                        — Empowering Africa through AI
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Deep Learning IndabaX: <br className="hidden md:inline"/> Fostering AI Innovation Across the Continent
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto md:mx-0">
                        The Deep Learning IndabaX is more than a conference; it's a critical movement dedicated to advancing Artificial Intelligence research and application within African communities. We bring together researchers, students, and practitioners to share knowledge, build networks, and drive solutions tailored to Africa's unique challenges.
                    </p>
                </div>

                {/* IndabaX Pillars/Offerings Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Card 1: Knowledge Sharing & Education */}
                    <Link to="/about" className="block relative h-72 rounded-lg shadow-lg overflow-hidden group"> {/* Added h-72 for fixed card height */}
                        <img
                            src={knowledgeSharingImg} // Replace with conceptual image for knowledge sharing
                            alt="Knowledge Sharing and Education"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Semi-transparent overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-colors duration-300" />
                        {/* Text Content */}
                        <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white"> {/* Adjusted for vertical alignment */}
                            <h3 className="text-xl font-semibold mb-2">Knowledge Sharing & Education</h3>
                            {/* Optional: Short description if needed */}
                            {/* <p className="text-white text-sm">Empowering the next generation of African AI leaders through cutting-edge workshops and tutorials.</p> */}
                        </div>
                    </Link>

                    {/* Card 2: Community & Collaboration */}
                    <Link to="/about" className="block relative h-72 rounded-lg shadow-lg overflow-hidden group">
                        <img
                            src={communityBuildingImg} // Replace with conceptual image for community/collaboration
                            alt="Community and Collaboration"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Semi-transparent overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-colors duration-300" />
                        {/* Text Content */}
                        <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
                            <h3 className="text-xl font-semibold mb-2">Community & Collaboration</h3>
                            {/* Optional: Short description if needed */}
                            {/* <p className="text-white text-sm">Building a vibrant network of AI enthusiasts, fostering partnerships, and facilitating impactful research.</p> */}
                        </div>
                    </Link>

                    {/* Card 3: Impact & Innovation */}
                    <Link to="/about" className="block relative h-72 rounded-lg shadow-lg overflow-hidden group">
                        <img
                            src={innovationDriveImg} // Replace with conceptual image for impact/innovation
                            alt="Impact and Innovation"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Semi-transparent overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-colors duration-300" />
                        {/* Text Content */}
                        <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
                            <h3 className="text-xl font-semibold mb-2">Impact & Innovation</h3>
                            {/* Optional: Short description if needed */}
                            {/* <p className="text-white text-sm">Driving AI solutions for real-world African challenges, contributing to socio-economic development.</p> */}
                        </div>
                    </Link>
                </div>

                {/* Partner Logos Section (placeholder logos for IndabaX partners/sponsors) */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
                    <img src={partnerLogo1} alt="Partner Logo 1" className="h-12 md:h-16 opacity-75 hover:opacity-100 transition-opacity duration-300" />
                    <img src={partnerLogo2} alt="Partner Logo 2" className="h-12 md:h-16 opacity-75 hover:opacity-100 transition-opacity duration-300" />
                    <img src={partnerLogo3} alt="Partner Logo 3" className="h-12 md:h-16 opacity-75 hover:opacity-100 transition-opacity duration-300" />
                    <img src={partnerLogo4} alt="Partner Logo 4" className="h-12 md:h-16 opacity-75 hover:opacity-100 transition-opacity duration-300" />
                    <img src={partnerLogo5} alt="Partner Logo 5" className="h-12 md:h-16 opacity-75 hover:opacity-100 transition-opacity duration-300" />
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;