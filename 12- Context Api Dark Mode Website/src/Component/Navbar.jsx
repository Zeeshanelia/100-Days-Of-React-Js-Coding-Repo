import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useDarkMode } from "../Context/DarkModeContext"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
const { dark, toggleDark } = useDarkMode();

  return (
    <nav className="fixed w-full  bg-white dark:bg-gray-900 shadow-md fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
         
          <h1 className="text-2xl font-bold text-blue-600">dark mode using context api</h1>

         
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>

          
            <button className="text-2xl hover:opacity-75 transition" onClick={toggleDark}>
              {dark ? "🌙" : "☀️"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4 space-y-3">
          <a href="#" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">About</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Services</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Contact</a>

          {/* Moon emoji for mobile */}
          <button className="text-2xl hover:opacity-75 transition">
            🌙
          </button>
        </div>
      )}
    </nav>
  );
}
