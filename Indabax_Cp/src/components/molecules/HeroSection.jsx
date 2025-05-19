import React from 'react';

const HeroSection = ({ image, title, descriptiveText, children }) => {
    return (
        <section className="relative bg-cover bg-center min-h-[50vh] top-14 bg-no-repeat py-20 md:py-32" style={{ backgroundImage: `url(${image})` }}>
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Blob Shape */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 ${!descriptiveText ? 'md:text-7xl' : ''}`}>
                    {title}
                </h1>
                {descriptiveText && (
                    <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                        {descriptiveText}
                    </p>
                )}
                {children}
            </div>
        </section>
    );
};

export default HeroSection;