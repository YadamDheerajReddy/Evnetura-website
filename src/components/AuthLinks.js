import React from 'react';

const AuthLinks = ({ isLogin, setIsLogin }) => {
  return (
    <div className="text-center mt-6">
      {isLogin ? (
        <p className="text-gray-600">
          Don’t have an account?{' '}
          <button
            className="text-accent font-semibold hover:underline"
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </p>
      ) : (
        <p className="text-gray-600">
          Already have an account?{' '}
          <button
            className="text-accent font-semibold hover:underline"
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
        </p>
      )}
    </div>
  );
};

export default AuthLinks;
