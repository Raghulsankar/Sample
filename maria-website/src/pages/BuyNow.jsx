// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import "./BuyNow.css";

// function BuyNow() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [qty, setQty] = useState(1);

//   const [address, setAddress] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     city: "",
//     pincode: ""
//   });

//   useEffect(() => {
//     fetch(`https://6971d21f32c6bacb12c49d92.mockapi.io/products/${id}`)
//       .then((res) => res.json())
//       .then((data) => setProduct(data));
//   }, [id]);

//   const handleChange = (e) => {
//     setAddress({ ...address, [e.target.name]: e.target.value });
//   };

//   const placeOrder = () => {
//     const order = {
//       product,
//       qty,
//       address,
//       total: product.price * qty
//     };

//     console.log("Order Placed:", order);
//     alert("Order Placed Successfully 🎉");
//   };

//   if (!product) return <h2>Loading...</h2>;

//   return (
//     <div className="buy-container">

//       <div className="product-section">
//         <img src={product.poster} alt={product.product_name} />
//         <h2>{product.product_name}</h2>
//         <p>Brand: {product.brand}</p>
//         <p>Price: ₹{product.price}</p>

//         <div className="qty">
//           <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
//           <span>{qty}</span>
//           <button onClick={() => setQty(qty + 1)}>+</button>
//         </div>
//       </div>

//       <div className="address-section">
//         <h2>Shipping Address</h2>

//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone Number"
//           onChange={handleChange}
//         />

//         <textarea
//           name="address"
//           placeholder="Full Address"
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="city"
//           placeholder="City"
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="pincode"
//           placeholder="Pincode"
//           onChange={handleChange}
//         />

//         <div className="summary">
//           <h3>Total : ₹{product.price * qty}</h3>
//         </div>

//         <button className="buy-btn" onClick={placeOrder}>
//           Place Order
//         </button>
//       </div>

//     </div>
//   );
// }

// export default BuyNow;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BuyNow.css";

function BuyNow() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);

  const formatPrice = (price) => {
  if (!price) return "0.00";

  return Number(price).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: ""
  });

  useEffect(() => {
    fetch(`https://6971d21f32c6bacb12c49d92.mockapi.io/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    const order = {
      product,
      qty,
      address,
      total: product.price * qty
    };

    console.log(order);
    alert("Order Placed Successfully 🎉");
  };

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="buy-wrapper">

      {/* LEFT SIDE PRODUCT */}
      <div className="buy-product">
        <img src={product.poster} alt={product.product_name} />

        <div className="product-info">
          <h2>{product.product_name}</h2>
          <p className="brand">Brand : {product.brand}</p>
          <p className="price">₹{formatPrice(product.price)}</p>

          <div className="qty-box">
            <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
            <span className="qty">{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>
        </div>
      </div>


      {/* RIGHT SIDE ADDRESS */}
      <div className="buy-address">

        <h2 className="shipping-details">Shipping Details</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />

        <textarea
          name="address"
          placeholder="Full Address"
          onChange={handleChange}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          onChange={handleChange}
        />

        <div className="order-summary">
          <h3>Total : ₹{formatPrice(product.price * qty)}</h3>
        </div>

        <button className="order-btn" onClick={placeOrder}>
          Place Order
        </button>

      </div>

    </div>
  );
}

export default BuyNow;