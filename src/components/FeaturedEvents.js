import React from 'react';
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpg';
import event4 from '../assets/event4.jpg';

const FeaturedEvents = () => {
  const events = [
    {
      id: 1,
      image: event1,
      name: 'Music Concert',
      date: 'October 10, 2024',
      location: 'New York, NY',
    },
    {
      id: 2,
      image: event2,
      name: 'Art Exhibition',
      date: 'November 5, 2024',
      location: 'Los Angeles, CA',
    },
    {
      id: 3,
      image: event3,
      name: 'Tech Conference',
      date: 'December 12, 2024',
      location: 'San Francisco, CA',
    },
    {
      id: 4,
      image: event4,
      name: 'Sports Event',
      date: 'January 20, 2025',
      location: 'Chicago, IL',
    },
  ];

  return (
    <section className="py-16 bg-neutral">
      <div className="container mx-auto text-center px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-poppins font-bold mb-12 text-dark">Featured Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {events.map(event => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 ease-in-out">
              <div className="relative">
                <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
                  <a href={`/events/${event.id}`} className="bg-accent text-white py-2 px-4 rounded-lg hover:bg-highlight transition duration-300">
                    View Details
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{event.name}</h3>
                <p className="text-gray-600 mb-1"><i className="fas fa-calendar-alt"></i> {event.date}</p>
                <p className="text-gray-600"><i className="fas fa-map-marker-alt"></i> {event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
