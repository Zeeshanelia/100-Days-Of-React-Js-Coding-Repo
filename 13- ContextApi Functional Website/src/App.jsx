import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ShoppingCart, Home as HomeIcon, Package, Info } from "lucide-react";
import Home from "./Page/Home";
import CartPage from "./Page/CartPage";
import { CartProvider, useCart } from "./context/CartContext";

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="w-full bg-slate-700 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold hover:text-slate-200 transition-colors"
          >
            <Package className="w-7 h-7" />
            <span>ShopE Store</span>
          </Link>
         
        </div>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-slate-200 transition-colors"
          >
            <HomeIcon className="w-5 h-5" />
            <span className="hidden sm:inline">Home</span>
          </Link>

          <Link
            to="/about"
            className="flex items-center gap-2 hover:text-slate-200 transition-colors"
          >
            <Info className="w-5 h-5" />
            <span className="hidden sm:inline">About</span>
          </Link>

          <div className="relative">
            <Link
              to="/cart"
              className="flex items-center gap-2 hover:text-slate-200 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="hidden sm:inline">Cart ({cart.length})</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />

          <main className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartPage />} />
              <Route
                path="/about"
                element={
                  <div className="p-8 text-center">About Page - Coming Soon</div>
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}
