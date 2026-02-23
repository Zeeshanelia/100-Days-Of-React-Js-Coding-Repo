import { useDarkMode } from "../Context/DarkModeContext";

export default function Home() {
  useDarkMode();
  // const { dark } = useDarkMode();

  return (
    <div className="  dark:bg-gray-900 min-h-screen flex items-center justify-center w-full transition-colors duration-500">
      <section className="max-w-7xl mx-auto px-6 text-center">
        {/* Hero Text */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white">
          Dark Mode Website
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
          Experience dark mode with React Context API and TailwindCSS.  
          Build fast, responsive, and beautiful UI components effortlessly.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="px-8 py-3 bg-gray-200 text-gray-900 rounded-lg shadow-lg hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition">
            Learn More
          </button>
        </div>

        {/* Decorative Card */}
        <div className="mt-12 flex justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-md text-left transition transform hover:-translate-y-2 hover:shadow-2xl">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              Why use Context API?
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Manage global state like dark mode effortlessly. No prop drilling, no headaches. Everything you need in one place!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
