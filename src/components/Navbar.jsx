import React from 'react'
import { MdHome } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <React.Fragment>

      <div className='md:w-1/4 w-0 shadow-inner shadow-green-00 bg-green-500 h-full duration-200 transition-all ease-in-out'>

        {/* Logo */}
        <div className=' w-full h-full flex flex-col justify-between'>

          <div className='logo font-extrabold  text-3xl w-full text-white text-center mt-10'>BEN<span className='text-black'>ZO</span></div>

          {/* Navitems */}
          <div className='w-full flex justify-start flex-col items-center text-xl font-bold'>
            <div className=' p-3 flex flex-col gap-6'>

              <div className='w-full  text-xl hover:scale-125 font-bold text-start flex justify-start  duration-200 items-center gap-2 '><MdHome /> Home</div>
              <div className='w-full  text-xl hover:scale-125 font-bold text-start flex justify-start  duration-200 items-center gap-2'>< FaBagShopping/> Shop</div>
              <div className='w-full  text-xl hover:scale-125 font-bold text-start flex justify-start  duration-200 items-center gap-2'><IoSearch />
                Search</div>
              <div className='w-full  text-xl hover:scale-125 font-bold text-start flex justify-start  duration-200 items-center gap-2'><IoMdAdd /> Add New</div>
              <div className='w-full  text-xl hover:scale-125 font-bold text-start flex justify-start  duration-200 items-center gap-2 '> <IoSettingsSharp />Settings</div>
            </div>

          </div>
          {/* Logout */}
          <div className='w-full text-center text-black font-bold mb-24'>
            <button className='bg-yellow-400 w-fit rounded-md  p-2 px-5 shadow border-[1px] border-black'>
            Logout

            </button>
          </div>

        </div>

      </div>
    </React.Fragment>
  )
}

export default Navbar