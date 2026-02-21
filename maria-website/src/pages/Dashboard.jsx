import { useEffect, useState } from "react";
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

export function Dashboard() {
  const [products, setProducts] = useState([]);
  const COLORS = ["#38bdf8", "#22c55e", "#f97316", "#e11d48", "#a855f7"];
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
    fetch("https://6971d21f32c6bacb12c49d92.mockapi.io/products")
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
          <p>Total Revenue</p>
        </div>

        <div className="card-box">
          <h2>120</h2>
          <p>Total Orders</p>
        </div>

        <div className="card-box">
          <h2>45</h2>
          <p>Total Users</p>
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
            <h2>Revenue Per Brand</h2>

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
    </div>
  );
}
