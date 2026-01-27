

const OrderPlaced = ({ setOrderPlaced }) => {

  

  
  return (
    <section className="fixed inset-0 z-40 bg-black/70 flex items-center justify-center">
      <div className="bg-white w-96 rounded-2xl shadow-2xl p-6 text-center">

        {/* Success Icon */}
        <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
          <i className="ri-check-line text-4xl text-green-600"></i>
        </div>

    
        <h2 className="text-2xl font-bold text-gray-800">
          Order Placed Successfully
        </h2>

     
        <p className="text-sm text-gray-500 mt-2">
          Thank you for your purchase. Your order has been confirmed and is being processed.
        </p>

        {/* Divider  , Order Info  */}
        <div className="my-4 border-t"></div>

       
        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <span className="font-semibold">Order ID:</span> #ORD-2458
          </p>
          <p>
            <span className="font-semibold">Payment:</span> Successful
          </p>
        </div>



       
        <div className="mt-6 flex gap-3">

          {/* <button
            className="flex-1 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition text-gray-700 font-medium">
            View Order
          </button> */}

          <button
           onClick={() =>setOrderPlaced(false)}

            className="flex-1 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition text-white font-medium" >
            Continue Shopping
          </button>

        </div>
      </div>
    </section>
  );
};

export default OrderPlaced;
