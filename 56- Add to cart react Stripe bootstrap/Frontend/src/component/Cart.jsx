import React from "react";
import { loadStripe } from '@stripe/stripe-js';

const Cart = ({ cartAllProduct, setCartAllProduct }) => {
  // console.log("cartAllProduct", cartAllProduct);

  const handleIncrement = (id) => {
    setCartAllProduct((prevCart) =>
      prevCart.map((item) =>
        item?.id === id ? { ...item, count: item?.count + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartAllProduct((prevCart) =>
      prevCart.map((item) =>
        item?.id === id && item?.count > 1
          ? { ...item, count: item?.count - 1 }
          : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    const filteredItem = cartAllProduct?.filter((item) => item?.id !== id);
    setCartAllProduct(filteredItem);
  };


  const totalPrice = cartAllProduct.reduce(
    (acc, product) => acc + product.price * product.count,
    0
  );

  const handleCheckout = async () => {
    const stripe = await loadStripe("pk_test_51RdAaS07fQfDbTFlSVQDvwAnDVzZ8y1bpWoijd9nfoFLWme90xqPEOUpPMuuG4QEEbePwS2ppV6KYyBMH6hOXNcg003ozmsXT7");

    const response = await fetch("http://localhost:8080/api/makepayment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartAllProduct }),

    });

    const dataSession = await response.json();
    console.log("Payment session created:", dataSession);
    stripe.redirectToCheckout({ sessionId: dataSession.id });

  };

  return (
    <div className="container-fluid">
      <div className="row p-3 gap-3">
        {cartAllProduct?.map((product) => {
          return (
            <div
              className="col-8 border rounded d-flex gap-3"
              key={product?.id}
            >
              <div className="p-1">
                <img
                  src={product?.img}
                  alt={product?.model}
                  className="cart-product-size"
                />
              </div>
              <div className="p-1 d-flex gap-3">
                <div>
                  <h3 className="text-hiding m-0">
                    {product?.model?.toUpperCase()}
                  </h3>
                  <p className="m-0 fs-5">
                    <span className="font-bold ">₹</span> {product?.price}
                  </p>
                  <p className="m-0 font-size-12 font-bold">{product?.space}</p>
                  <p className="m-0 font-size-12 font-bold">
                    {product?.camera}
                  </p>
                  <div className="d-flex gap-3 mt-1">
                    <p
                      className="m-0 border p-0 px-2 py-1 rounded pointer"
                      onClick={() => handleDecrement(product?.id)}
                    >
                      -
                    </p>
                    <p className="m-0 ">{product?.count}</p>
                    <p
                      className="m-0 border p-0 px-2 py-1 rounded pointer"
                      onClick={() => handleIncrement(product?.id)}
                    >
                      +
                    </p>
                  </div>
                </div>

                <div className="d-flex">
                  <p>{product?.description}</p>
                  <p onClick={() => handleDeleteItem(product?.id)}>
                    <i className="fa-solid fa-trash text-danger pointer"></i>
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Price Summary */}
        {cartAllProduct?.length > 0 && (
          <div className="col-3">
            <div className="row">
              <div className="col-12 border">
                <div className="row">
                  <div className="col-12 bg-secondary">
                    <h6 className="m-0 py-3 text-light">PRICE DETAIL'S</h6>
                  </div>

                  {/* Total Items */}
                  <div className="col-12 d-flex justify-content-between py-2">
                    <p className="m-0">TOTAL ITEM'S</p>
                    <p className="m-0">{cartAllProduct?.length}</p>
                  </div>

                  {/* Total Amount */}
                  <div className="col-12 d-flex justify-content-between py-2">
                    <p className="m-0">TOTAL AMOUNT</p>
                    <p className="m-0">
                      {totalPrice.toLocaleString("en-IN", {
                        maximumFractionDigits: 1,
                        style: "currency",
                        currency: "INR",
                      })}
                    </p>
                  </div>

                  {/* Delivery Charges */}
                  <div className="col-12 d-flex justify-content-between py-2">
                    <p className="m-0">DELIVERY CHARGE'S</p>
                    <p className="m-0">
                      {/* ₹ {cartAllProduct?.length * 20} */}
                      <span className="text-success">Free</span>
                    </p>
                  </div>

                  {/* Checkout Button */}
                  <div className="col-12 my-3">
                    <button className="btn btn-success w-100" onClick={handleCheckout}>CHECKOUT</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty Cart Message */}
        {cartAllProduct.length === 0 && (
          <div className="col-12">
            <h1 className="text-center fs-3">No Products Available in Cart</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
