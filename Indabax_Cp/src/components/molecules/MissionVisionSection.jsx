import React from 'react';

const MissionVisionSection = () => {
  return (
    // Changed background from bg-gray-50 to bg-neutral-light
    <section className="py-16 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Changed text-blue-600 to text-brand-accent */}
        <p className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-2">
          — Our Purpose
        </p>
        {/* Changed text-gray-900 to text-text-heading */}
        <h2 className="text-4xl font-bold text-text-heading mb-8 leading-tight">
          Driving AI Excellence for <br className="hidden md:inline" /> a
          Brighter African Future
        </h2>
        <div className="grid md:grid-cols-2 gap-12 text-left mt-12">
          {/* Mission */}
          <div>
            {/* Changed text-gray-900 to text-text-heading */}
            <h3 className="text-2xl font-semibold text-text-heading mb-4">
              Our Mission
            </h3>
            {/* Changed text-gray-700 to text-text-body */}
            <p className="text-text-body leading-relaxed">
              To empower a new generation of African AI leaders and innovators
              by providing world-class education, fostering vibrant communities,
              and driving impactful research solutions tailored to the unique
              challenges and opportunities across the continent. We aim to
              democratize access to cutting-edge deep learning knowledge and
              resources.
            </p>
          </div>
          {/* Vision */}
          <div>
            {/* Changed text-gray-900 to text-text-heading */}
            <h3 className="text-2xl font-semibold text-text-heading mb-4">
              Our Vision
            </h3>
            {/* Changed text-gray-700 to text-text-body */}
            <p className="text-text-body leading-relaxed">
              To see an Africa at the forefront of AI research and application,
              with robust local ecosystems driving technological advancements
              that address societal needs, economic growth, and sustainable
              development. We envision a continent where AI serves as a powerful
              tool for progress and self-determination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
