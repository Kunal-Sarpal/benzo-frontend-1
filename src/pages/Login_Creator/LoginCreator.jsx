import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginCreator = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen bg-green-100">
      <div className="bg-white shadow-lg border border-gray-300 rounded-lg w-11/12 max-w-md p-6 flex flex-col space-y-6">
        <h1 className="text-2xl font-bold text-green-600 text-center">Welcome Back!</h1>
        <p className="text-gray-600 text-center">Please login to continue</p>

        <div className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
          />
        </div>

        <button className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300 w-full">
          Login
        </button>

        <button onClick={() => navigate("/createaccount")} className="bg-transparent text-green-500 border border-green-500 py-2 rounded-md w-full">
           Create your Account
        </button>
      </div>
    </div>
  );
};

export default LoginCreator;
