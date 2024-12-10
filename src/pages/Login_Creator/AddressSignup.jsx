import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddressSignup = () => {
    // Form state
    const [formData, setFormData] = useState({
        address1: '',
        address2: '',
        city: '',
        pinCode: '',
        aadharCard: '',
        gstNumber: '',
    });

    const [errors, setErrors] = useState({
        address1: '',
        city: '',
        pinCode: '',
    });

    // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Validate the form
    const validateForm = () => {
        const newErrors = {};
        if (!formData.address1) newErrors.address1 = 'Address 1 is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.pinCode) newErrors.pinCode = 'Pin Code is required';
        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted successfully:', formData);
        } else {
            console.log('Please fill in all required fields');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <div className="bg-white shadow-lg border border-gray-300 rounded-lg w-11/12 max-w-2xl p-8 space-y-6">
                <h2 className="text-2xl font-semibold text-gray-700">Creator Registration</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Address Section */}
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="address1" className="text-gray-700 font-semibold">Address 1 (Street Name)</label>
                            <input
                                type="text"
                                id="address1"
                                name="address1"
                                value={formData.address1}
                                onChange={handleChange}
                                className={`border ${errors.address1 ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
                                placeholder="Enter your address"
                            />
                            {errors.address1 && <p className="text-red-500 text-sm">{errors.address1}</p>}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="address2" className="text-gray-700 font-semibold">Address 2 (Optional)</label>
                            <input
                                type="text"
                                id="address2"
                                name="address2"
                                value={formData.address2}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Apartment, suite, unit, etc."
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="city" className="text-gray-700 font-semibold">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className={`border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
                                placeholder="Enter your city"
                            />
                            {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="pinCode" className="text-gray-700 font-semibold">Pin Code</label>
                            <input
                                type="text"
                                id="pinCode"
                                name="pinCode"
                                value={formData.pinCode}
                                onChange={handleChange}
                                className={`border ${errors.pinCode ? 'border-red-500' : 'border-gray-300'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
                                placeholder="Enter your pin code"
                            />
                            {errors.pinCode && <p className="text-red-500 text-sm">{errors.pinCode}</p>}
                        </div>
                    </div>

                    {/* Aadhar Card Section */}
                    <div className="flex flex-col">
                        <label htmlFor="aadharCard" className="text-gray-700 font-semibold">Aadhar Card Number (Optional)</label>
                        <input
                            type="text"
                            id="aadharCard"
                            name="aadharCard"
                            value={formData.aadharCard}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your Aadhar card number"
                        />
                    </div>

                    {/* GST Section */}
                    <div className="flex flex-col">
                        <label htmlFor="gstNumber" className="text-gray-700 font-semibold">GST Number (Optional)</label>
                        <input
                            type="text"
                            id="gstNumber"
                            name="gstNumber"
                            value={formData.gstNumber}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your GST number"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-300 w-full"
                    >
                        <Link to={"/create-brand"}>Start Selling</Link>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddressSignup;
