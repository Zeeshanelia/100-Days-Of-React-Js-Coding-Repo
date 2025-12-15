import { useContext } from "react";
import UserContext from "../Context/UserContext";
import { Navigate } from "react-router-dom";

const Details = () => {
  const { product } = useContext(UserContext);

  // Redirect to /products if the product is not found
  if (product === null || product === undefined) {
    return <Navigate to="/products" />;
  }

  // Optionally handle loading state, if necessary
  // if (!product) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="flex justify-center items-center min-h-screen p-3 bg-gray-400 ">
      <div className="bg-white rounded-lg p-7 w-11/12 md:w-8/12  md:flex justify-center items-center">
        {/* Safely render image and data */}
        <img src={product.image} alt={product.name} className="bg-white md:h-screen  rounded-lg p-22" />
        <div className=" md:flex justify-center items-center flex-col gap-15 m-10 text-center" >
        <h1 className="text-2xl font-bold text-center mt-4">{product.title}</h1>
          <p className="text-gray-400 text-center " >{product.description}</p>
          <p className="text-rose-400 text-center md:mb-3" >{product.category}</p>
          <p className="text-gray-900 font-bold  text-center mt-2">${product.price.toFixed(1)}</p>
          <button className="text-2xl bg-blue-400 rounded md:w-8/12  w-11/12 mt-2  items-center "> buy it </button>
        </div>


      </div>
    </div>
  );
};

export default Details;
