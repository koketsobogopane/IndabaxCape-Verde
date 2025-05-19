import React from 'react';
import Card from '../molecules/Card';

const OrganisersSection = ({ title, description, organisers }) => {
    return (
        <section className="py-12 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                        {title}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {organisers?.map((organiser, index) => (
                        <Card
                            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                            key={index}
                            imageUrl={organiser.imageUrl}
                            title={organiser.name}
                            description={organiser.role}
                            additionalDescription={organiser.bio}
                        />))}
                </div>
            </div>
        </section>
    );
};

export default OrganisersSection;