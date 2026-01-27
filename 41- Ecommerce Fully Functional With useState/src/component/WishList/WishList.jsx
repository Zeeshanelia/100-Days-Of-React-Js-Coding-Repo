
const WishList = ({ activePanel, handlClosePanel, wishList, addToCart, clearWishList, quantityIncrement, removeItem }) => {

    return (<>
        <aside className={`fixed top-0 right-0 h-screen w-full sm:w-[420px] max-w-full bg-gradient-to-b from-gray-50 to-gray-100 z-50 shadow-2xl flex flex-col transform transition-transform duration-500 overflow-y-auto overscroll-contain ${activePanel === 'WishList' ? 'translate-x-0' : 'translate-x-full'} `} >

            {/* HEADER */}
            <header className="px-6 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <i className="ri-shopping-cart-2-line text-xl" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">WishList </h1>
                        <p onClick={quantityIncrement} className="text-xs opacity-80 flex items-center gap-1">
                            <i className="ri-shopping-bag-3-line" />
                            {wishList.length} items
                        </p>
                    </div>
                </div>

                <button onClick={handlClosePanel} className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition hover:rotate-90 flex items-center justify-center">
                    <i className="ri-close-line text-xl" />
                </button>
            </header>


            {/* ITEMS (SCROLL AREA) */}
            <section className="flex-1 overflow-y-auto px-2 py-2 space-y-4">




                {/* ITEM CARD */}
                {
                    wishList.length === 0 ?
                        (<p className="text-center font-bold text-zinc-700 broder mx-auto px-2 w-56 bg-red-300 ">
                            Your Wish List Is Empty
                        </p>)
                        :
                        (
                            wishList.map((item, index) => {
                                return (<div key={index} className="relative bg-white rounded-2xl shadow-md p-2 hover:shadow-lg transition ">


                                    <div className="flex gap-2">
                                        <div className="relative w-24 h-24 rounded-xl overflow-hidden shadow">
                                            <img
                                                src={item.img}
                                                alt="product"
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <span className="absolute -top-2 -left-2 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                                NEW
                                            </span>
                                        </div>

                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <div className="flex gap-3">
                                                    <h2 className="font-bold text-gray-800">Running Shoes</h2>

                                                    {/* <span className="font-bold text-purple-600">$129.99</span> */}

                                                    <div className="flex gap-2">
                                                        {(item.salesMela || item.freshArrival) && (
                                                            <span className="text-gray-500 line-through">
                                                                ${item.oldPrice}
                                                            </span>
                                                        )}

                                                        <span className="text-blue-600 font-semibold text-xl">${item.price.toFixed(2)}
                                                        </span>

                                                    </div>
                                                </div>

                                                <p className="text-sm text-gray-500 mt-1">
                                                    Cushion technology for long runs
                                                </p>

                                                {/* Rating */}
                                                {/* <div className="flex items-center gap-1 mt-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <i key={i} className="ri-star-fill text-yellow-400 text-sm" />
                      ))}
                      <span className="text-xs text-gray-400 ml-1">(4.8)</span>
                    </div> */}
                                            </div>


                                            <div className="flex justify-between items-center mt-4">

                                                <div className="ml-2 flex items-center bg-gray-50 border rounded-xl px-1  ">
                                                    {item.addDate}
                                                </div>



                                                <span
                                                    onClick={() => addToCart(item)} className='px-2 bg-gradient-to-r from-green-600 to-red-600 text-white font-semibold hover:scale-110 duration-300 py-1 rounded-xl'> Add to Cart</span>

                                                <button
                                                    onClick={() => removeItem(item)} // pass full item object
                                                    className="absolute -top-2 -right-2 w-7 h-7 bg-red-500 text-white rounded-full 
             flex items-center justify-center hover:scale-110 transition shadow-md"
                                                >
                                                    <i className="ri-close-line text-sm"></i>
                                                </button>



                                            </div>

                                        </div>

                                    </div>

                                </div>)

                            })


                        )
                }



                {/* <p className="text-center text-sm text-gray-400 flex items-center justify-center gap-2">
                    <i className="ri-shopping-cart-line" />
                    Add more items to your cart
                </p> */}

            </section>



            {/* FOOTER */}

            {/* FOOTER */}
            <footer onClick={clearWishList} className="px-5 py-2 bg-white border-t shrink-0">
                <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 rounded-xl hover:shadow-lg transition flex items-center justify-center gap-2">
                    All Clear
                    <i className="ri-file-close-line text-xl" />
                </button>

            </footer>
        </aside>
    </>)
}

export default WishList