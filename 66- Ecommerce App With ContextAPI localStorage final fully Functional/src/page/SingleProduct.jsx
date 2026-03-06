import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Breadcrums from '../component/Breadcrums'
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const SingleProduct = () => {
    const [singleProduct, setSingleProduct] = useState()
    const param = useParams()
    const { addToCart } = useCart()

    const getSingleProduct = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${param?.id}`);
            // toast.success('Prodcut added in cart')
            setSingleProduct(response.data);
        } catch (error) {
            console.log("API Error:", error);
        }
    };

    useEffect(() => {
        getSingleProduct()

    }, [])

    return (
        <>
            <Breadcrums title={singleProduct?.title} />


            <div className="mt-2 flex items-center justify-center px-8 overflow-hidden md:mb-16">

                <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="md:w-1/2 flex items-center justify-center ">
                        <img
                            src={singleProduct?.thumbnail} alt={singleProduct?.title}
                            className="w-82 h-82 object-contain drop-shadow-2xl"/>
                    </div>

                    {/* Details */}
                    <div className="md:w-1/2 p-2 flex flex-col justify-between">

                        {/* Category & Brand */}
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                                {singleProduct?.category}
                            </span>
                            <span className="text-zinc-400"> • </span>
                            <span className="text-xs text-zinc-400">{singleProduct?.brand}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl font-bold leading-tight mb-1">
                            {singleProduct?.title}
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-2">
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span key={star}
                                        className={`text-xl ${star <= Math.round(singleProduct?.rating) ? "text-amber-400" : "text-zinc-300"}`}> ★ </span>
                                ))}
                            </div>
                            <span className="text-amber-400 font-bold">{singleProduct?.rating}</span>
                            <span className="text-zinc-400 text-sm">/ 5</span>
                        </div>

                        {/* Description */}
                        <p className="text-zinc-500 text-sm leading-relaxed mb-2">
                            {singleProduct?.description}
                        </p>

                        {/* Price & Discount */}
                        <div className="flex items-end gap-3 mb-4">
                            <span className="text-4xl font-extrabold">
                                ${singleProduct?.price}
                            </span>
                            {singleProduct?.discountPercentage && (
                                <span className="text-sm bg-amber-400 text-zinc-900 font-bold px-2 py-1 rounded-lg mb-1">
                                    -{Math.round(singleProduct?.discountPercentage)}% OFF
                                </span>
                            )}
                        </div>

                        {/* Stock */}
                        <div className="flex items-center gap-2 mb-1">
                            <div className={`w-2 h-2 rounded-full ${singleProduct?.stock > 10 ? "bg-green-400" : "bg-red-400"}`} />
                            <span className="text-sm text-zinc-400">
                                {singleProduct?.stock > 10 ? "In Stock" : `Only ${singleProduct?.stock} left`}
                            </span>
                        </div>


                        <div className="flex gap-4">

                            {/* quantity selector */}
                            <div className="flex items-center gap-4">
                                <label htmlFor="" className="text-sm font-medium text-gray-700">Quantity:</label>
                                <input
                                    type="number" min={1} value={1}
                                    className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500" />
                            </div>

                            {/* Add to Cart */}
                            <button onClick={()=>addToCart(singleProduct)} className="w-full bg-amber-400 hover:bg-amber-300 text-zinc-900 font-bold py-3 rounded-2xl transition-all duration-200 text-sm tracking-wide">
                                Add to Cart
                            </button>
                        </div>

                        {/* Bottom Stats */}
                        <div className="grid grid-cols-3 divide-x divide-zinc-200 border-t border-zinc-200 mt-2">
                            {[
                                { label: "SKU", value: singleProduct?.sku || "N/A" },
                                { label: "Warranty", value: singleProduct?.warrantyInformation || "N/A" },
                                { label: "Shipping", value: singleProduct?.shippingInformation || "N/A" },
                            ].map((item) => (
                                <div key={item.label} className="p-4 text-center">
                                    <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">{item.label}</p>
                                    <p className="text-sm font-medium">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>



                {/* </div> */}
            </div>
        </>
    );
};

export default SingleProduct;