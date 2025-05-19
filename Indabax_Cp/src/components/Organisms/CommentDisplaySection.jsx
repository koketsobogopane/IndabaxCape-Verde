import React from "react";
import CommentCard from "../molecules/CommentCard";

const CommentDisplaySection = ({ title, description, comments }) => {
    const backgroundStyle = {
        backgroundColor: '#f9f9f9', // Light background
        backgroundImage: 'radial-gradient(circle, #ddd 1px, transparent 1px)', // Dots
        backgroundSize: '24px 24px', // Adjust for dot size and spacing
    };

    return (
        <section className="py-12" style={backgroundStyle}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                        {title}
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {comments?.map((comment, index) => (
                        <CommentCard
                            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                            key={index}
                            imageUrl={comment.imageUrl}
                            name={comment.name}
                            comment={comment.comment}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommentDisplaySection;
