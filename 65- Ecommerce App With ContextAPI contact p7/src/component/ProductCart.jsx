import { ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'

const ProductCart = ({ products }) => {
    const navigate = useNavigate()
    const { addToCart, cartItem } = useCart()
    // console.log(cartItem, 'click')

    return (
        <div className="relative flex flex-col p-3 rounded-2xl md:mx-1 cursor-pointer justify-start
            transition-all duration-300 hover:scale-105 bg-white/20 backdrop-blur-md border border-white/40 shadow-xl shadow-indigo-200/40 hover:shadow hover:shadow-indigo-300/50
            hover:bg-white/30">

            {/* Image */}
            <div className="flex items-center justify-center rounded-xl p-1 border
                bg-white/30 border-white/30" onClick={() => navigate(`/product/${products.id}`)}>

                <img src={products.images?.[0] || products.thumbnail} alt={products.title}
                    onError={(e) => {
                        e.target.onerror = null
                        e.target.src = "https://placehold.co/200x200?text=No+Image"
                    }} className="md:h-28 md:w-28 object-contain drop-shadow-md mb-3" />
            </div>

            <div className='flex gap-2 items-center justify-between '>
                <h1 className="text-sm w-3/4  font-semibold uppercase leading-tight text-slate-700">
                    {products.title.slice(0, 21).trim()}...
                </h1>

                <p className="w-1/4 font-semibold text-sm bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                    ${products.price.toFixed(2)}
                </p>
            </div>

            <button onClick={() => addToCart(products)} className="w-full px-2 py-1 rounded-xl font-semibold text-sm bg-white/40 border border-white/50 text-slate-700 hover:bg-rose-200 hover:shadow-md flex gap-2 items-center justify-center transition-all duration-200 hover:scale-105 backdrop-blur-sm mt-1">
                <ShoppingBag />
                 Add to Cart
            </button>

        </div>
    );
};

export default ProductCart;