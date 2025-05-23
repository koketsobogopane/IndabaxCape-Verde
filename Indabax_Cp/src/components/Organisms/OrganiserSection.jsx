import React from 'react';
import Card from '../molecules/Card';
import Slider from 'react-slick';
import './OrganisersCarousel.css'; // Make sure this is imported
import { getImageURL } from '../../utils/image-utils';

// Ensure slick-carousel's base CSS is imported globally (e.g., in App.js or index.js)
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const OrganisersSection = ({ title, description, organisers }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Needs to be an odd number for centerMode to work effectively on large screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        centerMode: true, // Enable center mode
        centerPadding: '0px', // We'll handle padding/spacing with custom CSS transforms

        // Responsive settings for different screen sizes
        responsive: [
            {
                breakpoint: 1024, // For screens smaller than 1024px (lg breakpoint)
                settings: {
                    slidesToShow: 2, // Show 2 slides on tablets
                    slidesToScroll: 1,
                    centerMode: false, // Disable center mode when showing 2 slides
                }
            },
            {
                breakpoint: 768, // For screens smaller than 768px (md breakpoint)
                settings: {
                    slidesToShow: 1, // Show 1 slide on mobile
                    slidesToScroll: 1,
                    centerMode: false, // Disable center mode for single slide view
                    arrows: false, // Optional: Hide arrows on very small screens for cleaner look
                }
            }
        ]
    };

    // Dummy data for demonstration if 'organisers' prop is not provided
    const dummyOrganisers = [
        { id: 'texumola-alade', name: 'DR. TEXUMOLA ALADE', role: 'Conference Chair', bio: 'Leading researcher in AI, focusing on healthcare applications. Provides leadership and strategic direction.', imageUrl: "https://placehold.co/150x150/EDF2F7/4A5568?text=Org1" },
        { id: 'yusuf-kenyah', name: 'YUSUF KENYAH', role: 'Program Director', bio: 'Responsible for curating the conference program and showcasing African AI talent.', imageUrl: "https://placehold.co/150x150/EDF2F7/4A5568?text=Org2" },
        { id: 'fatima-hassan', name: 'FATIMA HASSAN', role: 'Community Liaison', bio: 'Builds relationships with local communities, ensuring accessibility and inclusivity in AI.', imageUrl: "https://placehold.co/150x150/EDF2F7/4A5568?text=Org3" },
        { id: 'joao-silva', name: 'JOÃO SILVA', role: 'Logistics Coordinator', bio: 'Manages all event logistics for a seamless participant experience.', imageUrl: "https://placehold.co/150x150/EDF2F7/4A5568?text=Org4" },
        { id: 'ana-pires', name: 'ANA PIRES', role: 'Volunteer Manager', bio: 'Coordinates the volunteer team, ensuring their support and effective contribution.', imageUrl: "https://placehold.co/150x150/EDF2F7/4A5568?text=Org5" },
        { id: 'rui-gomes', name: 'RUI GOMES', role: 'Sponsorship Lead', bio: 'Engages partners and sponsors to secure resources for IndabaX success.', imageUrl: "https://placehold.co/150x150/EDF2F7/4A5568?text=Org6" },
        { id: 'sara-mendes', name: 'SARA MENDES', role: 'Research Lead', bio: 'Drives cutting-edge AI research initiatives within the IndabaX framework.', imageUrl: "https://placehold.co/150x150/EDF2F7/4A5568?text=Org7" },
        { id: 'david-nkosi', name: 'DAVID NKOSI', role: 'Partnerships Manager', bio: 'Fosters collaborations with industry and academia to expand IndabaX reach.', imageUrl: "https://placehold.co/150x150/EDF2F7/4A5568?text=Org8" },
    ];

    const displayOrganisers = organisers && organisers.length > 0 ? organisers : dummyOrganisers;

    return (
        <section className="py-12 bg-neutral-light relative text-left overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold text-text-heading mb-4">
                        {title || "Meet Our Organisers"}
                    </h1>
                    <p className="text-text-body max-w-2xl mx-auto">
                        {description || "The dedicated individuals who make IndabaX possible. Our team is comprised of passionate AI enthusiasts, researchers, and community leaders."}
                    </p>
                </div>

                {displayOrganisers.length > 0 ? (
                    <div className="relative mx-auto max-w-6xl">
                        {/* Left Gradient Overlay - ADDED CLASS gradient-overlay-left */}
                        <div
                            className="gradient-overlay-left absolute left-0 top-0 bottom-0 w-32 z-20 pointer-events-none"
                            style={{ background: 'linear-gradient(to right, var(--color-neutral-light) 0%, transparent 100%)' }}
                        />
                        {/* Right Gradient Overlay - ADDED CLASS gradient-overlay-right */}
                        <div
                            className="gradient-overlay-right absolute right-0 top-0 bottom-0 w-32 z-20 pointer-events-none"
                            style={{ background: 'linear-gradient(to left, var(--color-neutral-light) 0%, transparent 100%)' }}
                        />

                        <Slider {...settings}>
                            {displayOrganisers.map((organiser) => (
                                <div key={organiser.id} className="p-3">
                                    <Card
                                        imageUrl={getImageURL(organiser.imageUrl, 'organisers')}
                                        title={organiser.name}
                                        description={organiser.role}
                                        additionalDescription={organiser.bio}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                ) : (
                    <p className="text-center text-text-subtle">No organisers to display.</p>
                )}
            </div>
        </section>
    );
};

export default OrganisersSection;