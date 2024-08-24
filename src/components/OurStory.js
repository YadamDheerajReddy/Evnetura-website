import React from 'react';
import storyImage from '../assets/logo.jpeg'; // Replace with your actual image path

const OurStory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center">
        {/* Image Block */}
        <div className="lg:w-1/2">
          <img src={storyImage} alt="Our Story" className="rounded-lg shadow-lg w-full h-auto" />
        </div>
        {/* Text Block */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-12">
          <h2 className="text-3xl font-bold text-accent mb-4">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Eventura was born out of a passion for creating unforgettable experiences. Our journey began with a small team of event enthusiasts who wanted to make it easier for people to discover and attend the best events. Over the years, we have grown into a leading platform, connecting thousands of users with events that inspire, entertain, and educate. From music festivals to tech conferences, our story is about bringing people together to share in the joy of live experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
