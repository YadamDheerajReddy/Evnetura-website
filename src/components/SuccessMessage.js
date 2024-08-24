import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const SuccessMessage = () => {
  return (
    <section className="py-12 bg-white text-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-md">
        <div className="bg-green-100 p-6 rounded-2xl shadow-lg border border-green-200">
          <FaCheckCircle className="text-green-600 text-4xl mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-green-800 mb-2">
            Subscription Successful!
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Thank you for subscribing to our newsletter. You’ll start receiving updates on the
            latest events, exclusive offers, and more directly in your inbox.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessMessage;
