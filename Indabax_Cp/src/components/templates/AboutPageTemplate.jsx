import React from 'react';

// Import existing components
import Navbar from '../molecules/Navbar'
import Footer from '../Organisms/FooterSection'
import HeroSection from '../molecules/HeroSection'; // This is your 'Pillars' section now
import FAQSection from '../Organisms/FAQSection'; // Your existing FAQ
import CommentDisplaySection from '../Organisms/CommentDisplaySection'; // Could be repurposed for testimonials or past delegate feedback

// Import new components (we'll define these or mock them below)
import MissionVisionSection from '../molecules/MissionVisionSection';
import ImpactStatisticsSection from '../Organisms/ImpactStatisticsSection';
import OrganisersSection from '../Organisms/OrganiserSection';
import CallToActionSection from '../molecules/CallToActionSection';

// Placeholder images (update these paths with your actual assets)
import AboutHeroImage from '../../assets/Images/heroImage.jpg'; // A relevant image for the About page hero
import MissionImage from '../../assets/Images/missionImg.jpg'; // Image for Mission/Vision
import ImpactImage from '../../assets/Images/purposeImg.jpg'; // Image for impact stats
import TeamMembersImage from '../../assets/Images/heroImage1.jpg'; // Image for team section background or individuals
import FooterSection from '../Organisms/FooterSection';
import ServicesSection from '../Organisms/ServicesSection';
import { commentSectionData, organisersSectionData, indabaXCaboVerdeFAQs } from '../../data/data';

const AboutPage = () => {
    // Define specific data for the About page
    const indabaXEventDate = '2025-10-26T09:00:00+02:00'; // Event date for Hero (if still relevant)



    // Example comments/testimonials data (could be adapted for About page)
 

    return (
        <div className="bg-white"> {/* Main container for the about page */}
            {/* 1. Hero Section for About Page */}
            <Navbar/>
            <HeroSection
                image={AboutHeroImage} // Specific image for about page
                title="About Deep Learning IndabaX"
                descriptiveText="Discover our journey, mission, and the impact we're making in Artificial Intelligence across Africa."
                // No countdown here, as it's not event-specific for the about page hero
            />

            {/* 2. Mission & Vision Section (New Component) */}
            <MissionVisionSection />

            {/* 4. Impact & Statistics Section (New Component) */}
            <ImpactStatisticsSection />

            {/* 5. Team Section (New Component) */}
            <OrganisersSection
        title={organisersSectionData.title}
        description={organisersSectionData.description}
        organisers={organisersSectionData.organisers}
      />

            {/* 6. Testimonials / What People Say (Reusing CommentDisplaySection) */}
            {/* You can rename CommentDisplaySection to TestimonialsSection for clarity */}
            <CommentDisplaySection
                title="What Our Delegates Say"
                description="Hear directly from past participants about their IndabaX experience."
                comments={commentSectionData.comments}
            />

            {/* 7. Call to Action / Join Us Section (New Component) */}
            <CallToActionSection />

            {/* 8. FAQ Section (Reusing existing FAQSection) */}
            {/* This could be placed earlier or later depending on priority */}
            <FAQSection externalFAQs={indabaXCaboVerdeFAQs}/>
            <FooterSection />
        </div>
    );
};

export default AboutPage;