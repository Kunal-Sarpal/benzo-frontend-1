import React, { useState } from 'react';
import { MdHome } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { RiAddBoxFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      {/* Mobile Menu Toggle */}

      <button
        className="md:hidden fixed md:static top-4  z-50 p-2  w-full text-white flex justify-end pr-3 rounded-full "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='bg-green-500 p-2 rounded-full'>
        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}

        </div>
      </button>


      <div
        className={` h-full fixed  z-40 ${isOpen ? "w-64" : "w-0"} md:w-64 bg-green-500 text-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden`}
      >
        {/* Profile Section */}
        <div className="flex items-center gap-4 p-6 mt-6">
          <div className="w-14 h-14 rounded-full bg-white">
            <img className='w-full h-full rounded-full' src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6737eacbd5b1010043a4a939_66a859985d1ff8f73af04f53_Deepinder-Goyal-CEO-of-Zomato-encourages.jpeg" alt="" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Welcome</h2>
            <p className="text-sm">@kunal123</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-white opacity-20" />

        {/* Main Menu Heading */}
        <h3 className="text-sm font-extrabold tracking-wide text-white mt-6 ml-6 underline underline-offset-2">MAIN MENU</h3>

        {/* Navigation Items */}
        <div className="mt-10 flex flex-col items-start px-3 gap-1">
          <div className="text-lg hover:bg-green-600 hover:rounded-lg  p-2 w-full  font-normal overflow-hidden flex items-center gap-3   text-black  scale-105 transition">
            <MdHome size={20} /> <span className=' overflow-hidden  '>Home</span>
          </div>
          <div className="text-lg hover:bg-green-600 hover:rounded-lg  p-2 w-full font-normal flex items-center gap-3   text-black  scale-105 transition">
            <FaBagShopping size={20} /> Shop
          </div>
          <div className="text-lg hover:bg-green-600 hover:rounded-lg  p-2 w-full  font-normal flex items-center gap-3   text-black  scale-105 transition">
            <IoSearch size={20} /> Search
          </div>
          <div className="text-lg font-normal hover:bg-green-600 hover:rounded-lg  p-2 w-full  flex items-center gap-3   text-black  scale-105 transition">
            <RiAddBoxFill size={20} /> Add New
          </div>
          <div className="text-lg font-normal hover:bg-green-600 hover:rounded-lg  p-2 w-full flex items-center gap-3   text-black scale-105 transition">
            <IoSettingsSharp size={20} /> Settings
          </div>
        </div>

        {/* Logout Button */}
        <div className="absolute bottom-10 left-6">
          <button className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-500 transition">
            Logout
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;