import React from 'react';

const NewsletterSignup = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-poppins font-bold mb-4">Stay Updated</h2>
        <p className="text-xl mb-8">Sign up for our newsletter to get the latest events delivered to your inbox.</p>
        <form className="flex justify-center items-center max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 text-gray-700 rounded-l-lg focus:outline-none focus:ring-0 focus:ring-accent"
          />
          <button
            type="submit"
            className="bg-accent text-white font-semibold py-4 px-8 rounded-r-lg shadow-lg hover:bg-highlight transition duration-300 ease-in-out"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
