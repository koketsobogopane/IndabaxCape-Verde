import React from 'react';

const ImpactStatisticsSection = () => {
    const stats = [
        { label: 'Delegates Trained', value: '5000+' },
        { label: 'Countries Represented', value: '45+' },
        { label: 'Research Papers Presented', value: '800+' },
        { label: 'Community Chapters', value: '20+' },
    ];

    return (
        // Changed background from bg-gray-900 to bg-brand-primary
        <section className="py-16 bg-brand-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Changed text-green-400 to text-brand-accent */}
                <p className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-2">
                    — Our Impact
                </p>
                {/* Main heading is already text-white by inheriting from parent, explicitly ensure it */}
                <h2 className="text-4xl font-bold text-white mb-12 leading-tight">
                    IndabaX: A Decade of <br className="hidden md:inline"/> African AI Growth
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        <div key={index} className="flex flex-col items-center">
                            {/* Removed gradient text, using text-brand-accent for values */}
                            <p className="text-5xl font-bold text-brand-accent mb-2">
                                {stat.value}
                            </p>
                            {/* Changed text-gray-300 to text-neutral-medium for labels */}
                            <p className="text-lg font-semibold text-neutral-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactStatisticsSection;