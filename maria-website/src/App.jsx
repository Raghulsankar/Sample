import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import "./index.css";
import { About } from "./pages/About";
import BrandsPage from "./pages/Brands";
import Testimonials from "./pages/Testimonials";
// import OurClients from "./pages/OurClients";
import Contact from "./pages/Contact";
import maria from "./assets/images/Group.svg";
import ProductDetails from "./pages/ProductDetails";
import { AddProduct } from "./pages/AddProduct";
import { EditProduct } from "./pages/EditProduct";
import { Dashboard } from "./pages/Dashboard";
export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/">
          {/* <h2>Ophthalmic Store</h2> */}
          <img src={maria} alt="maria-logo" className="logo" />
        </Link>

        <div>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/brand">Brands</Link>
          {/* <Link to="/clients">clients</Link> */}
          <Link to="/Trusted-By">Trusted By</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/add-product">Add product</Link>
          <Link to="/dashboard">Dashboard</Link>

          {/* <Link to={`/products/${Products.id}`}>View Details</Link> */}
        </div>
        {/* <button className="primary-contact-btn">Contact Us</button> */}
        <button className="contact-btn">Get in Touch</button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/brand" element={<BrandsPage />} />
        <Route path="/Trusted-By" element={<Testimonials />} />
        {/* <Route path="/clients" element={<OurClients />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/product/edit/:id" element={<EditProduct />} />
        <Route path="/dashboard" element={<Dashboard />} />

        
      </Routes>
    </BrowserRouter>
  );
}
