import React from 'react'
import Navbar from '../components/Navbar'
import ShopPage from '../components/ShopPage'
import ShopPage2 from './Shop_pages/ShopPage2'

const FullShoppage = () => {
  return (
    <div className='flex h-fit  bg-green-500'>
      <div className='w-0 md:w-[20%]'>

        <Navbar/>
      </div>
        <div className=' w-full overflow-hidden'>
        <ShopPage/>
        <ShopPage2/>
        </div>
    </div>
  )
}

export default FullShoppage