import React, { useState } from 'react';

const FilterAndSorting = () => {
  const [eventType, setEventType] = useState('');
  const [location, setLocation] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortOption, setSortOption] = useState('');

  return (
    <section className="bg-gray-100 py-6">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-wrap justify-between items-center">
          {/* Filter Options */}
          <div className="flex flex-wrap space-x-4 mb-4 lg:mb-0">
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="">Event Type</option>
              <option value="concerts">Concerts</option>
              <option value="conferences">Conferences</option>
              <option value="sports">Sports</option>
              {/* Add more event types as needed */}
            </select>

            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="">Location</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="bangalore">Bangalore</option>
              {/* Add more locations as needed */}
            </select>

            <input
              type="date"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Price Range Slider */}
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, e.target.value])}
              className="w-48"
            />
            <span className="text-gray-600">₹{priceRange[1]}+</span>
          </div>

          {/* Sort Options */}
          <div>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="">Sort By</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="date-soonest-first">Date: Soonest First</option>
              <option value="popularity">Popularity</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterAndSorting;
