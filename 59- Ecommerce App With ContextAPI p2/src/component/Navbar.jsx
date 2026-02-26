import { ChevronDown, MapPin, ShoppingCart, LogIn } from "lucide-react";
import { Link, NavLink, } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';


const Navbar = ({ location }) => {

console.log(location)
  return (<>
    <div className="py-2 shadow-2xl">

      <div className="max-w-6xl flex justify-between items-center mx-auto">

        <span className="flex items-center gap-5">
          <Link to={"/"} >  <img src="/images/logo1.png" className="h-11 " alt="logo" /> </Link>

          <div className="flex gap-1 text-gray-500 items-center">
            <MapPin className="text-rose-500" />
            <span>
              {location
                ?
                <div className="space-y-2">
                  <p>{location.country}</p>
                  <p>{location.state}</p>
                </div>
                : "Add Address"}
            </span>
            <ChevronDown />
          </div>
        </span>

        <div>
          <nav className="flex justify-between items-center gap-3">

            <ul className="flex justify-between items-center gap-3 ">
              <NavLink to={"/"} className={({ isActive }) => `${isActive ? "border-b-3 border-red-400" : "text-black"} cursor-pointer font-semibold`}>Home</NavLink>
              <NavLink to={"/product"} className={({ isActive }) => `${isActive ? "border-b-3 border-red-400" : "text-black"} cursor-pointer font-semibold`}>Product</NavLink>
              <NavLink to={"/about"} className={({ isActive }) => `${isActive ? "border-b-3 border-red-400" : "text-black"} cursor-pointer font-semibold`}>About</NavLink>
              <NavLink to={"/contact"} className={({ isActive }) => `${isActive ? "border-b-3 border-red-400" : "text-black"}  cursor-pointer font-semibold`}>Contact</NavLink>
            </ul>

            <Link to={"/cart"} className="relative mt-2">   <ShoppingCart className="w-6 h-6 " />
              <span className="absolute px-2 -top-4 -right-2 bg-red-500 rounded-full text-white "> 0 </span>
            </Link>

            <div className="">
              <SignedOut style={{}}  >
                <SignInButton className="px-4 py-1 rounded-xl bg-gradient-to-r from-blue-400 to-pink-600 text-white font-semibold shadow-md hover:scale-105 transition" />
                {/* <SignUpButton /> */}
              </SignedOut>

              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "!w-10 !h-10"
                    }
                  }}
                />
              </SignedIn>
            </div>

          </nav>
        </div>
      </div>
    </div>
  </>);
};

export default Navbar;
