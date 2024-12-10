import React from 'react'
import Navbar from '../components/Navbar'
import ShopPage from '../components/ShopPage'

const FullShoppage = () => {
  return (
    <div className='flex w-full h-screen bg-green-500'>
        <Navbar/>
        <ShopPage/>
    </div>
  )
}

export default FullShoppage