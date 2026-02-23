import "remixicon/fonts/remixicon.css";

const Cart = ({ activePanel, handlClosePanel, cart, removeItem, quantityIncrement, quantityDecrease, subTotal, totalItem, shipingFee, totalSummary, setOrderSummary }) => {
  return (

    <aside className={`fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-gradient-to-b from-gray-50 to-gray-100 z-50 shadow-2xl flex flex-col transform transition-transform duration-500
    ${activePanel === 'Cart' ? 'translate-x-0' : 'translate-x-full'} `}>



      {/***********    HEADER     ***********/}

      <header className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex justify-between items-center shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <i className="ri-shopping-cart-2-line text-xl" />
          </div>

          <div>
            <h1 className="text-xl font-bold">Your Cart</h1>
            <p className="text-xs opacity-80 flex items-center gap-1">

              <i className="ri-shopping-bag-3-line" />
              {!!Number(totalItem) && (
                <span>{Number(totalItem)} Items</span>
              )}
            </p>
          </div>
        </div>


        <button onClick={handlClosePanel} className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition hover:rotate-90 flex items-center justify-center">
          <i className="ri-close-line text-xl" />
        </button>
      </header>




      {/***** ITEMS OF CART *******/}

      <section className="flex-1  overflow-y-auto px-2 py-2 space-y-1 scroll">

        {
          cart.length === 0 ?

            (<p className="text-center font-semibold text-red-700 bg-green-200 px-4 py-1 mb-5"> Your Cart is Empty </p>)

            :

            (cart.map((product, index) => {

              // console.log("CART VALUE:", cart, Array.isArray(cart));
              // console.log('PRODUCT IN CART:', cart);


              return (
                <div key={product.id ?? index}
                  className="relative bg-white rounded-2xl shadow-md p-4">

                  <button onClick={() => removeItem(product)} className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition">
                    <i className="ri-close-line text-sm" />
                  </button>

                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden shadow">
                      <img
                        src={product.img}
                        alt="product"
                        className="w-full h-full object-cover" />

                      {/* <span className="absolute -top-2 -left-2 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                NEW
              </span> */}
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>

                        <div className="flex justify-between items-start gap-2">
                          <h2 className="font-bold text-gray-800">{product.name}</h2>
                          <div className="flex items-center  justify-between gap-2 px-4">

                            {(product.salesMela || product.freshArrival) && (
                              <span className="text-gray-500 line-through">
                                ${product.oldPrice}
                              </span>
                            )}


                            <span className="text-blue-600 font-semibold text-xl">${product.price.toFixed(2)}
                            </span>
                          </div>
                        </div>


                        <p className="text-sm text-gray-500 mt-1">
                          Cushion technology for long runs
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-1">

                        <div className="flex items-center bg-gray-50 border rounded-xl px-3 py-2 gap-10">
                          <button onClick={() => quantityDecrease(product)} className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                            <i className="ri-subtract-line text-xs" />
                          </button>

                          <span className="font-bold">{product.quantity}</span>

                          <button onClick={() => quantityIncrement(product)} className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center hover:bg-purple-200">
                            <i className="ri-add-line text-xs" />
                          </button>
                        </div>

                        <button className="text-purple-600 hover:text-purple-800">
                          <i className="ri-heart-line text-xl" />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              )
            })
            )

        }

        {/***********  SUMMARY   ***********/}

        <div className="sticky bottom-0  z-10 bg-white rounded-2xl shadow-md p-2 space-y-1">
          <h3 className="font-bold text-gray-900 flex items-center gap-2 ">
            <i className="ri-file-list-3-line text-purple-600" />
            Order Summary
          </h3>

          <div className="flex justify-between text-sm border-t">
            <span className="text-gray-600">Subtotal</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-sm border-t border-gray-200">
            <span className="text-gray-600">Shipping</span>
            <span className="text-green-600">${shipingFee}</span>
          </div>

          <div className="flex justify-between text-sm border-t border-gray-200">
            <span className="text-gray-600">Tax</span>
            <span>$15.60</span>
          </div>

          <div className="pt-1 border-t flex justify-between items-center">
            <span className="font-bold text-lg">Total Of Order</span>
            <span className="text-2xl font-bold text-purple-600">
              ${totalSummary.toFixed(2)}
            </span>
          </div>
        </div>

      </section>




      {/*********** FOOTER  ***********/}

      <footer className="px-5 py-2 bg-white border-t shrink-0">

        <button onClick={() => setOrderSummary(true)} className={`w-full  py-3 rounded-xl  flex items-center justify-center gap-2 
        ${cart.length === 0 ? "bg-gray-200"
            :
            'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold hover:shadow-2xl transition'}`}
          disabled={cart.length === 0} >

          Proceed to Checkout
          <i className="ri-arrow-right-line" />
        </button>
      </footer>

    </aside>
  );
};

export default Cart;



