// import React, { useEffect, useState } from "react";
// import "./Orders.css";

// function Orders() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
//     setOrders(storedOrders);
//   }, []);

//   return (
//     <div className="orders-page">
//       <h2>My Orders</h2>

//       {orders.length === 0 ? (
//         <p className="no-orders">You have not placed any orders yet.</p>
//       ) : (
//         orders.map((order) => (
//           <div className="order-card" key={order.id}>
//             <div className="order-header">
//               <p><strong>Order ID:</strong> {order.id}</p>
//               <p><strong>Date:</strong> {order.date}</p>
//             </div>

//             <div className="order-items">
//               {order.items.map((item, index) => (
//                 <div key={index} className="order-item">
//                   <img src={item.image} alt={item.name} />
//                   <div>
//                     <h4>{item.name}</h4>
//                     <p>Price: ₹{item.price}</p>
//                     <p>Qty: {item.qty}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="order-footer">
//               <p><strong>Total:</strong> ₹{order.total}</p>
//               <p><strong>Address:</strong> {order.address.name}, {order.address.phone}</p>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Orders;

import React, { useState } from "react";
import "./Orders.css";

function Orders() {
  //   const [orders] = useState(() => {
  //     const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
  //     return storedOrders;
  //   });
  const [orders, setOrders] = useState(() => {
    return JSON.parse(localStorage.getItem("orders")) || [];
  });

  //   const cancelOrder = (orderId) => {
  //     const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];

  //     const updatedOrders = storedOrders.filter((order) => order.id !== orderId);

  //     localStorage.setItem("orders", JSON.stringify(updatedOrders));

  //     setOrders(updatedOrders);
  //   };

  const cancelOrder = (orderId) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this order?",
    );

    if (!confirmCancel) return;

    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const updatedOrders = storedOrders.filter((order) => order.id !== orderId);

    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    setOrders(updatedOrders);

    alert("Order Cancelled Successfully ❌");
  };

  return (
    <div className="orders-page">
      <h2 className="order">My Orders</h2>

      {orders.length === 0 ? (
        <p className="no-orders">You have not placed any orders yet.</p>
      ) : (
        orders.map((order) => (
          <div className="order-card" key={order.id}>
            <div className="order-header">
              <p>
                <strong>Order ID:</strong> {order.id}
              </p>
              <p>
                <strong>Date:</strong> {order.date}
              </p>
            </div>

            <div className="order-items">
              {order.items.map((item, index) => (
                <div key={index} className="order-item">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>Price: ₹{item.price}</p>
                    <p>Qty: {item.qty}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-footer">
              <p>
                <strong>Total:</strong> ₹{order.total}
              </p>
              <p>
                <strong>Address:</strong> {order.address.name},{" "}
                {order.address.phone}
              </p>
              <button
                className="cancel-btn"
                onClick={() => cancelOrder(order.id)}
              >
                Cancel Order
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
