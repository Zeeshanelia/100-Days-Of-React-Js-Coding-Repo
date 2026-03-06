import { ChevronDown, MapPin, ShoppingCart, MapPinned, Menu, X } from "lucide-react";
import { Link, NavLink, } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { useCart } from '../context/CartContext'
import { useState } from "react";

const Navbar = ({ location, dropDown, setDropDown, getLocation }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { cartItem } = useCart()


  const toggleDropDown = () => {
    setDropDown(!dropDown)
  }

  // console.log(location)
  return (<>
    <div className="py-2 shadow-2xl">

      <div className="max-w-6xl flex justify-between items-center mx-auto">

        <span className="flex items-center gap-5">
          <Link to={"/"} >  <img src="/images/logo1.png" className="h-11 " alt="logo" /> </Link>

          <div className="md:flex hidden gap-1 text-gray-500 items-center">
            <MapPin className="text-rose-500" />
            <span className="flex">
              {location ? (
                <div className="text-sm -space-y-2">
                  <p>{location.country}</p>
                  <p>{location.state}</p>
                  {/* <p>{location.city}</p> */}
                </div>
              ) : (
                <p>Add Address</p>
              )}
            </span>
            <ChevronDown onClick={toggleDropDown} />
          </div>

          {
            dropDown
              ?
              <div className="w-[150px]  z-50 bg-white fixed top-15 shadow-lg left-50 rounded-md ">
                <h1 className="mb-1 font-semibold ml-2 p-1 ">Change Location</h1>


                <button className="text-sm bg-rose-400 rounded-lg px-1 py-1 mb-2 mx-auto cursor-pointer hover:bg-rose-500 flex justift-between items-center gap-1"
                  onClick={getLocation}> Detect location <MapPinned /> </button>
              </div>

              : null
          }

        </span>

        <div>
          <nav className="md:flex justify-between items-center gap-3 hidden md:block ">

            <ul className="flex justify-between items-center gap-3 ">
              <NavLink to={"/"} className={({ isActive }) => `${isActive ? "border-b-3 border-red-400" : "text-black"} cursor-pointer font-semibold`}>Home</NavLink>
              <NavLink to={"/product"} className={({ isActive }) => `${isActive ? "border-b-3 border-red-400" : "text-black"} cursor-pointer font-semibold`}>Product</NavLink>
              <NavLink to={"/about"} className={({ isActive }) => `${isActive ? "border-b-3 border-red-400" : "text-black"} cursor-pointer font-semibold`}>About</NavLink>
              <NavLink to={"/contact"} className={({ isActive }) => `${isActive ? "border-b-3 border-red-400" : "text-black"}  cursor-pointer font-semibold`}>Contact</NavLink>
            </ul>

            <Link to={"/cart"} className="relative mt-2">
              <ShoppingCart className="w-6 h-6 " />
              <span className="absolute px-2 -top-4 -right-2 bg-red-500 rounded-full text-white ">
                {cartItem.length}
              </span>
            </Link>

            <div className="">
              <SignedOut style={{}}  >
                <SignInButton className="px-4 py-1 rounded-xl bg-gradient-to-r from-blue-400 to-pink-600 text-white font-semibold shadow-md hover:scale-105 transition" />
                {/* <SignUpButton /> */}
              </SignedOut>

              <SignedIn>
                <UserButton
                  appearance={{
                    elements: { avatarBox: "!w-10 !h-10" }
                  }} />
              </SignedIn>
            </div>


          </nav>

          <div className="md:hidden flex justify-between items-center gap-6">
            <Link to={"/cart"} className="relative mt-2">
              <ShoppingCart className="w-6 h-6 " />
              <span className="absolute px-2 -top-4 -right-2 bg-red-500 rounded-full text-white ">
                {cartItem.length}
              </span>
            </Link>

            {/* Hamburger Button — mobile only */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden font-bold focus:outline-none border border-perpule-400 rounded-lg p-1 mr-3 ">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>

        </div>

      </div>


      {isOpen && (
        <>
          <ul className="flex flex-col items-center gap-3 transition-transition-all durantion-300 ease-in-out">
            <NavLink to={"/"} className={({ isActive }) => `${isActive ? "border-b-3 border-red-400" : "text-black"} cursor-pointer font-semibold`}>Home</NavLink>
            <NavLink to={"/product"} className={({ isActive }) => `${isActive ? "border-b-3 border-red-400" : "text-black"} cursor-pointer font-semibold`}>Product</NavLink>
            <NavLink to={"/about"} className={({ isActive }) => `${isActive ? "border-b-3 border-red-400" : "text-black"} cursor-pointer font-semibold`}>About</NavLink>
            <NavLink to={"/contact"} className={({ isActive }) => `${isActive ? "border-b-3 border-red-400" : "text-black"}  cursor-pointer font-semibold`}>Contact</NavLink>


            <div className="">
            <SignedOut style={{}}  >
              <SignInButton className="px-4 py-1 rounded-xl bg-gradient-to-r from-blue-400 to-pink-600 text-white font-semibold shadow-md hover:scale-105 transition" />
              {/* <SignUpButton /> */}
            </SignedOut>

            <SignedIn>
              <UserButton
                appearance={{
                  elements: { avatarBox: "!w-10 !h-10" } }} />
            </SignedIn>
          </div>
          </ul>




          </>
      )}


    </div>
  </>);
};

export default Navbar;
