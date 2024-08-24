import React, { useState } from 'react';
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpg';
import event4 from '../assets/event4.jpg';
import Pagination from './Pagination';

const EventListings = () => {
  const events = [
    {
      id: 1,
      image: event1,
      name: 'Music Concert',
      date: 'October 10, 2024',
      time: '7:00 PM',
      location: 'Mumbai, India',
      description: 'Join us for an evening of live music with popular bands.',
      price: '₹1500',
    },
    {
      id: 2,
      image: event2,
      name: 'Tech Conference',
      date: 'November 5, 2024',
      time: '9:00 AM',
      location: 'Delhi, India',
      description: 'A conference for tech enthusiasts and professionals.',
      price: '₹3000',
    },
    {
      id: 3,
      image: event3,
      name: 'Art Exhibition',
      date: 'December 12, 2024',
      time: '11:00 AM',
      location: 'Bangalore, India',
      description: 'Explore the latest art pieces from various artists.',
      price: '₹500',
    },
    {
      id: 4,
      image: event4,
      name: 'Sports Event',
      date: 'January 20, 2025',
      time: '5:00 PM',
      location: 'Chennai, India',
      description: 'Watch live sports action with top teams competing.',
      price: '₹2000',
    },
    // Add more events as needed
  ];

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 2;

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const totalPages = Math.ceil(events.length / eventsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentEvents.map(event => (
            <div key={event.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{event.name}</h3>
                <p className="text-gray-600 mb-1"><i className="fas fa-calendar-alt"></i> {event.date} at {event.time}</p>
                <p className="text-gray-600 mb-2"><i className="fas fa-map-marker-alt"></i> {event.location}</p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-accent font-semibold">{event.price}</span>
                  <a href={`/events/${event.id}`} className="bg-accent text-white py-2 px-4 rounded-lg hover:bg-highlight transition duration-300">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Component */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default EventListings;
