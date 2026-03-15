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

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import "./BuyNow.css";

// function BuyNow() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [qty, setQty] = useState(1);

//   const formatPrice = (price) => {
//     if (!price) return "0.00";

//     return Number(price).toLocaleString("en-IN", {
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     });
//   };

//   const [address, setAddress] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     city: "",
//     pincode: "",
//   });

//     useEffect(() => {
//       fetch(`https://6971d21f32c6bacb12c49d92.mockapi.io/products/${id}`)
//         .then((res) => res.json())
//         .then((data) => setProduct(data));
//     }, [id]);

//   const handleChange = (e) => {
//     setAddress({ ...address, [e.target.name]: e.target.value });
//   };

//   const placeOrder = () => {
//     const order = {
//       product,
//       qty,
//       address,
//       total: product.price * qty,
//     };

//     console.log(order);
//     alert("Order Placed Successfully 🎉");
//   };

//   if (!product) return <h2>Loading...</h2>;

//   return (
//     <div className="buy-wrapper">
//       {/* LEFT SIDE PRODUCT */}
//       <div className="buy-product">
//         <img src={product.poster} alt={product.product_name} />

//         <div className="product-info">
//           <h2>{product.product_name}</h2>
//           <p className="brand">Brand : {product.brand}</p>
//           <p className="price">₹{formatPrice(product.price)}</p>

//           <div className="qty-box">
//             <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
//             <span className="qty">{qty}</span>
//             <button onClick={() => setQty(qty + 1)}>+</button>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SIDE ADDRESS */}
//       <div className="buy-address">
//         <h2 className="shipping-details">Shipping Details</h2>

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

//         <div className="order-summary">
//           <h3>Total : ₹{formatPrice(product.price * qty)}</h3>
//         </div>

//         <button className="order-btn" onClick={placeOrder}>
//           Place Order
//         </button>
//       </div>
//     </div>
//   );
// }

// export default BuyNow;


// import React, { useState, useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import "./BuyNow.css";

// function BuyNow() {
//   const { id } = useParams();
//   const location = useLocation();

//   const [items, setItems] = useState([]);

//   const [address, setAddress] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     city: "",
//     pincode: "",
//   });

//   useEffect(() => {

//   if (id) {
//     // Buy Now case
//     fetch(`https://6971d21f32c6bacb12c49d92.mockapi.io/products/${id}`)
//       .then((res) => res.json())
//       .then((data) =>
//         setItems([
//           {
//             ...data,
//             quantity: 1,
//           },
//         ])
//       );

//   } else {
//     // Cart Checkout case
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setItems(storedCart);
//   }

// }, [id]);

//   const formatPrice = (price) => {
//     return Number(price || 0).toLocaleString("en-IN", {
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     });
//   };

//   useEffect(() => {

//     // Case 1: Buy Now from product page
//     if (location.state?.product) {
//       const product = location.state.product;

//       setItems([
//         {
//           ...product,
//           quantity: 1,
//         },
//       ]);

//       return;
//     }

//     // Case 2: Checkout from Cart
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

//     if (storedCart.length > 0) {
//       setItems(storedCart);
//       return;
//     }

//     // Case 3: Direct product link using id
//     if (id) {
//       fetch(`https://6971d21f32c6bacb12c49d92.mockapi.io/products/${id}`)
//         .then((res) => res.json())
//         .then((data) =>
//           setItems([
//             {
//               ...data,
//               quantity: 1,
//             },
//           ])
//         );
//     }

//   }, [id, location.state]);

//   const handleChange = (e) => {
//     setAddress({ ...address, [e.target.name]: e.target.value });
//   };

//   const increaseQty = (index) => {
//     const updated = [...items];
//     updated[index].quantity += 1;
//     setItems(updated);
//   };

//   const decreaseQty = (index) => {
//     const updated = [...items];
//     if (updated[index].quantity > 1) {
//       updated[index].quantity -= 1;
//       setItems(updated);
//     }
//   };

//   const totalPrice = items.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   const placeOrder = () => {
//     const order = {
//       items,
//       address,
//       total: totalPrice,
//     };

//     console.log("Order Placed:", order);

//     alert("Order Placed Successfully 🎉");

//     localStorage.removeItem("cart");
//   };

//   if (items.length === 0) {
//     return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
//   }

//   return (
//     <div className="buy-wrapper">

//       {/* LEFT SIDE PRODUCTS */}
//       <div className="buy-product">

//         <h2 className="order-name">Order Items</h2>

//         {items.map((item, index) => (
//           <div className="buy-item" key={item.id || index}>

//             <img src={item.poster} alt={item.product_name || item.name} />

//             <div className="product-info">
//               <h3>{item.product_name || item.name}</h3>

//               <p className="brand">Brand : {item.brand}</p>

//               <p className="price">₹{formatPrice(item.price)}</p>

//               <div className="qty-box">
//                 <button onClick={() => decreaseQty(index)}>-</button>

//                 <span className="qty">{item.quantity}</span>

//                 <button onClick={() => increaseQty(index)}>+</button>
//               </div>

//               <p>
//                 Subtotal : ₹
//                 {formatPrice(item.price * item.quantity)}
//               </p>
//             </div>

//           </div>
//         ))}

//       </div>


//       {/* RIGHT SIDE ADDRESS */}
//       <div className="buy-address">

//         <h2 className="shipping-details">Shipping Details</h2>

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

//         <div className="order-summary">
//           <h3>Total : ₹{formatPrice(totalPrice)}</h3>
//         </div>

//         <button className="order-btn" onClick={placeOrder}>
//           Place Order
//         </button>

//       </div>

//     </div>
//   );
// }

// export default BuyNow;

import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./BuyNow.css";

function BuyNow() {
  const { id } = useParams();
  const location = useLocation();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const formatPrice = (price) => {
    return Number(price || 0).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  useEffect(() => {
    const loadData = async () => {

      // 1️⃣ Buy Now from product page
      if (location.state?.product) {
        const product = location.state.product;

        setItems([
          {
            ...product,
            quantity: 1,
          },
        ]);

        setLoading(false);
        return;
      }

      // 2️⃣ Cart Checkout
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

      if (storedCart.length > 0) {
        setItems(storedCart);
        setLoading(false);
        return;
      }

      // 3️⃣ Direct URL with ID
      if (id) {
        const res = await fetch(
          `https://6971d21f32c6bacb12c49d92.mockapi.io/products/${id}`
        );

        const data = await res.json();

        setItems([
          {
            ...data,
            quantity: 1,
          },
        ]);

        setLoading(false);
      }
    };

    loadData();
  }, [id, location.state]);

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const increaseQty = (index) => {
    const updated = [...items];
    updated[index].quantity += 1;
    setItems(updated);
  };

  const decreaseQty = (index) => {
    const updated = [...items];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
      setItems(updated);
    }
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    const order = {
      items,
      address,
      total: totalPrice,
    };

    console.log("Order Placed:", order);

    alert("Order Placed Successfully 🎉");

    localStorage.removeItem("cart");
  };

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div className="buy-wrapper">

      {/* LEFT SIDE PRODUCTS */}
      <div className="buy-product">
        <h2>Order Items</h2>

        {items.map((item, index) => (
          <div className="buy-item" key={item.id || index}>

            <img src={item.poster} alt={item.product_name || item.name} />

            <div className="product-info">
              <h3>{item.product_name || item.name}</h3>

              <p className="brand">Brand : {item.brand}</p>

              <p className="price">₹{formatPrice(item.price)}</p>

              <div className="qty-box">
                <button onClick={() => decreaseQty(index)}>-</button>
                <span className="qty">{item.quantity}</span>
                <button onClick={() => increaseQty(index)}>+</button>
              </div>

              <p>
                Subtotal : ₹{formatPrice(item.price * item.quantity)}
              </p>
            </div>

          </div>
        ))}
      </div>

      {/* RIGHT SIDE ADDRESS */}
      <div className="buy-address">

        <h2 className="shipping-details">Shipping Details</h2>

        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} />

        <textarea
          name="address"
          placeholder="Full Address"
          onChange={handleChange}
        />

        <input type="text" name="city" placeholder="City" onChange={handleChange} />
        <input type="text" name="pincode" placeholder="Pincode" onChange={handleChange} />

        <div className="order-summary">
          <h3>Total : ₹{formatPrice(totalPrice)}</h3>
        </div>

        <button className="order-btn" onClick={placeOrder}>
          Place Order
        </button>

      </div>
    </div>
  );
}

export default BuyNow;