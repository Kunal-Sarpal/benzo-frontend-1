import React from 'react'
import LoginCreator from './pages/Login_Creator/LoginCreator'
import { Link, Route, Routes } from 'react-router-dom'
import SignupCreator from './pages/Login_Creator/SingupCreator'
import BuisnessSignup from './pages/Login_Creator/BuisnessSignup'
import AddressSignup from './pages/Login_Creator/AddressSignup'
import ShopPage1 from './pages/Shop_pages/ShopPage1'
// import FullShoppage from './pages/FullShoppage'
// import LoginCreator from './pages/Login_Creator/LoginCreator'

const App = () => {
  return (
    <>
      {/* <FullShoppage/> */}
      
<Routes>
   
  <Route path='/' element={
          <div  className="bg-green-100 text-white flex justify-center items-center rounded-md hover:bg-green-100 transition duration-300 w-full h-screen shadow-md ">
              <button className='bg-green-500 text-white flex justify-center items-center rounded-md hover:bg-green-600 transition duration-300  p-2 px-4 w-fit h-fit shadow-md mt-6'><Link to={"/login-account"}>
              Start Selling</Link>
            </button>
        </div>
    }/>
  <Route path='/createaccount' element={<SignupCreator/>}/>
  <Route path='/loginaccount' element={<LoginCreator/>}/>
  <Route path='/brandname' element={<BuisnessSignup/>}/>
  <Route path='/createaddress' element={<AddressSignup/>}/>
  <Route path='/create-brand-shop' element={<ShopPage1/>}/>
</Routes>
    </>
  )
}

export default App