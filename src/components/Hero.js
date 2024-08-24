import React from 'react';
import heroImage from '../assets/hero-bg.jpg'; // Import the image

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Adjust the overlay with pointer-events and z-index */}
      <div className="absolute inset-0 bg-black opacity-30 pointer-events-none"></div>
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-center text-white">
        {/* Overlay Text */}
        <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
          Discover, Book, and Enjoy Your Next Event
        </h1>
        <div className="flex space-x-4 mb-10">
          <a
            href="/events"
            className="bg-accent text-white py-3 px-6 rounded-lg hover:bg-highlight transition duration-300"
          >
            Explore Events
          </a>
          <a
            href="/create"
            className="bg-transparent border-2 border-accent text-white py-3 px-6 rounded-lg hover:bg-accent transition duration-300"
          >
            Create an Event
          </a>
        </div>

        {/* Event Search Widget */}
        <div className="w-full max-w-2xl bg-white text-dark p-6 rounded-lg shadow-lg">
          <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <select className="w-full md:w-1/3 py-3 px-4 rounded-lg border border-light focus:outline-none focus:ring-2 focus:ring-accent">
              <option>Event Type</option>
              <option>Music</option>
              <option>Conference</option>
              <option>Sports</option>
              <option>Others</option>
            </select>
            <select className="w-full md:w-1/3 py-3 px-4 rounded-lg border border-light focus:outline-none focus:ring-2 focus:ring-accent">
              <option>Location</option>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
              <option>Others</option>
            </select>
            <input
              type="date"
              className="w-full md:w-1/3 py-3 px-4 rounded-lg border border-light focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-accent text-white py-3 px-6 rounded-lg hover:bg-highlight transition duration-300"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
