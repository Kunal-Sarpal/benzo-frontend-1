import React, { useState } from "react";

const ShopPage1 = () => {
    const categories = {
        Grocery: [
            "Organic",
            "Fresh Produce",
            "Snacks",
            "Dairy",
            "Spices",
            "Beverages",
            "Household Items",
            "Dry Fruits",
            "Pulses",
            "Cleaning Supplies",
        ],
        Electronics: [
            "Laptops",
            "Mobile Phones",
            "Accessories",
            "Gaming",
            "Cameras",
            "Wearables",
            "Home Appliances",
            "Smart TVs",
            "Tablets",
            "Speakers",
        ],
        Clothing: [
            "Casual Wear",
            "Formal Wear",
            "Ethnic",
            "Sportswear",
            "Kids' Fashion",
            "Outerwear",
            "Footwear",
            "Accessories",
            "Winter Wear",
            "Loungewear",
        ],
        // Add more categories here...
    };

    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);

    const toggleTag = (tag) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 flex flex-col items-center">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Tell Us About Your Brand
                </h1>
                {/* Product Category Selection */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                        Select Product Category
                    </label>
                    <select
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={selectedCategory}
                        onChange={(e) => {
                            setSelectedCategory(e.target.value);
                            setSelectedTags([]); // Reset selected tags
                        }}
                    >
                        <option value="" disabled>
                            -- Select a Category --
                        </option>
                        {Object.keys(categories).map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Shop Details */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                        Shop Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your shop name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                        Shop Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        placeholder="Describe your shop"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        rows="4"
                        required
                    ></textarea>
                </div>

                {/* Hashtag Selection */}
                {selectedCategory && (
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">
                            Select Tags Related to Your Shop
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {categories[selectedCategory].map((tag, index) => (
                                <button
                                    key={index}
                                    onClick={() => toggleTag(tag)}
                                    className={`px-4 py-2 rounded-full border ${selectedTags.includes(tag)
                                            ? "bg-green-500 text-white border-green-500"
                                            : "bg-gray-100 text-gray-700 border-gray-300"
                                        } hover:bg-green-100 transition`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                        {/* Display selected tags */}
                        {selectedTags.length > 0 && (
                            <div className="mt-4">
                                <h2 className="text-gray-700 font-medium mb-2">
                                    Selected Tags:
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {selectedTags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 rounded-full bg-green-200 text-green-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Submit Button */}
                <div className="text-center mt-8">
                    <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition">
                        Proceed
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShopPage1;
