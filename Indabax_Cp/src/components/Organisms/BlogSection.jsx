import React from 'react'
import LinkCard from '../molecules/LinkCard'
import SecondaryCard from '../molecules/SecondaryCard'

function BlogSection({ description, cards = [], title }) {
  return (
    <section className="relative py-16 bg-white ">
            {/* Grid Background */}
            <div
                className="absolute inset-0 bg-[grid_pattern] opacity-20"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px', // Adjust grid size as needed
                }}
            />

            {/* Geometric Shapes (adjust as needed for your theme) */}
             <div className="absolute top-0 left-0 w-48 h-48 bg-blue-500 rounded-full opacity-20 blur-2xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full opacity-20 blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                 {title && (
                    <h2 className="text-3xl font-bold text-white  mb-8 text-center">
                        {title}
                    </h2>
                )}
                {/* Description */}
                <div className="text-gray-700  text-lg leading-relaxed mb-12 max-w-3xl mx-auto text-center">
                    {description}
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cards.map((card, index) => (
                        <SecondaryCard 
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        key={index}
                        imageUrl={card.imageUrl}
                        title={card.title}
                        
                        />
                    ))}
                </div>
            </div>
        </section>
  )
}

export default BlogSection