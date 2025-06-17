import React from 'react';

const TeamSection = ({ members }) => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
                    — Our Team
                </p>
                <h2 className="text-4xl font-bold text-gray-900 mb-12 leading-tight">
                    Meet the Minds Behind <br className="hidden md:inline"/> Deep Learning IndabaX
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.map((member) => (
                        <div key={member.id} className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                            <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-purple-400 shadow-lg"
                            />
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                            <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                            <p className="text-gray-700 text-sm">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;