import Nav from "./Nav";
import "animate.css";



function App() {




  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white flex flex-col">
        {/* Fixed Nav at top */}
        <div className="w-full">
          <Nav />
        </div>

        {/* Main content - centered and responsive */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          {/* Content container with responsive spacing */}
          <div className="max-w-4xl w-full text-center space-y-4 sm:space-y-6 md:space-y-8">
            {/* Responsive heading with proper line heights */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:leading-snug md:leading-normal">
              Welcome to Our Website!
            </h1>

            {/* Responsive paragraph with better contrast for readability */}
            <p className="text-base sm:text-lg md:text-xl text-gray-100 opacity-90 max-w-2xl mx-auto px-4">
              Explore our features and enjoy your stay. Discover amazing products and services tailored just for you.
            </p>

            {/* Optional: Responsive call-to-action button */}
            <div className="pt-4 sm:pt-6 md:pt-8">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-full 
                          hover:bg-gray-100 active:scale-95 transition-all duration-200 
                          shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg
                          min-h-[44px] sm:min-h-[48px]"> {/* Touch-friendly height */}
                Get Started
              </button>
            </div>

            {/* Optional: Responsive feature grid for larger screens */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/15 transition">
                <i className="ri-shield-check-line text-2xl sm:text-3xl mb-3"></i>
                <h3 className="font-bold text-lg sm:text-xl mb-2">Secure</h3>
                <p className="text-sm sm:text-base opacity-80">Bank-level security for all transactions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/15 transition">
                <i className="ri-zap-line text-2xl sm:text-3xl mb-3"></i>
                <h3 className="font-bold text-lg sm:text-xl mb-2">Fast</h3>
                <p className="text-sm sm:text-base opacity-80">Lightning-fast browsing experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/15 transition sm:col-span-2 lg:col-span-1">
                <i className="ri-smartphone-line text-2xl sm:text-3xl mb-3"></i>
                <h3 className="font-bold text-lg sm:text-xl mb-2">Responsive</h3>
                <p className="text-sm sm:text-base opacity-80">Works perfectly on all devices</p>
              </div>
            </div>
          </div>
        </main>

        {/* Optional: Responsive footer */}
        <footer className="w-full py-4 sm:py-6 bg-black/10 backdrop-blur-sm">
          <div className="text-center text-sm sm:text-base opacity-80 px-4">
            <p>© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
            <p className="mt-1 text-xs sm:text-sm opacity-60">Optimized for mobile, tablet, and desktop</p>
          </div>
        </footer>
      </div>

    </>
  )
}

export default App


