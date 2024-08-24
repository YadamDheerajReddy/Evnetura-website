import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert('Login form submitted');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition duration-300 ease-in-out"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition duration-300 ease-in-out"
          required
        />
      </div>
      <div className="flex justify-between items-center mb-6">
        <a href="/forgot-password" className="text-accent hover:underline text-sm font-medium">
          Forgot Password?
        </a>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="w-full bg-accent text-white py-3 rounded-lg shadow-md hover:bg-highlight transition duration-300 ease-in-out"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
