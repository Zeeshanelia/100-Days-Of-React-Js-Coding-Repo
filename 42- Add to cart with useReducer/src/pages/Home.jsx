import { useContext } from "react";
import { StoreContext } from "../context&reducer/StoreContext";
import { Nav } from "../component/Nav";

export const Home = () => {
  const { addToCart } = useContext(StoreContext);

  const products = [
    { id: 1, name: "Product 1", price: 29.99, image: "/images/img1.jpg" },
    { id: 2, name: "Product 2", price: 49.99, image: "/images/img3.jpg" },
    { id: 3, name: "Product 3", price: 19.99, image: "/images/img4.jpg" },
     { id: 3, name: "Product 3", price: 19.99, image: "/images/img5.jpg" },
      { id: 3, name: "Product 3", price: 19.99, image: "/images/img6.jpg" },
       { id: 3, name: "Product 3", price: 19.99, image: "/images/img9.jpeg" },
        { id: 3, name: "Product 3", price: 19.99, image: "/images/img10.jpeg" }
  ];

  return (
    <>

      <Nav />
      <div className="mt-10 w-3/4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 rounded p-4 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-40 h-40 object-cover rounded"
            />
            <p className="font-bold mt-2">{item.name}</p>
            <p className="mt-1">${item.price.toFixed(2)}</p>
            <button
              className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
