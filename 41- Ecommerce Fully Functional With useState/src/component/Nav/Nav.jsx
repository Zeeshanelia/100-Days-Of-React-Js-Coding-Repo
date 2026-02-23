import { useState } from "react";
import "remixicon/fonts/remixicon.css";

const Nav = ({ handleScrolling, setSearchedProduct, handlePanel, totalItem, wishList }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 md:w-full w-screen md:h-16 h-12 backdrop-blur-md bg-white/70 flex items-center justify-between  px-1 md:px-10 shadow-lg z-50 transition-all duration-300">

      {/* Logo */}
      <div className="flex items-center  gap-2 cursor-pointer group">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center shadow-md group-hover:scale-105 transition">
          <i className="ri-shopping-bag-line md:text-xl text-white"></i>
        </div>
        <span className="md:font-bold font-semibold text-gray-800 md:text-lg tracking-wide">ShopEase</span>
      </div>

      {/* Desktop Search */}
      <div className="hidden md:flex items-center border rounded-full overflow-hidden bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 transition">
        <input
          onFocus={() => handleScrolling?.()}
          onChange={(e) => setSearchedProduct(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 w-72 bg-transparent outline-none text-sm text-gray-700"
        />


        <button
          aria-label="Search"
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 transition"
        >
          <i className="ri-search-line"></i>
        </button>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-6">





        {/************  Heart WishList  OR  Notification icon  ************/}
        <div
          onClick={() => handlePanel("WishList")}
          className="relative cursor-pointer hover:text-blue-600 transition"
        >
          <i className="ri-poker-hearts-fill text-3xl text-gray-700"></i>

          {wishList.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
              {wishList.length}
            </span>
          )}
        </div>






        {/*********** Cart ************/}

        <div
          onClick={() => handlePanel("Cart")}
          className="relative cursor-pointer hover:text-blue-600 transition"
        >
          <i className="ri-shopping-cart-2-line text-3xl text-gray-700"></i>

          
            {!!Number(totalItem) && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">{Number(totalItem)}</span>
            )}
         
        </div>




        {/* Hamburger Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-3xl text-gray-700 hover:text-blue-600 transition">
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md border-t md:hidden shadow-lg animate-slide-down">
          <div className="p-6 space-y-6">
            {/* Mobile Search */}
            <div className="flex items-center border rounded-full overflow-hidden bg-gray-100">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 bg-transparent outline-none" />
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <i className="ri-search-line"></i>
              </button>
            </div>

            {/* Links */}
            <nav className="space-y-3 text-gray-700 font-medium">
              <a href="#" className="block hover:text-blue-600 transition">
                <i className="ri-home-9-line text-xl"></i>  Home</a>
              <a href="#" className="block hover:text-blue-600 transition">
                <i className="ri-shopping-bag-line text-xl"></i> Shop</a>
              <a href="#" className="block hover:text-blue-600 transition">
                <i className="ri-article-fill text-xl"></i> Categories</a>
              <a href="#" className="block hover:text-blue-600 transition">
                <i className="ri-phone-line text-xl"></i> Contact</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
