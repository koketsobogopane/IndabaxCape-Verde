import React from 'react';
import ButtonPrimary from '../atoms/ButtonPrimary';

// Reusable EventTile component
const EventTile = ({ title, date, location, description, buttonText = "Register Now", buttonLink = "#" }) => {
    return (
        <div className="bg-white/5 backdrop-blur-md rounded-xl shadow-lg border border-white/10 overflow-hidden p-6 space-y-4 text-left">
            {/* Event information  */}
            <div>
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                <p className="text-gray-400">{date}</p>
                <p className="text-gray-300">{location}</p>
                <p className="text-gray-300 mt-2">{description}</p>
            </div>
            <ButtonPrimary
                href={buttonLink}
            >
                {buttonText}
            </ButtonPrimary>
        </div>
    );
};

export default EventTile;