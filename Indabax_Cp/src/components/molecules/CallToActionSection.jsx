// components/CallToAction.jsx (Example)
import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="bg-brand-primary text-white text-center p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Want to partner with us?</h3>
      <p className="mb-6">Join us in empowering Africa through AI. Let's make an impact together.</p>
      <Link
        to="/contact" // Or wherever your partnership inquiry form is
        className="inline-block bg-white text-brand-primary font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors duration-300"
      >
        Get in Touch
      </Link>
    </div>
  );
};

export default CallToAction;
