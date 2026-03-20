import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";
import { useNavigate } from "react-router-dom";
import { EditProduct } from "./EditProduct";
export function Dashboard() {
  const [products, setProducts] = useState([]);
  const COLORS = ["#38bdf8", "#22c55e", "#f97316", "#e11d48", "#a855f7"];
  const navigate = useNavigate();
  const [totalEnquiries, setTotalEnquiries] = useState(0);
  //   const chartData = [
  //     { name: "Direct", value: 12 },
  //     { name: "Indirect", value: 8 },
  //     { name: "LED", value: 5 },
  //     { name: "Pocket", value: 7 },
  //   ];
  //   <div style={{ marginTop: "40px" }}>
  //     <h2>Product Categories Overview</h2>

  //     <BarChart width={500} height={300} data={chartData}>
  //       <XAxis dataKey="name" stroke="#fff" />
  //       <YAxis stroke="#fff" />
  //       <Tooltip />
  //       <Bar dataKey="value" fill="#38bdf8" radius={[8, 8, 0, 0]} />
  //     </BarChart>
  //   </div>;

  //  const [totalOrders, setTotalOrders] = useState(0);

  // useEffect(() => {
  //   const orders = JSON.parse(localStorage.getItem("orders")) || [];
  //   setTotalOrders(orders.length);
  // }, []);
  //   const [totalOrders, setTotalOrders] = useState(() => {
  //   const orders = JSON.parse(localStorage.getItem("orders")) || [];
  //   return orders.length;
  // });

  useEffect(() => {
  const updateEnquiryCount = () => {
    const enquiries = JSON.parse(localStorage.getItem("enquiries")) || [];
    setTotalEnquiries(enquiries.length);
  };

  updateEnquiryCount();

  window.addEventListener("storage", updateEnquiryCount);

  return () => {
    window.removeEventListener("storage", updateEnquiryCount);
  };
}, []);

  const [totalOrders] = useState(() => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    return orders.length;
  });

  const deleteProduct = (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    fetch(`https://6971d21f32c6bacb12c49d92.mockapi.io/products/${id}`, {
      method: "DELETE",
    }).then(() => {
      setProducts(products.filter((product) => product.id !== id));
    });
  };

  const thStyle = {
    padding: "12px",
    borderBottom: "1px solid #334155",
  };

  const tdStyle = {
    padding: "10px",
    borderBottom: "1px solid #334155",
  };

  const editBtn = {
    padding: "6px 12px",
    marginRight: "8px",
    background: "#22c55e",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    color: "#fff",
  };

  const deleteBtn = {
    padding: "6px 12px",
    background: "#e11d48",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    color: "#fff",
  };

  const brandData = Object.values(
    products.reduce((acc, product) => {
      const brand = product.brand;

      if (!acc[brand]) {
        acc[brand] = { name: brand, product: 0 };
      }

      acc[brand].product += 1;

      return acc;
    }, {}),
  );

  const revenueData = Object.values(
    products.reduce((acc, product) => {
      const brand = product.brand;
      const price = Number(product.price);

      if (!acc[brand]) {
        acc[brand] = { name: brand, value: 0 };
      }

      acc[brand].value += price;

      return acc;
    }, {}),
  );

  const totalRevenue = products.reduce((acc, product) => {
    return acc + (Number(product.price) || 0);
  }, 0);

  useEffect(() => {
    fetch(`https://6971d21f32c6bacb12c49d92.mockapi.io/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>

      <div className="dashboard-cards">
        <div className="card-box">
          <h2>{products.length}</h2>
          <p>Total Products</p>
        </div>

        {/* <div className="card-box">
          <h2>₹ 1,25,000</h2>
          <p>Total Revenue</p>
        </div> */}

        <div className="card-box">
          <h2>₹ {totalRevenue.toLocaleString("en-IN")}</h2>
          <p>Total Invesment of products</p>
        </div>

        <div className="card-box">
          <h2>{totalOrders}</h2>
          <p>Total Orders</p>
        </div>

        <div className="card-box">
          <h2>{totalEnquiries}</h2>
          <p>Total Enquireys</p>
        </div>
      </div>

      <div className="chart-section" style={{ marginTop: "80px" }}>
        <div className="charts-row">
          {/* Bar Chart */}
          <div className="chart-box">
            <h2 style={{ marginBottom: "40px" }}>
              Product Categories Overview
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={brandData}>
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Bar dataKey="product" fill="#38bdf8" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="chart-box">
            <h2>Invesment Per Brand</h2>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={revenueData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={120}
                >
                  {revenueData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip
                  formatter={(value) =>
                    `₹ ${Number(value).toLocaleString("en-IN")}`
                  }
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "80px" }}>
        <div className="product-header">
          <h2 style={{ marginBottom: "20px" }}>Product Details</h2>

          <button
            className="add-product-btn"
            onClick={() => navigate("/add-product")}
          >
            <FaPlus /> Add Product
          </button>
        </div>

        <table
          className="custom-table"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "#111",
            color: "#fff",
          }}
        >
          <thead>
            <tr style={{ background: "#1e293b" }}>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Image</th>
              <th style={thStyle}>Price</th>
              <th style={thStyle}>Brand</th>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id} style={{ textAlign: "center" }}>
                <td style={tdStyle}>{product.name}</td>

                <td style={tdStyle}>
                  <img
                    src={product.poster}
                    alt={product.name}
                    width="50"
                    style={{ borderRadius: "6px" }}
                  />
                </td>

                <td style={tdStyle}>
                  ₹ {Number(product.price).toLocaleString("en-IN")}
                </td>

                <td style={tdStyle}>{product.brand}</td>

                <td style={tdStyle}>{product.category}</td>

                <td style={tdStyle}>
                  <button
                    onClick={() => navigate(`/edit/${product.id}`)}
                    style={editBtn}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteProduct(product.id)}
                    style={deleteBtn}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
