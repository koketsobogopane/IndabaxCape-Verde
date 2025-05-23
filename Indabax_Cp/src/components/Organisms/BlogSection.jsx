import React from 'react';
// import LinkCard from '../molecules/LinkCard'; // Keeping this commented out for now as SecondaryCard is used
import SecondaryCard from '../molecules/SecondaryCard'; // Assuming this is your blog post preview card
import ButtonPrimary from '../atoms/ButtonPrimary'; // Assuming you have a reusable ButtonPrimary

function BlogSection({ description, cards = [], title, viewAllLink = '/blog' }) {
    return (
        <section className="relative py-16 sm:py-20 bg-gray-50 overflow-hidden">
            {/* Subtle Grid Background - More refined */}
            <div
                className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, rgba(128, 128, 128, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(128, 128, 128, 0.05) 1px, transparent 1px)',
                    backgroundSize: '30px 30px', // Slightly larger, less dense grid
                }}
            />

            {/* Dynamic Geometric Shapes (Subtle & Themed) */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* max-w-7xl for consistency */}
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    {title && (
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>

                {/* Cards Grid - Modernized */}
                {/* Changed to lg:grid-cols-3 to show 3 cards on large screens, more common for blogs */}
                {/* If you want only 2 cards side-by-side on desktop, keep md:grid-cols-2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                    {cards.map((card, index) => (
                        <SecondaryCard
                            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                            key={index} // Consider using a unique ID from card.id if available in data
                            imageUrl={card.imageUrl}
                            title={card.title}
                            // Add other props SecondaryCard might need, e.g.,
                            // date={card.date}
                            // excerpt={card.excerpt}
                            // link={card.link}
                        />
                    ))}
                </div>

                {/* Optional: Call to action to view all blog posts */}
                {cards.length > 0 && ( // Only show if there are cards
                    <div className="text-center mt-12 md:mt-16">
                        <ButtonPrimary href={viewAllLink}>
                            View All Blog Posts
                        </ButtonPrimary>
                    </div>
                )}
            </div>
        </section>
    );
}

export default BlogSection;