import React from 'react';

const AuthSectionTitle = ({ isLogin }) => {
  return (
    <section className="py-12 text-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl font-bold text-accent mb-4">{isLogin ? 'Login' : 'Sign Up'}</h1>
        <p className="text-xl text-gray-600">
          {isLogin ? 'Access Your Account' : 'Join Eventura Today'}
        </p>
      </div>
    </section>
  );
};

export default AuthSectionTitle;
