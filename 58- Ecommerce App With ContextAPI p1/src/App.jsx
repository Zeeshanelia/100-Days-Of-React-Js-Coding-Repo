import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './page/About'
import Contact from './page/Contact'
import Home from './page/Home'
import Product from './page/Product'
import Navbar from './component/Navbar'


function App() {
  return (
    <BrowserRouter>
      {/* Full screen background */}
      <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-600 text-white flex flex-col">

        {/* App Header */}
        <header className="h-16 flex items-center justify-center backdrop-blur-md bg-black/30 shadow-lg">
          <h1 className="text-2xl font-bold tracking-wide">
            🎉 Product
          </h1>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 w-full px-4 md:px-8 py-6 animate__animated animate__fadeIn">
          <div className="max-w-7xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-4 md:p-6">


            <Routes>
            <Route path="/navbar" element={<Navbar />} />
              <Route path="" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="about" element={<About />} />

              <Route path="*" element={
                <div className="h-[60vh] flex items-center justify-center">
                  <h1 className="text-3xl font-bold text-red-400">
                    404 - Error
                  </h1>
                </div>
              }
              />
            </Routes>

          </div>
        </main>

        {/* Footer */}
        <footer className="h-12 flex items-center justify-center text-sm bg-black/40">
          © 2026 Ecommerce App Using Context API
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
