import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setLoading, setError } from '../features/products/productsSlice';
import ProductCard from '../components/ProductCard';

export default function ProductsPage() {
  const dispatch = useDispatch();
  const { items: products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    // Only fetch if we don't have products yet
    if (products.length === 0) {
      const fetchProducts = async () => {
        dispatch(setLoading());

        try {
          const response = await fetch('https://fakestoreapi.com/products?limit=12');
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          const data = await response.json();
          dispatch(setProducts(data));
        } catch (err) {
          dispatch(setError(err.message));
        }
      };

      fetchProducts();
    }
  }, [products.length, dispatch]);

  if (loading) {
    return (
      <div className="text-center py-32 text-xl font-medium text-gray-700">
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-32 text-red-600 text-xl">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-10 text-center md:text-left">
        Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}