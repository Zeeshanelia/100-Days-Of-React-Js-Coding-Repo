import { useState, useEffect } from "react";
import "remixicon/fonts/remixicon.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchedProduct, setSearchedProduct] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Handle closing menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu when clicking outside (optional enhancement)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest("header")) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  const handleScrolling = () => {
    // Your scrolling logic here
  };

  return (
    <header className="fixed top-0 w-full h-16 backdrop-blur-md bg-white/70 flex items-center justify-between px-4 sm:px-6 md:px-10 shadow-lg z-50 transition-all duration-300">
      {/* Logo - Adjusted for mobile */}
      <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center shadow-md group-hover:scale-105 transition">
          <i className="ri-shopping-bag-line text-lg sm:text-xl text-white"></i>
        </div>
        <span className="font-bold text-gray-800 text-base sm:text-lg tracking-wide">
          ShopEase
        </span>
      </div>

      {/* Desktop Search - Hidden on mobile */}
      <div className="hidden md:flex items-center border rounded-full overflow-hidden bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 transition flex-1 max-w-xl mx-8">
        <input
          onFocus={() => handleScrolling?.()}
          onChange={(e) => setSearchedProduct(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 w-full bg-transparent outline-none text-sm text-gray-700"
          value={searchedProduct}
        />
        <button
          aria-label="Search"
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 transition min-w-[44px]"
        >
          <i className="ri-search-line"></i>
        </button>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Notification - Hidden on very small screens if needed */}
        <div className="relative cursor-pointer hover:text-blue-600 transition">
          <i className="ri-notification-3-line text-xl sm:text-2xl text-gray-700"></i>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center">
            1
          </span>
        </div>

        {/* Cart */}
        <div className="relative cursor-pointer hover:text-blue-600 transition">
          <i className="ri-shopping-cart-2-line text-xl sm:text-2xl text-gray-700"></i>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center animate-pulse">
            2
          </span>
        </div>

        {/* Hamburger Menu - Only on mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="md:hidden text-2xl sm:text-3xl text-gray-700 hover:text-blue-600 transition min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>

      {/* Mobile Menu - Improved animation and positioning */}
      <div
        className={`absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md border-t md:hidden shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Mobile Search */}
          <div className="flex items-center border rounded-full overflow-hidden bg-gray-100">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 sm:py-3 bg-transparent outline-none text-sm"
              onChange={(e) => setSearchedProduct(e.target.value)}
              value={searchedProduct}
            />
            <button className="px-4 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white min-w-[44px]">
              <i className="ri-search-line"></i>
            </button>
          </div>

          {/* Links */}
          <nav className="space-y-2 sm:space-y-3 text-gray-700 font-medium">
            <a
              href="#"
              className="block py-2 sm:py-3 px-2 hover:text-blue-600 transition hover:bg-gray-50 rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              <i className="ri-home-line mr-3"></i>Home
            </a>
            <a
              href="#"
              className="block py-2 sm:py-3 px-2 hover:text-blue-600 transition hover:bg-gray-50 rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              <i className="ri-store-line mr-3"></i>Shop
            </a>
            <a
              href="#"
              className="block py-2 sm:py-3 px-2 hover:text-blue-600 transition hover:bg-gray-50 rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              <i className="ri-apps-line mr-3"></i>Categories
            </a>
            <a
              href="#"
              className="block py-2 sm:py-3 px-2 hover:text-blue-600 transition hover:bg-gray-50 rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              <i className="ri-contacts-line mr-3"></i>Contact
            </a>
            <a
              href="#"
              className="block py-2 sm:py-3 px-2 hover:text-blue-600 transition hover:bg-gray-50 rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              <i className="ri-user-line mr-3"></i>Account
            </a>
          </nav>

          {/* Optional: User info or additional actions */}
          {isMobile && (
            <div className="pt-4 border-t">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <i className="ri-user-line text-gray-600"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Welcome back!</p>
                  <p className="text-sm text-gray-500">Sign in for better experience</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Nav;