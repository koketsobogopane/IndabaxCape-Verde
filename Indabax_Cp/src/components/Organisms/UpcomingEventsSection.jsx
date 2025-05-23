import React from "react";
import EventTile from "../molecules/EventTile" // Assuming this component is themed or will be adapted

const UpcomingEventsSection = ({ title, description, event }) => {
    const noEventsMessage = {
        title: "No Upcoming Events",
        date: "",
        location: "",
        description: "There are currently no upcoming events. Please check back later for updates.",
        buttonText: "Check for Updates",
        buttonLink: "#",
    };

    const eventsToDisplay = (event && event.length > 0) ? event : [noEventsMessage];

    return (
        // Changed background from gray-900 to brand-primary
        <section className="py-12 bg-brand-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    {/* Removed gradient from title, using text-white for dark background */}
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        {title}
                    </h1>
                    {/* Changed text color from gray-400 to text-neutral-medium for readability on dark background */}
                    <p className="text-neutral-medium max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>
                <div className="space-y-6 w-full">
                    {eventsToDisplay.map((eventItem, index) => (
                        <EventTile
                            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                            key={index} // Consider using a unique 'id' from eventItem data if available
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