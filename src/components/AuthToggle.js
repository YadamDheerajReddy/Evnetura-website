import React from 'react';

const AuthToggle = ({ isLogin, setIsLogin }) => {
  return (
    <section className="py-4 bg-none">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
        <div className="inline-flex rounded-lg shadow-lg">
          <button
            className={`py-2 px-6 font-semibold rounded-l-lg ${isLogin ? 'bg-accent text-white' : 'bg-white text-accent'} transition duration-300 ease-in-out`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`py-2 px-6 font-semibold rounded-r-lg ${!isLogin ? 'bg-accent text-white' : 'bg-white text-accent'} transition duration-300 ease-in-out`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default AuthToggle;
