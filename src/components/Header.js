import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar Section */}
      <header className="bg-primary text-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="text-2xl font-bold font-poppins">
            Eventura
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="space-x-8 font-roboto hidden md:flex">
            <a href="/" className="relative group">
              Home
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
            <a href="/events" className="relative group">
              Events
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
            <a href="/about" className="relative group">
              About Us
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
            <a href="/contact" className="relative group">
              Contact
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          </nav>

          {/* Login/Signup Button */}
          <div className="hidden md:block">
            <a href="/login" className="bg-accent text-white py-2 px-4 rounded-lg hover:bg-highlight transition duration-300">
              Login/Signup
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="bg-primary text-white font-roboto md:hidden">
            <ul className="space-y-4 py-4 px-6">
              <li>
                <a href="/" className="block hover:text-accent transition duration-300">Home</a>
              </li>
              <li>
                <a href="/events" className="block hover:text-accent transition duration-300">Events</a>
              </li>
              <li>
                <a href="/about" className="block hover:text-accent transition duration-300">About Us</a>
              </li>
              <li>
                <a href="/contact" className="block hover:text-accent transition duration-300">Contact</a>
              </li>
              <li>
                <a href="/login" className="block bg-accent text-white py-2 px-4 rounded-lg hover:bg-highlight transition duration-300">Login/Signup</a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Search Bar Section */}
      <div className="bg-neutral py-4 px-6 mt-16"> {/* Added mt-16 to create space below fixed navbar */}
        <div className="container mx-auto">
          <input 
            type="text" 
            placeholder="Search for events, locations, or dates..." 
            className="w-full py-3 px-5 rounded-lg border border-dark shadow-lg focus:outline-none focus:ring-1 focus:ring-dark text-dark"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
