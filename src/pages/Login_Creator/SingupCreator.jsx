import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignupCreator = () => {
    const navigate = useNavigate();


    return (
        <div className="flex justify-center items-center h-screen bg-green-100">
            <div className="bg-white shadow-lg border border-gray-300 rounded-lg w-11/12 max-w-md p-6 flex flex-col space-y-6">
                        <h1 className="text-2xl font-bold text-green-600 text-center">Create Your Account</h1>
                        <div className="flex flex-col space-y-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                            />
                            <input
                                type="text"
                                placeholder="Mobile Number"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                            />
                        </div>

                        <button onClick={() => navigate("/brandname")} className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300 w-full">
                            Create Account
                        </button>

                        <p className="text-center text-gray-600 mt-4">
                            Already have an account?{' '}
                            <span
                                className="text-green-500 cursor-pointer"
                               
                            >
                                <button onClick={() => navigate("/loginaccount") }>Login here</button>
                            </span>
                        </p>
                 
                
            </div>
        </div>
    );
};

export default SignupCreator;
