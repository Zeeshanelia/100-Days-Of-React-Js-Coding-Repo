import { useSelector } from 'react-redux';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';

const products = [
  { id: 1, title: "food", price: 29.99, image: "images/1.jpg" },
  { id: 2, title: "pizza", price: 89.99, image: "images/2.jpg" },
  { id: 3, title: "paratha roll", price: 39.99, image: "images/3.jpg" },
  { id: 4, title: "breakfast", price: 49.99, image: "images/4.jpg" },
];

function App() {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div className="container mx-auto p-6">
      <header className="flex justify-between items-center gap-2 mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Simple Shop</h1>
        <div className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Cart : {cartItems.length} items
        </div>
      </header>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-6">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="md:w-66">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;