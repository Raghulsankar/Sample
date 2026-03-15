import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  //   const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  //   useEffect(() => {
  //     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  //     setCartItems(storedCart);
  //   }, []);

  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQty = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQty = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const subtotal = cartItems.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your Cart is Empty 🛒</h2>
        <button className="cart-btn" onClick={() => navigate("/products")}>
          Go to Products
        </button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2 className="cart-title">Shopping Cart</h2>

        <button className="add-more-btn" onClick={() => navigate("/products")}>
          + Add More Products
        </button>
      </div>

      {cartItems.map((item) => (
        <div className="cart-card" key={item.id}>
          <img src={item.poster} alt={item.name} />

          <div className="cart-info">
            <h3>{item.name}</h3>
            <p>₹ {item.price.toLocaleString("en-IN")}</p>

            <div className="cart-qty">
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>

            <button className="remove-btn" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* <div className="cart-summary">
        <h3>Subtotal: ₹ {subtotal}</h3>
      </div> */}

      <div className="cart-summary">
        <h3>Order Summary</h3>

        {cartItems.map((item) => (
          <div className="summary-item" key={item.id}>
            <span>
              {item.name} x {item.quantity}
            </span>

            <span>
              ₹ {(item.price * item.quantity).toLocaleString("en-IN")}
            </span>
          </div>
        ))}

        <hr />

        <div className="summary-total">
          <strong>Subtotal</strong>
          <strong>₹ {subtotal.toLocaleString("en-IN")}</strong>
        </div>
      </div>

      <div className="cart-total">
        <h3>Total: ₹ {totalPrice.toLocaleString("en-IN")}</h3>
        {/* <button className="checkout-btn">Proceed to Checkout</button> */}
        <button className="checkout-btn" onClick={() => navigate("/buynow")}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
