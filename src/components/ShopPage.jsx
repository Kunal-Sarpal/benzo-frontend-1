import React from "react";
import { GrLike, GrDislike } from "react-icons/gr";
// import ReviewCard from "./Review";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./Cariusel";

const ShopPage = () => {
  return (
    <div className=" bg-gray-100 flex w-full rounded-l-[40px] shadow-2xl    px-5 bg-grenn-500 ">
      <div className="w-full  p-10  ">
        {/* Header Section */}
        <div className="flex justify-between  mb-8 ">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Welcome to Fresh Food!
            </h1>
            <p className="text-gray-500 text-lg">
              17 November 2024{" "}
              <span className="text-green-600 uppercase text-sm">. Open</span>
            </p>
          </div>
          <div className="text-yellow-500 font-extrabold text-6xl">#17</div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
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
    <div className="p-6 bg-gradient-to-r h-fit rounded-xl ">
      <div className="flex gap-10 items-center">
        {/* User Image */}
        <div className="w-52 h-30 bg-gray-300 rounded-full overflow-hidden border-4 border-blue-400">
          <img
            className="w-full h-full object-cover"
            src="https://images.scalebranding.com/unisex-shop-logo-72907a7d-8b3e-4c13-927c-3f1ce31f1a1f.jpg"
            alt="Shop Logo"
          />
        </div>

        {/* User Info */}
        <div>
          <div className="flex gap-16 mb-4">
            <div>
              <p className="text-2xl font-bold text-gray-800">145</p>
              <p className="text-gray-500 text-sm">Products</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">14.2k</p>
              <p className="text-gray-500 text-sm">Customers</p>
            </div>
          </div>
          <p className="text-lg font-semibold text-gray-700">
            Nawanshahr, Punjab, India
          </p>
          <p className="text-gray-600 text-sm mt-2">
            {truncateText(description, 90)}
          </p>
        </div>
      </div>
      <div className="flex gap-4 mt-10">
        <div className=" p-2 px-5 font-semibold text-white bg-green-500 rounded-md  shadow hover:scale-105">View Offers</div>
        <div><input type="text" className="border-[1px]  rounded-l-md p-2 border-black" placeholder="Coupon Code" /><span><button className="bg-green-500 border border-black p-2 text-white font-semibold hover:scale-105">Apply</button></span></div>
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
      date:"20 October 2025",
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
        "Great products and excellent customer service. Some delays in delivery, but overall a wonderful experience.",
    },
  ];

  return (
    <div className="shop-page rounded-xl  h-fit border-2 bg-[#ABC710]">
      <h2 className="text-2xl  mb-4 text-center uppercase font-extrabold "> Reviews</h2>
      <Carousel items={reviews} />
    </div>
  );
};


export default ShopPage;
