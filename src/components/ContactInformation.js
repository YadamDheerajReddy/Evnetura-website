import React from 'react';

const ContactInformation = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          We’d love to hear from you! Whether you have a question, need support, or want to collaborate, feel free to reach out to us.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-accent mb-2">Address</h3>
            <p className="text-gray-600">123 Eventura Street, Event City, EC 12345</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-accent mb-2">Phone</h3>
            <p className="text-gray-600">+1 (123) 456-7890</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-accent mb-2">Email</h3>
            <p className="text-gray-600">support@eventura.com</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-accent mb-2">Business Hours</h3>
            <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Sat - Sun: Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
