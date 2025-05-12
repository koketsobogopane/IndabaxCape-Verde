import React from 'react';

const ResponsiveBackgroundImage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/Image/landBg.png')",
      }}
    >
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          Welcome
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
          This is a responsive page with a background image. The image will
          scale and adjust to different screen sizes.
        </p>
      </div>
    </div>
  );
};

export default ResponsiveBackgroundImage;
