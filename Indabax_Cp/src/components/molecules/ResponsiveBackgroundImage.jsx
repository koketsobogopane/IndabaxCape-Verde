import React from 'react';
import background from  '../../assets/Images/landBg.png'

const ResponsiveBackgroundImage = () => {

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Image for Background */}
      <img
        src={`${background}`} // Replace with your image URL
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: -1 }}
      />

      {/* Content Container */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          Welcome
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
          This is a responsive page with a background image. The image will scale and adjust to different screen sizes.
        </p>
      </div>
    </div>
  );
};

export default ResponsiveBackgroundImage;
