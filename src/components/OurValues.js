import React from 'react';
import { FaHandshake, FaLightbulb, FaUsers } from 'react-icons/fa';

const OurValues = () => {
  const values = [
    {
      icon: <FaHandshake className="text-5xl text-accent mb-4 mx-auto" />,
      title: 'Integrity',
      description: 'We believe in conducting our business with honesty and transparency, building trust with every interaction.',
    },
    {
      icon: <FaLightbulb className="text-5xl text-accent mb-4 mx-auto" />,
      title: 'Innovation',
      description: 'We are always looking for creative solutions to improve our platform and enhance the user experience.',
    },
    {
      icon: <FaUsers className="text-5xl text-accent mb-4 mx-auto" />,
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do, and we are committed to delivering exceptional service.',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center text-accent mb-12">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              {value.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
