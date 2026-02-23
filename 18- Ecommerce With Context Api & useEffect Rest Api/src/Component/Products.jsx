import { useContext } from "react";
import UserContext from "../Context/UserContext";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]) // instead of empty state, must be used [] because this contain on array like api response

  const [loading, setLoading] = useState(true);
  const { setProduct } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setProducts(data)
        setLoading(false);
      })
      .catch((err) =>
        console.log(err))
  }, [])

  const openProducts = (item) => {
    setProduct(item)
    navigate('/details')
  }

  return (
    <div className="bg-gray-200 flex justify-center p-8 text-center ">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full ">
      <a className=" font-bold underline" href='https://github.com/Zeeshanelia/Portfolio_Website' > Context Api With Simple Approach </a>

        <p className="text-gray-400 mt-4"> Wellcome on Shoping Store 😉 </p>
        <div className=" mt-12 grid md:grid-cols-4  gap-10 items-center justify-center ">

          {loading && <div>Loading products...</div>}

          {
            products.map((item, index) => (

              <div key={index} className="bg-white rounded-lg p-4 shadow-lg flex flex-col items-center text-center h-full"  >
                <img className="h-60 min-w-44 " src={item.image} />
                <button onClick={()=>openProducts(item)} className="hover:text-blue-500 hover:underline">
                  <h1 className="text-bold font-medium mt-3"> {item.title} </h1>
                </button>
                <p className="text-gray-600 mt-2">${item.price.toFixed(1)}</p>

              </div>))}

        </div>
      </div>
    </div>
  )
}
export default Products