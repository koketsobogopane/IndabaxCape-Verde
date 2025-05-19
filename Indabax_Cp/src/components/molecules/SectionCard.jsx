import React from 'react';
import aboutImg from "../../assets/Images/miniAboutUs.jpg"
import ButtonPrimary from '../atoms/ButtonPrimary';

const SectionCard = () => {
    return (
        <section className="py-16 bg-white dark:bg-white relative text-left">
            {/* Grid Background */}
            <div
                className="absolute inset-0 bg-[grid_pattern] opacity-20"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px', // Adjust grid size as needed
                }}
            />

            {/* Blob Shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-green-500 opacity-30 blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Text Column */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-900 mb-4">
                            About{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                                IndabaX
                            </span>
                        </h2>
                        <p className="text-gray-700 dark:text-gray-700 mb-6">
                            <span className="font-semibold">Deep learning Indaba</span> is more than just a
                            conference; it&apos;s a movement. Born out of a passion to
                            uplift and empower African communities in the field of
                            Artificial Intelligence,{' '}
                            <span className="font-semibold">IndabaX</span> serves as a
                            platform for knowledge sharing, collaboration, and growth.
                        </p>
                        <p className="text-gray-700 dark:text-gray-700 mb-6">
                            This conference is crucial because it addresses the unique
                            challenges and opportunities within the African context. By
                            fostering local talent and research,{' '}
                            <span className="font-semibold">IndabaX</span> aims to drive
                            innovation that can solve real-world problems and contribute
                            to the development of the continent.
                        </p>
                        <p className="text-gray-700 dark:text-gray-700 mb-8">
                            Join us in shaping the future of AI in Africa.
                        </p>
                        <ButtonPrimary href="/about">
                            Learn More
                        </ButtonPrimary>
                    </div>

                    {/* Image Column */}
                    <div className="relative">
                        <img
                            src={aboutImg} // Replace with actual image URL
                            alt="IndabaX Conference"
                            className="rounded-lg shadow-lg w-full relative z-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionCard;