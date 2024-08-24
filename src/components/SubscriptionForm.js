import React, { useState } from 'react';
import SuccessMessage from './SuccessMessage'; // Import the SuccessMessage component

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    interests: {
      concerts: false,
      conferences: false,
      sports: false,
      workshops: false,
    },
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission state

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        interests: { ...formData.interests, [name]: checked },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    setIsSubmitted(true); // Show the success message after submission
  };

  if (isSubmitted) {
    return <SuccessMessage />; // Display success message after form submission
  }

  return (
    <section className="py-12 bg-white text-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-lg">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Subscribe Now</h2>
          <div className="mb-5">
            <label className="block text-left text-gray-600 text-sm font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition duration-300 ease-in-out"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-left text-gray-600 text-sm font-medium mb-2" htmlFor="name">
              Full Name (Optional)
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition duration-300 ease-in-out"
            />
          </div>
          <div className="mb-6">
            <label className="block text-left text-gray-600 text-sm font-medium mb-2">
              Your Interests
            </label>
            <div className="flex flex-wrap gap-4 justify-center">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="concerts"
                  checked={formData.interests.concerts}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-accent focus:ring-2 focus:ring-accent"
                />
                <span className="ml-2 text-gray-700">Concerts</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="conferences"
                  checked={formData.interests.conferences}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-accent focus:ring-2 focus:ring-accent"
                />
                <span className="ml-2 text-gray-700">Conferences</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="sports"
                  checked={formData.interests.sports}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-accent focus:ring-2 focus:ring-accent"
                />
                <span className="ml-2 text-gray-700">Sports</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="workshops"
                  checked={formData.interests.workshops}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-accent focus:ring-2 focus:ring-accent"
                />
                <span className="ml-2 text-gray-700">Workshops</span>
              </label>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-accent text-white py-3 rounded-lg shadow-md hover:bg-highlight transition duration-300 ease-in-out"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SubscriptionForm;
