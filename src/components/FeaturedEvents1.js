import React from 'react';
import event1 from '../assets/event1.jpg';
import event3 from '../assets/event2.jpg';
import event2 from '../assets/event3.jpg';

const FeaturedEvents1 = () => {
  const featuredEvents = [
    {
      id: 1,
      image: event1,
      name: 'Exclusive Music Festival',
      date: 'November 20, 2024',
      time: '6:00 PM',
      location: 'Goa, India',
      description: 'Experience an unforgettable night with top artists and DJs.',
      price: '₹5000',
    },
    {
      id: 2,
      image: event2,
      name: 'Global Tech Summit',
      date: 'December 10, 2024',
      time: '10:00 AM',
      location: 'Bangalore, India',
      description: 'Join industry leaders and innovators at the premier tech event.',
      price: '₹7500',
    },
    {
      id: 3,
      image: event3,
      name: 'Art & Culture Expo',
      date: 'January 15, 2025',
      time: '12:00 PM',
      location: 'Mumbai, India',
      description: 'Explore the diverse world of art and culture at this grand exhibition.',
      price: '₹2500',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-dark">Featured Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
      </div>
    </section>
  );
};

export default FeaturedEvents1;
