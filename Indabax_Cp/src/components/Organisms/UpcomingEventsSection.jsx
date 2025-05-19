import React from "react";
import EventTile from "../molecules/EventTile"

const UpcomingEventsSection = ({ title, description, event }) => {
    const noEventsMessage = {
        title: "No Upcoming Events",
        date: "",
        location: "",
        description: "There are currently no upcoming events. Please check back later for updates.",
        buttonText: "Check for Updates", // Changed button text
        buttonLink: "#",                   // You can change the link
    };

    const eventsToDisplay = (event && event.length > 0) ? event : [noEventsMessage]; // Use array


    return (
        <section className="py-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                        {title}
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>
                <div className="space-y-6 w-full">
                    {eventsToDisplay.map((eventItem, index) => (
                        <EventTile
                            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                            key={index}
                            title={eventItem.title}
                            date={eventItem.date}
                            location={eventItem.location}
                            description={eventItem.description}
                            buttonText={eventItem.buttonText}
                            buttonLink={eventItem.buttonLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpcomingEventsSection;