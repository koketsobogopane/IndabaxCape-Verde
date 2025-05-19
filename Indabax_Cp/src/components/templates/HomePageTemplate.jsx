import React from 'react'
import ResponsiveBackgroundImage from '../molecules/ResponsiveBackgroundImage'
import heroImage from "../../assets/Images/heroImage.jpg"
import Navbar from '../molecules/Navbar'
import ButtonPrimary from '../atoms/ButtonPrimary'
import FooterSection from '../Organisms/FooterSection'
import SectionCard from '../molecules/SectionCard'
import OrganisersSection from '../Organisms/OrganiserSection'
import Card from '../molecules/Card'
import CommentDisplaySection from '../Organisms/CommentDisplaySection'
import UpcomingEventsSection from '../Organisms/UpcomingEventsSection'

function HomePageTemplate() {

  const organisersSectionData = {
    title: "The IndabaX Organisers",
    description: "Meet the dedicated individuals who work tirelessly to make IndabaX a reality. Our team is comprised of passionate AI enthusiasts, researchers, and community leaders committed to fostering a vibrant and inclusive AI ecosystem across Africa.",
    organisers: [
        {
            name: "Dr. Tejumola Alade",
            role: "Conference Chair",
            imageUrl: "https://placehold.co/150x150/EEE/31343C", // Replace with actual image URL
            bio: "Dr. Alade is a leading researcher in the field of AI, with a focus on applications in healthcare. She provides overall leadership and strategic direction for the conference.",
        },
        {
            name: "Yusuf Kenyah",
            role: "Program Director",
            imageUrl: "https://placehold.co/150x150/EEE/31343C",  // Replace with actual image URL
            bio: "Yusuf is responsible for curating the conference program, including speaker selection, workshops, and tutorials. He is passionate about showcasing the diversity of African AI talent.",
        },
        {
            name: "Fatima Hassan",
            role: "Community Liaison",
            imageUrl: "https://placehold.co/150x150/EEE/31343C",  // Replace with actual image URL
            bio: "Fatima works to build strong relationships with local communities and ensure the conference is accessible and inclusive to all. She is a strong advocate for diversity and inclusion in AI.",
        },
         {
            name: "Kofi Mensah",
            role: "Sponsorship Lead",
            imageUrl: "https://placehold.co/150x150/EEE/31343C",  // Replace with actual image URL
            bio: "Kofi is responsible for securing funding and partnerships for the conference. He works with organizations that are committed to supporting AI development in Africa.",
        },
        {
            name: "Aisha Diallo",
            role: "Communications Manager",
            imageUrl: "https://placehold.co/150x150/EEE/31343C",  // Replace with actual image URL
            bio: "Aisha manages all conference communications, including website, social media, and public relations. She ensures that the conference's message reaches a broad audience.",
        },
        {
            name: "David Obi",
            role: "Logistics Coordinator",
            imageUrl: "https://placehold.co/150x150/EEE/31343C",  // Replace with actual image URL
            bio: "David oversees the planning and execution of all logistical aspects of the conference, including venue management, registration, and attendee support.",
        },
    ],
};

const commentSectionData = {
    title: "What People Say",
    description: "Here's what attendees and participants have to say about their IndabaX experience.",
    comments: [
        {
            name: "Aisha Keita",
            imageUrl: "https://placehold.co/150x150/EEE/31343C",  // Replace with actual image URL
            comment: "IndabaX was a transformative experience! The workshops were incredibly informative, and the networking opportunities were invaluable.",
        },
        {
            name: "David Obi",
            imageUrl: "https://placehold.co/150x150/EEE/31343C",  // Replace with actual image URL
            comment: "The conference provided a great platform to learn about the latest advancements in AI and connect with leading experts in the field.",
        },
        {
            name: "Sarah Williams",
            imageUrl: "https://placehold.co/150x150/EEE/31343C",  // Replace with actual image URL
            comment: "I was impressed by the diversity of speakers and attendees. It's inspiring to see so much talent and passion for AI in Africa.",
        },
        {
            name: "Samuel Johnson",
            imageUrl: "https://placehold.co/150x150/EEE/31343C",
            comment: "The organizers did a fantastic job. Everything was well-planned, and the event ran smoothly. I'm looking forward to the next one!",
        },
        {
            name: "Nadia Ahmed",
            imageUrl: "https://placehold.co/150x150/EEE/31343C",
            comment: "IndabaX is more than just a conference; it's a community. I felt welcomed and inspired by everyone I met.",
        },
        {
             name: "Jean-Pierre",
            imageUrl: "https://placehold.co/150x150/EEE/31343C",
            comment: "It was an eye-opening experience. I learned so much about the potential of AI to solve real-world problems in Africa.",
        }
    ],
};


    const dummyheroData = {
        heroImageUrl: "../../assets/Images/heroImage.jpg", 
        heroTitle: "Welcome to IndabaX Cabo Verde", 
        heroDescription: "There is no AI without IAfrika"
    }

    const eventsData = {
    title: "Upcoming Events",
    description: "Stay up-to-date with the latest IndabaX events and workshops. Join us to learn, network, and contribute to the African AI community.",
    event: [
        {
            title: "IndabaX Workshop: Deep Learning Fundamentals",
            date: "July 15, 2024",
            location: "Virtual Event",
            description: "A hands-on workshop covering the basics of deep learning, including neural networks, backpropagation, and common architectures.",
            buttonText: "Register Now",
            buttonLink: "#", // Replace with actual registration link
        },
        {
            title: "IndabaX Conference: AI for Social Good",
            date: "August 22-24, 2024",
            location: "Nairobi, Kenya",
            description: "A conference focused on the application of AI to solve pressing social challenges in Africa, featuring keynote speakers, panel discussions, and poster sessions.",
            buttonText: "Learn More",
            buttonLink: "#", // Replace with actual link
        },
        {
            title: "IndabaX Meetup: AI in Healthcare",
            date: "September 10, 2024",
            location: "Lagos, Nigeria",
            description: "A local meetup exploring the use of AI in healthcare, with talks from researchers and practitioners.",
            buttonText: "Join Us",
            buttonLink: "#", // Replace with actual link
        },
        {
            title: "IndabaX Online Seminar: Responsible AI",
            date: "October 5, 2024",
            location: "Online",
            description: "A virtual seminar discussing the ethical considerations and best practices for developing and deploying AI responsibly.",
            buttonText: "Register",
            buttonLink: "#"
        },
        {
            title: "IndabaX Research Symposium",
            date: "November 12-13, 2024",
            location: "Cape Town, South Africa",
            description: "A symposium showcasing cutting-edge AI research from across Africa, with opportunities for researchers to present their work and network.",
            buttonText: "Submit Paper",
            buttonLink: "#"
        }
    ],
};



    const Button =  <ButtonPrimary buttonName="Learn More" href="/about" />
  return (
    <>
        <Navbar />
        <ResponsiveBackgroundImage heroImage= {heroImage} heroTitle={dummyheroData.heroTitle} heroDescription={dummyheroData.heroDescription} CallToAction={Button}  />
        <SectionCard />
        <OrganisersSection
        title={organisersSectionData.title}
        description={organisersSectionData.description}
        organisers={organisersSectionData.organisers}
        >   
        </OrganisersSection>
        <CommentDisplaySection
          title={commentSectionData.title}
          description={commentSectionData.description}
          comments={commentSectionData.comments}
          />
          <UpcomingEventsSection
            title={eventsData.title}
            description={eventsData.description}
            event={eventsData.event}
            />
        <FooterSection />

    </>
  )
}

export default HomePageTemplate