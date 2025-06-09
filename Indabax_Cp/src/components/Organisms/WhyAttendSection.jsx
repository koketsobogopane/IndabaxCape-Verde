import React from 'react';
import { LightbulbFill, PeopleFill, BriefcaseFill, GlobeAmericas } from 'react-bootstrap-icons'; // Relevant icons for benefits
import ButtonPrimary from '../atoms/ButtonPrimary'; // Assuming you want a button here too

const WhyAttendSection = () => {
  const benefits = [
    {
      icon: <LightbulbFill size={36} />,
      title: 'Cutting-Edge Insights',
      description: 'Learn from leading experts and researchers on the latest advancements and future trends in AI and machine learning.',
    },
    {
      icon: <PeopleFill size={36} />,
      title: 'Unrivalled Networking',
      description: 'Connect with a diverse community of AI professionals, academics, policymakers, and enthusiasts from across Africa and globally.',
    },
    {
      icon: <BriefcaseFill size={36} />,
      title: 'Career Advancement',
      description: 'Discover new opportunities, explore collaborations, and gain skills to propel your professional journey in the AI landscape.',
    },
    {
      icon: <GlobeAmericas size={36} />,
      title: 'Shape Africa\'s AI Future',
      description: 'Contribute to the critical conversations shaping responsible AI development, ethical considerations, and innovative applications unique to the African continent.',
    },
  ];

  return (
    <section className="py-16 bg-white text-text-body"> {/* Light mode background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-2">
          WHY ATTEND
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-heading mb-12">
          Unlock Your AI Potential
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-neutral-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-brand-primary mb-4 flex justify-center">{benefit.icon}</div> {/* Centered icon */}
              <h3 className="text-xl font-semibold text-text-heading mb-2">{benefit.title}</h3>
              <p className="text-text-body">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Optional Call to Action to reinforce the button in the header */}
        <div className="mt-12">
            <ButtonPrimary href="/register">
                Secure Your Spot
            </ButtonPrimary>
        </div>
      </div>
    </section>
  );
};

export default WhyAttendSection;