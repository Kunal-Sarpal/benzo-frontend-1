import React, { useState } from "react";
import { GrLike, GrDislike } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./Cariusel";
import { AiOutlineClear, AiOutlineClose } from "react-icons/ai";
import { PiRankingFill } from "react-icons/pi";


const ShopPage = () => {
  const [rank,setRank] = useState();
  return (
    <div className="bg-[#fafafa] min-h-screen flex flex-col items-center">
      <div className="w-full max-w-7xl bg-white rounded-3x md:p-8 px-4 ">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to Fresh Food!</h1>
            <p className="text-gray-600 text-lg">
              17 November 2024
              <span className="text-green-600 ml-2 uppercase text-sm">. Open</span>
            </p>
          </div>
          <button
            className={`md:hidden   rounded-md  text-lg font-semibold text-gray-800 left-0 w-full transition duration-200  ${rank ?'absolute right-3  text-xl font-bold z-[999]':'relative z-0'}`}
            onClick={() => setRank((prev) => !prev)}
          >
            {rank ? <div className="border p-4 w-fit flex justify-end gap-3 mt-2 border-zinc-500 ml-3 rounded-full bg-zinc-300 items-center"><AiOutlineClose /> </div> : <div className="border w-fit font-normal shadow py-2  text-md  text-gray-800 px-4 tracking-wide mt-2 text-sm flex justify-between items-center gap-2">Check Shop Rank <span><PiRankingFill size={20} />
</span> </div>}
          </button>

          {/* Mobile View */}
          {rank && (
            <div className="md:hidden backdrop-blur-md  flex justify-center items-center left-0 fixed top-0 w-full  h-screen  text-[#1F2937] z-[998] font-extrabold text-5xl  lg:mt-0">
              
              <div className="border-2 w-24 h-24 rounded-full border-[#1F2937] flex justify-center items-center p-16 bg-white   ">
                #17
              </div>  
            </div>
          )}

          {/* Desktop View */}
          <div className="hidden md:block bg-gradient-to-t from-yellow-500 rounded-xl  shadow text-[#1F2937]  p-3 font-extrabold text-4xl mt-4 lg:mt-0 ">
            #17
          </div>
         
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
    <div className="md:p-8 p-4 flex border shadow relative bg-white rounded-lg">
      {/* User Avatar */}
      <div className="md:w-40 absolute bottom-36 right-3 md:bottom-20 md:right-10 w-24 h-24 md:h-40 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full overflow-hidden border-4 border-white shadow-md">
        <img
          className="w-full h-full object-cover"
          src="https://images.scalebranding.com/unisex-shop-logo-72907a7d-8b3e-4c13-927c-3f1ce31f1a1f.jpg"
          alt="Shop Logo"
        />
      </div>

      {/* User Info Section */}
      <div className="flex gap-8 items-center">
        <div>
          <div className="flex gap-12 mb-6">
            {/* Products Info */}
            <div className="text-center">
              <p className="text-2xl font-extrabold text-gray-800">145</p>
              <p className="text-gray-500 text-sm">Products</p>
            </div>

            {/* Customers Info */}
            <div className="text-center">
              <p className="text-2xl font-extrabold text-gray-800">14.2k</p>
              <p className="text-gray-500 text-sm">Customers</p>
            </div>
          </div>
          {/* Location and Description */}
          <p className="text-lg font-semibold text-gray-700">Nawanshahr, Punjab, India</p>
          <p className="text-gray-600 text-sm mt-3">
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
    <div className="shadow border rounded-lg bg-white">
      {/* Section Title */}
      <h2 className="text-3xl mb-6 text-center uppercase font-extrabold text-gray-900 tracking-wide ">
        Reviews
      </h2>

      {/* Carousel */}
      <div className="mt-4 ">
        <Carousel items={reviews} />
      </div>
    </div>

  );
};

export default ShopPage;
