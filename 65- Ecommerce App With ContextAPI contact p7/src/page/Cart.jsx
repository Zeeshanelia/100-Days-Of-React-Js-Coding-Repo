import { useUser } from '@clerk/clerk-react';
import { useCart } from '../context/CartContext'
import { Plus, Minus, ShoppingBasket, Truck, HandCoins, Trash2 } from 'lucide-react'



const Cart = ({ getLocation, location }) => {
const { cartItem, updateQuantity, deleteItem } = useCart()

    const userCheckOut = useUser()
    const totalPrice = cartItem.reduce((total, item) => total + item.price, 0)
    console.log(getLocation)


    return (
        <>
            <div className='mt-10 max-w-[100rem]  mx-auto'>


                <h1 className="font-semibold text-lg">My Cart Items - {cartItem.length}</h1>

                <div className="mt-6">
                    {cartItem.length === 0
                        ?
                        (<p className="text-gray-500 text-center md:py-20 md:mb-62 text-xl font-bold ">Your Cart is Empty</p>)
                        :
                        (<>
                            {cartItem.map((item, index) => (
                                <div key={index}
                                    className="rounded-md flex items-center justify-between mt-3 w-full px-2 border border-gray-300">

                                    {/* Left side - image + info */}
                                    <div className="flex items-center gap-4 flex-1">
                                        <img
                                            src={item.images?.[0] || item.thumbnail}
                                            alt={item.title}
                                            className="w-20 h-20 rounded-md object-cover" />
                                        <div>
                                            <h3 className="font-semibold line-clamp-2">{item.title}</h3>
                                            <p className="text-gray-600">${item.price}</p>
                                        </div>
                                    </div>

                                    {/* Right side - quantity + remove */}
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => updateQuantity(item.id, "decrease")}
                                                className="bg-red-500 text-white w-8 h-8 rounded-md hover:bg-red-600 transition-colors flex items-center justify-center cursor-pointer">
                                                <Minus size={16} />
                                            </button>

                                            <span className="font-bold w-6 text-center">{item.quantity}</span>

                                            <button
                                                onClick={() => updateQuantity(item.id, "increase")}
                                                className="bg-red-500 text-white w-8 h-8 rounded-md hover:bg-red-600 transition-colors flex items-center justify-center cursor-pointer">
                                                <Plus size={16} />
                                            </button>
                                        </div>

                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded-md font-bold hover:bg-red-600 transition-colors flex gap-2 items-center"
                                            onClick={() => deleteItem(item.id)}>
                                            Remove <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}



                            {/*spread here :  Delivery + Bill moved OUTSIDE map */}
                            <div className="flex gap-6 p-6">

                                {/* Delivery Info */}
                                <div className="border border-gray-300 p-5 rounded-xl w-1/2 space-y-4">
                                    <h2 className="text-xl font-bold">Delivery Info</h2>

                                    {/* Full Name */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium">Full Name</label>
                                        <input
                                            type="text" value={userCheckOut.fullName}
                                            placeholder="Zeeshan Elia"
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
                                    </div>

                                    {/* Address */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium">Address</label>
                                        <input
                                            type="text"
                                            value={location?.country} placeholder="Enter Your Address"
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
                                    </div>

                                    {/* State & PostCode */}
                                    <div className="flex gap-4">
                                        <div className="space-y-1 w-1/2">
                                            <label className="text-sm font-medium">State</label>
                                            <input
                                                type="text" value={location?.state} placeholder="Enter Your state"
                                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
                                        </div>
                                        <div className="space-y-1 w-1/2">
                                            <label className="text-sm font-medium">PostCode</label>
                                            <input
                                                type="text" value={location?.postcode} placeholder="Enter Your postcode"
                                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
                                        </div>
                                    </div>

                                    {/* Country & Phone */}
                                    <div className="flex gap-4">
                                        <div className="space-y-1 w-1/2">
                                            <label className="text-sm font-medium">Country</label>
                                            <input
                                                type="text" value={location?.country}
                                                placeholder="Enter Your Country"
                                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
                                        </div>
                                        <div className="space-y-1 w-1/2">
                                            <label className="text-sm font-medium">Phone no</label>
                                            <input
                                                type="text" placeholder="Enter Your Number"
                                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
                                        </div>
                                    </div>

                                    {/* Submit */}
                                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-all duration-200">
                                        Submit
                                    </button>

                                    {/* OR Divider */}
                                    <p className="text-center text-gray-400 text-sm">-------OR--------</p>

                                    {/* Detect Location */}
                                    <div className="flex justify-center">
                                        <button onClick={getLocation}
                                            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-all duration-200">
                                            Detect Location
                                        </button>
                                    </div>
                                </div>

                                {/* Bill Details */}
                                <div className="border border-gray-300 p-6 rounded-xl w-1/2 space-y-4 shadow-sm h-max">
                                    <h2 className="text-xl font-bold">Bill details</h2>

                                    {/* Items Total */}
                                    <div className="flex justify-between items-center">
                                        <span className="flex items-center gap-2 text-gray-600">
                                            <ShoppingBasket size={18} className="text-gray-600" />
                                            Items total
                                        </span>
                                        <span className="font-medium">${totalPrice}</span>
                                    </div>

                                    {/* Delivery Charge */}
                                    <div className="flex justify-between items-center">
                                        <span className="flex items-center gap-2 text-gray-600">
                                            <Truck size={18} className="text-gray-600" />
                                            Delivery charge
                                        </span>
                                        <span>
                                            <span className="line-through text-gray-400 mr-1">$25</span>
                                            <span className="text-red-500 font-semibold">FREE</span>
                                        </span>
                                    </div>

                                    {/* Handling Charge */}
                                    <div className="flex justify-between items-center">
                                        <span className="flex items-center gap-2 text-gray-600">
                                            <HandCoins size={18} className="text-gray-600" />
                                            Handling charge
                                        </span>
                                        <span className="text-red-500 font-semibold">$5</span>
                                    </div>

                                    <hr className="border-gray-200" />

                                    {/* Grand Total */}
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-lg">Grand total</span>
                                        <span className="font-bold text-lg">${totalPrice + 5}</span>
                                    </div>

                                    {/* Promo Code */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Apply Promo Code</label>
                                        <div className="flex gap-2">
                                            <input
                                                type="text" placeholder="Enter code"
                                                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
                                            <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200">
                                                Apply
                                            </button>
                                        </div>
                                    </div>

                                    {/* Checkout Button */}
                                    <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition-all duration-200">
                                        Proceed to Checkout
                                    </button>
                                </div>

                            </div>
                        </>
                        )
                    }

                </div>
            </div>

        </>
    );
};

export default Cart;
