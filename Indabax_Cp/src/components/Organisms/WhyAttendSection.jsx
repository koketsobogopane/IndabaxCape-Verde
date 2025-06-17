import React from 'react';
import { getImageURL } from '../../utils/image-utils';
import ButtonPrimary from '../atoms/ButtonPrimary';
// Generic SVG Icon component to replace react-bootstrap-icons
const GenericIcon = ({ size = 36, children }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Simple circle or generic shape as a fallback */}
        <circle cx="12" cy="12" r="10" />
        {children} {/* Allows for specific paths if provided later */}
    </svg>
);


// Placeholder image URLs for the benefit sections
// In a real application, you'd replace these with actual image paths or a utility to get them.
const getBenefitImageURL = (index) => {
    switch (index) {
        case 0: return getImageURL('cutting_edge.jpg','Images'); // Example image 1
        case 1: return getImageURL('unrivalled_networking.jpg','Images'); // Example image 2
        case 2: return getImageURL('career_advancements.jpg','Images'); // Example image 3
        case 3: return getImageURL('shape_africa.jpg','Images'); // Example image 4
        default: return getImageURL('career_advancements.jpg','Images');
    }
};


const WhyAttendSection = () => {
    const benefits = [
        {
            // Replaced LightbulbFill with GenericIcon
            icon: <GenericIcon size={36}><path d="M9.5 2h5C16.33 2 17 2.67 17 3.5v1A1.5 1.5 0 0 1 15.5 6h-5A1.5 1.5 0 0 1 9 4.5v-1C9 2.67 9.67 2 10.5 2ZM8 6.5A1.5 1.5 0 0 0 9.5 8h5a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 15.5 5h-5A1.5 1.5 0 0 0 9 6.5v-1Zm1 2A1.5 1.5 0 0 0 10.5 10h5a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 15.5 8h-5A1.5 1.5 0 0 0 9 9.5v-1Zm-1 2A1.5 1.5 0 0 0 9.5 12h5a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 15.5 11h-5A1.5 1.5 0 0 0 9 12.5v-1Zm1 2A1.5 1.5 0 0 0 10.5 14h5a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 15.5 13h-5A1.5 1.5 0 0 0 9 14.5v-1Z"/></GenericIcon>,
            title: 'Cutting-Edge Insights',
            tagline: 'Stay Ahead of the Curve',
            description: 'Learn from leading experts and researchers on the latest advancements and future trends in AI and machine learning.',
            detail1: { label: 'Expert-led Sessions', value: 'Over 50 Speakers' },
            detail2: { label: 'Interactive Workshops', value: 'Hands-on Learning' },
        },
        {
            // Replaced PeopleFill with GenericIcon
            icon: <GenericIcon size={36}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.33 0 2.45.69 3.09 1.7L12 9.55 8.91 6.7C9.55 5.69 10.67 5 12 5zm0 14.5c-2.42 0-4.5-1.74-5-4 1.62-1.28 3.52-2 5-2s3.38.72 5 2c-.5.7-2.58 4-5 4z"/></GenericIcon>,
            title: 'Unrivalled Networking',
            tagline: 'Connect & Collaborate',
            description: 'Connect with a diverse community of AI professionals, academics, policymakers, and enthusiasts from across Africa and globally.',
            detail1: { label: 'Global Community', value: '1000+ Attendees' },
            detail2: { label: 'Dedicated Lounges', value: 'Facilitated Connections' },
        },
        {
            // Replaced BriefcaseFill with GenericIcon
            icon: <GenericIcon size={36}><path d="M19 4h-4.18c-.41-.78-1.28-1.3-2.29-1.3s-1.88.52-2.29 1.3H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 0h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1zM5 6h14v13H5V6zm2 5h10v2H7v-2z"/></GenericIcon>,
            title: 'Career Advancement',
            tagline: 'Boost Your Professional Journey',
            description: 'Discover new opportunities, explore collaborations, and gain skills to propel your professional journey in the AI landscape.',
            detail1: { label: 'Recruitment Opportunities', value: 'Top Companies' },
            detail2: { label: 'Skill-Building Tracks', value: 'Certifications Available' },
        },
        {
            // Replaced GlobeAmericas with GenericIcon
            icon: <GenericIcon size={36}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93S8.05 4.56 11 4.07V20l-.07-.07c-.64-.63-1.07-1.46-1.07-2.36s.43-1.73 1.07-2.36L11 14.5V20l-.07-.07c-.64-.63-1.07-1.46-1.07-2.36s.43-1.73 1.07-2.36L11 14.5V20zM17.93 11l.07.07c.63.64 1.07 1.46 1.07 2.36s-.43 1.73-1.07 2.36L17.93 16V4.07C18.95 4.56 21 8.05 21 12s-2.05 7.44-4 7.93V11zm-6-9.93c-2.95.49-5 3.85-5 7.93s2.05 7.44 5 7.93V11l.07.07c.63.64 1.07 1.46 1.07 2.36s-.43 1.73-1.07 2.36L11 14.5V20c2.95-.49 5-3.85 5-7.93s-2.05-7.44-5-7.93z"/></GenericIcon>,
            title: 'Shape Africa\'s AI Future',
            tagline: 'Impact & Innovate',
            description: 'Contribute to the critical conversations shaping responsible AI development, ethical considerations, and innovative applications unique to the African continent.',
            detail1: { label: 'Policy Discussions', value: 'Influence AI Strategy' },
            detail2: { label: 'African Solutions', value: 'Local Impact' },
        },
    ];

    

    return (
        <section className="py-16 bg-white text-gray-800 topography"> {/* Adjusted text color for better contrast on white background */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-2">
                    Unlock Your AI Potential
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12"> {/* Adjusted heading color */}
                    WHY ATTEND INDABAX 2025
                </h2>

                <div className="flex flex-col space-y-16"> {/* Container for stacked benefit items */}
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            // Alternate image left/right layout based on index
                            className={`relative flex flex-col md:flex-row 
                                        ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
                                        bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200`} /* Changed bg-neutral-light to bg-white and added border */
                        >
                            {/* Left/Right Image Section */}
                            <div className="w-full md:w-1/2 flex items-center justify-center overflow-hidden">
                                <img
                                    src={getBenefitImageURL(index)}
                                    alt={benefit.title}
                                    className="w-full h-64 md:h-full object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="relative w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between items-start text-left">
                                {/* Numbered Circle (01, 02, 03, 04) - positioned absolutely */}
                                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 md:top-4 md:right-4 
                                                w-16 h-16 sm:w-20 sm:h-20 
                                                bg-brand-accent rounded-full flex items-center justify-center 
                                                text-white text-2xl sm:text-3xl font-bold shadow-lg">
                                    {String(index + 1).padStart(2, '0')}
                                </div>

                                {/* Top Right Info (Time | Location equivalent) */}
                                <p className="text-gray-500 text-sm font-medium mb-2 flex items-center gap-2">
                                    {/* Using a simple circle icon instead of a unicode clock for theme consistency */}
                                    <svg className="w-4 h-4 text-brand-accent" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg> {benefit.tagline}
                                </p>

                                {/* Main Title */}
                                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                                    {benefit.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-700 mb-6 flex-grow">{benefit.description}</p> {/* Adjusted text color */}

                                {/* Speaker-like Details / Icon */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 bg-brand-accent/20 text-brand-accent rounded-full">
                                            {benefit.icon}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">{benefit.detail1.label}</p>
                                            <p className="text-sm text-gray-700">{benefit.detail1.value}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 bg-brand-accent/20 text-brand-accent rounded-full">
                                            {benefit.icon} {/* Using the same icon for simplicity */}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">{benefit.detail2.label}</p>
                                            <p className="text-sm text-gray-700">{benefit.detail2.value}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Purchase Ticket Button (replicated styling of ButtonPrimary) */}
                                <ButtonPrimary
                                    className="bg-brand-accent hover:bg-brand-accent/70 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 text-lg inline-block w-full sm:w-auto"
                                    type='button'
                                >
                                    Secure Your Spot
                                </ButtonPrimary>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyAttendSection;
