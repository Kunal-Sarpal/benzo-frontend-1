import React from 'react';
import { Link } from 'react-router-dom';

const BusinessSignup = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <div className="bg-white shadow-lg border border-gray-300 rounded-lg w-11/12 max-w-md p-6 space-y-6">
                {/* Business Name Input */}
                <div className="flex flex-col space-y-2">
                    <label htmlFor="businessName" className="text-gray-500 text-xl font-bold ">
                        Hi, Kunal 👋
                    </label>
                    <input
                        type="text"
                        id="businessName"
                        placeholder="Enter your business name"
                        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                </div>

                {/* Seller Agreement Checkbox */}
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="sellerAgreement"
                        className="h-5 w-5 text-green-500 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="sellerAgreement" className="text-gray-700">
                        I agree to the{' '}
                        <span className="text-blue-500 cursor-pointer">Seller Agreement</span>
                    </label>
                </div>

                {/* Submit Button */}
                <button className="bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-300 w-full mt-6">
                    <Link to={"/createaddress"}> Next Step</Link>
                </button>
            </div>
        </div>
    );
};

export default BusinessSignup;
