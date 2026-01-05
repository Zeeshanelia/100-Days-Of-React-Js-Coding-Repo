import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between py-4">
        
        {/* Brand */}
        <h1 className="text-2xl font-bold text-white mb-4 md:mb-0">
          Event Manager
        </h1>

        {/* Menu */}
        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-white text-sm">
          <li>
            <Link 
              to="/"
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/event-list"
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              Event List
            </Link>
          </li>

          <li>
            <Link
              to="/event-filter"
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              Filter Events
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navigation;
