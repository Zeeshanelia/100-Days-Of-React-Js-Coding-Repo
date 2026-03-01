import { ShoppingBag } from 'lucide-react';

const ProductCart = ({ products }) => {
    return (
        <div className="mt-2 relative flex flex-col gap-2 p-4 rounded-2xl cursor-pointer
            transition-all duration-300 hover:scale-105
            bg-white/20 backdrop-blur-md
            border border-white/40
            shadow-lg shadow-indigo-200/40
            hover:shadow-xl hover:shadow-indigo-300/50
            hover:bg-white/30">

            {/* Shimmer top line */}
            <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

            {/* Image */}
            <div className="flex items-center justify-center h-48 rounded-xl p-4
                bg-white/30 border border-white/30">
                <img
                    src={products.image}
                    alt={products.title}
                    className="h-full w-full object-contain drop-shadow-md"
                />
            </div>


            <h3 className="text-xs font-bold uppercase tracking-widest text-rose-400">
                {products.category}
            </h3>

            <h1 className="text-sm md:text-base font-semibold uppercase leading-tight text-slate-700">
                {products.title.slice(0, 40)}
            </h1>


            <p className="font-bold text-lg bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                $  {products.price}
            </p>


            <button className="mt-auto w-full px-4 py-2 rounded-xl font-semibold text-sm
                bg-white/40 border border-white/50 text-slate-700
                hover:bg-white/60 hover:shadow-md flex gap-2 items-center justify-center
                transition-all duration-200 hover:scale-105
                backdrop-blur-sm">
                <h3><ShoppingBag /></h3> Add to Cart
            </button>

        </div>
    );
};

export default ProductCart;