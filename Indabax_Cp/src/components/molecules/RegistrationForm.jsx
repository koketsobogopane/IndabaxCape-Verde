import React, { useState } from 'react';
import {
  Person,
  Envelope,
  Phone,
  Building,
  Book,
  Award,
  ChevronDown,
} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for /terms and /privacy links

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    institution: '',
    country: '',
    attendeeType: '', // student, researcher, professional
    paymentMethod: '', // credit_card, bank_transfer
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Form Data:', formData);
    // Here you would typically send data to a backend API
    // Replaced alert() with a console.log or custom modal if needed in a real app
    console.log('Registration form submitted! (Check console for data)');
    // Implement actual form submission logic (e.g., API call, redirection to payment gateway)
  };

  return (
    // Changed bg-gray-800 to bg-brand-secondary for the form card background
    <div className="bg-brand-secondary p-8 rounded-lg shadow-xl max-w-3xl mx-auto my-8">
      {/* Changed text-white to text-white (already good for dark background) */}
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Attendee Registration
      </h3>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            {/* Changed text-gray-300 to text-neutral-medium for labels */}
            <label
              htmlFor="firstName"
              className="block text-neutral-medium text-sm font-semibold mb-2"
            >
              First Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                required
                // Changed bg-gray-700, text-white, placeholder-gray-400, border-gray-600, focus:ring-purple-400
                className="w-full p-3 pl-10 rounded-md bg-brand-primary text-white placeholder-text-subtle border border-brand-secondary focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
              />
              {/* Changed text-gray-400 to text-text-subtle for icons */}
              <Person className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-subtle" />
            </div>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-neutral-medium text-sm font-semibold mb-2"
            >
              Last Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                required
                className="w-full p-3 pl-10 rounded-md bg-brand-primary text-white placeholder-text-subtle border border-brand-secondary focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
              />
              <Person className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-subtle" />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="email"
              className="block text-neutral-medium text-sm font-semibold mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john.doe@example.com"
                required
                className="w-full p-3 pl-10 rounded-md bg-brand-primary text-white placeholder-text-subtle border border-brand-secondary focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
              />
              <Envelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-subtle" />
            </div>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-neutral-medium text-sm font-semibold mb-2"
            >
              Phone Number (Optional)
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+27 12 345 6789"
                className="w-full p-3 pl-10 rounded-md bg-brand-primary text-white placeholder-text-subtle border border-brand-secondary focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
              />
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-subtle" />
            </div>
          </div>
        </div>

        {/* Institution & Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="institution"
              className="block text-neutral-medium text-sm font-semibold mb-2"
            >
              Institution/Affiliation
            </label>
            <div className="relative">
              <input
                type="text"
                id="institution"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                placeholder="University of Indaba"
                className="w-full p-3 pl-10 rounded-md bg-brand-primary text-white placeholder-text-subtle border border-brand-secondary focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
              />
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-subtle" />
            </div>
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-neutral-medium text-sm font-semibold mb-2"
            >
              Country
            </label>
            <div className="relative">
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                // Changed bg-gray-700, text-white, border-gray-600, focus:ring-purple-400
                className="w-full p-3 pl-10 rounded-md bg-brand-primary text-white border border-brand-secondary focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none appearance-none pr-8"
              >
                <option value="">Select your country</option>
                <option value="ZA">South Africa</option>
                <option value="NG">Nigeria</option>
                <option value="KE">Kenya</option>
                <option value="EG">Egypt</option>
                <option value="GH">Ghana</option>
                {/* Add more African countries or relevant countries */}
                <option value="US">United States</option>
                <option value="GB">United Kingdom</option>
                {/* ... more options */}
              </select>
              {/* Changed text-gray-400 to text-text-subtle for custom arrow */}
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-subtle pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Attendee Type */}
        <div className="mb-6">
          {/* Changed text-gray-300 to text-neutral-medium for label */}
          <label className="block text-neutral-medium text-sm font-semibold mb-2">
            I am attending as a:
          </label>
          <div className="flex flex-wrap gap-4">
            {/* Changed text-gray-300 to text-neutral-medium for radio labels */}
            <label className="inline-flex items-center text-neutral-medium">
              <input
                type="radio"
                name="attendeeType"
                value="student"
                checked={formData.attendeeType === 'student'}
                onChange={handleChange}
                // Changed text-purple-600, bg-gray-700, border-gray-500, focus:ring-purple-400
                className="form-radio h-4 w-4 text-brand-accent bg-brand-primary border-brand-secondary focus:ring-brand-accent"
              />
              <span className="ml-2 flex items-center">
                <Book className="mr-1" /> Student
              </span>
            </label>
            <label className="inline-flex items-center text-neutral-medium">
              <input
                type="radio"
                name="attendeeType"
                value="researcher"
                checked={formData.attendeeType === 'researcher'}
                onChange={handleChange}
                className="form-radio h-4 w-4 text-brand-accent bg-brand-primary border-brand-secondary focus:ring-brand-accent"
              />
              <span className="ml-2 flex items-center">
                <Award className="mr-1" /> Researcher
              </span>
            </label>
            <label className="inline-flex items-center text-neutral-medium">
              <input
                type="radio"
                name="attendeeType"
                value="professional"
                checked={formData.attendeeType === 'professional'}
                onChange={handleChange}
                className="form-radio h-4 w-4 text-brand-accent bg-brand-primary border-brand-secondary focus:ring-brand-accent"
              />
              <span className="ml-2 flex items-center">
                <Person className="mr-1" /> Professional
              </span>
            </label>
          </div>
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
              // Changed text-purple-600, bg-gray-700, border-gray-500, focus:ring-purple-400
              className="form-checkbox h-5 w-5 text-brand-accent bg-brand-primary border-brand-secondary rounded focus:ring-brand-accent"
            />
            {/* Changed text-gray-300 to text-neutral-medium, text-purple-400 to text-brand-accent */}
            <span className="ml-2 text-neutral-medium text-sm">
              I agree to the{' '}
              <Link to="/terms" className="text-brand-accent hover:underline">
                Terms & Conditions
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-brand-accent hover:underline">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          // Removed gradient, using solid brand-accent and its hover state
          className="w-full bg-brand-accent hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-md transition-all duration-300"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
