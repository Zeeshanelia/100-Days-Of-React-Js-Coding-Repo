import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 sticky top-0 z-20 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Fake<span className="text-indigo-400">Store</span>
        </Link>

        <Link
          to="/cart"
          className="relative flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-5 py-2.5 rounded-lg transition font-medium">

          Cart

          {
            totalQuantity > 0  &&
            (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )
          }
        </Link>
      </div>
    </nav>
  );
}