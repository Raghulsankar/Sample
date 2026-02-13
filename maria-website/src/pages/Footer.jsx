// import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import maria from "../assets/images/Group.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
            <img src={maria} alt="maria-logo" className="logo"/>
          {/* <h2 className="footer-logo">Maria Enterprises</h2> */}
          <p className="footer-desc">
           Trusted B2B Supplier of Ophthalmology Equipment & Surgical Instruments
          </p>

          <div className="social-icons">
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            <span><FaLinkedinIn /></span>
            <span><FaInstagram /></span>
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Brands</li>
            <li>Trusted By</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>Our Brands</h3>
          <ul>
            <li>Heine</li>
            <li>Keeler</li>
            <li>Zeies</li>
            <li>Topcon</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h3>Business Support</h3>
          <ul>
            <li>Bulk Orders</li>
            <li>Institutional Supply</li>
            <li>GST Billing</li>
            <li>Direct Brand Products</li>
          </ul>
        </div>



        {/* Column 5 */}
        <div className="footer-col">
          <h3>Contact Information</h3>
          <ul className="contact-info">
            <li><FaMapMarkerAlt size={35} /> No:40, Methra Sowjanyam Apts, 2nd West Street,Indira Nager, Sendurpuram Main Road, Kattupakkam,Ch-56.</li>
            <li><FaEnvelope size={20} /> atvheine27@yahoo.com, mariaophthal@gmail.com</li>
            <li><FaPhoneAlt /> (+91) 9841513040</li>
          </ul>
        </div>
    
      </div>
       <div className="footer-bottom">
        © 2026 Maria Enterprises | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;