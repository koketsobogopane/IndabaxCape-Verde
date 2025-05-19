import React from 'react';

const CommentCard = ({ imageUrl, name, comment }) => {
    const displayImageUrl = imageUrl || "https://placehold.co/400x300";
    return (
        <div className="p-6 space-y-4 overflow-hidden">
            {/* Image at the top of the card */}
            <div className="relative">
                <img
                    src={displayImageUrl}
                    alt={`${name}'s profile`}
                    className="w-full h-56 object-cover rounded-lg" // Less aggressive rounding
                />
            </div>
            {/* Name */}
            <h2 className="text-xl font-semibold text-gray-800 text-left">
                {name || "Name"}
            </h2>
            {/* Comment */}
            <p className="text-gray-600 text-base text-left">
                {comment || "This is a sample comment.  It should be a user's feedback or thought."}
            </p>
        </div>
    );
};

export default CommentCard