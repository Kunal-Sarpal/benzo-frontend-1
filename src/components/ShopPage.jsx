import React, { useState } from "react";
import { GrLike, GrDislike } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./Cariusel";

const ShopPage = () => {
  const [rank,setRank] = useState();
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-7xl bg-white rounded-3xl  p-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to Fresh Food!</h1>
            <p className="text-gray-600 text-lg">
              17 November 2024
              <span className="text-green-600 ml-2 uppercase text-sm">. Open</span>
            </p>
          </div>
          <button className="md:hidden border border-black p-2 rounded-md px-4" onClick={() => setRank((prev) => !prev)}>Rank</button>

          {rank && <div className="md:hidden text-yellow-500 font-extrabold text-6xl mt-4 lg:mt-0 ">#17</div>}
          <div className="hidden md:block text-yellow-500 font-extrabold text-6xl mt-4 lg:mt-0 ">#17</div>
         
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2">
            <UserMenu />
          </div>

          {/* Right Section */}
          <div className="lg:col-span-1">
            <Feedback />
          </div>
        </div>
      </div>
    </div>
  );
};

const UserMenu = () => {
  const truncateText = (text, maxLength) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  const description =
    "Discover the freshest food and quality products at our store! We ensure customer satisfaction with every purchase.";

  return (
    <div className=" p-7 flex border shadow relative   ">
      <div className="md:w-40 absolute bottom-36 right-3 md:bottom-20 md:right-10 w-24 h-24 md:scale-100  md:h-40 bg-gray-300 rounded-full overflow-hidden border-2 border-blue-400">
        <img
          className="w-full h-full object-cover"
          src="https://images.scalebranding.com/unisex-shop-logo-72907a7d-8b3e-4c13-927c-3f1ce31f1a1f.jpg"
          alt="Shop Logo"
        />
      </div>
      <div className="flex gap-6 items-center ">
        {/* User Image */}
       
        {/* User Info */}
        <div>
          <div className="flex gap-10 md:gap-16 mb-4">
            <div>
              <p className="md:text-2xl text-xl  font-bold text-gray-800">145</p>
              <p className="text-gray-500 text-sm">Products</p>
            </div>
            <div>
              <p className="md:text-2xl text-xl font-bold text-gray-800">14.2k</p>
              <p className="text-gray-500 text-sm">Customers</p>
            </div>
          </div>
          <p className="text-lg font-semibold text-gray-700">Nawanshahr, Punjab, India</p>
          <p className="text-gray-600 text-sm mt-2">
            {truncateText(description, 90)}
          </p>
        </div>
      </div>
    </div>
  );
};

const Feedback = () => {
  const reviews = [
    {
      name: "Nicole Eagle",
      role: "Local Guide",
      rating: 5,
      time: "4 months ago",
      date: "20 October 2025",
      content:
        "I have been coming to Sona for many years and Shannon is a saint! She has helped me with dark age spots and wrinkles, and she always tolerates my questions. Highly recommend!",
    },
    {
      name: "John Doe",
      role: "Frequent Customer",
      rating: 4,
      time: "2 months ago",
      date: "20 October 2025",
      content:
        "Great products and excellent customer service. Some delays in delivery, but overall  wonderful experience.",
    },
  ];

  return (
    <div className=" shadow h-fit border  ">
      <h2 className="text-2xl mb-4 text-center uppercase font-extrabold text-gray-800">Reviews</h2>
      <Carousel items={reviews} />
    </div>
  );
};

export default ShopPage;
