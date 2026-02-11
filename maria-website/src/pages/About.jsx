import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import VerifiedIcon from "@mui/icons-material/Verified";
import PublicIcon from "@mui/icons-material/Public";
import aboutImg from "../assets/images/about.png";
import { Link } from "react-router-dom";

export function About() {
  return (
    <div className="about-container">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-text">
          <h1>About Our Ophthalmoscope Solutions</h1>
          <p>
            Delivering precision eye-care instruments trusted by medical
            professionals worldwide.
          </p>
        </div>
        <img src={aboutImg} alt="about img" className="about-hero-image" />
      </section>

      {/* ABOUT CONTENT */}
      <section className="about-content">
        <h2>Who We Are</h2>
        <p>
          We are a specialized medical technology company focused on
          manufacturing and supplying high-quality ophthalmoscopes for
          hospitals, clinics, and eye-care professionals. Our products are
          designed with accuracy, durability, and patient safety in mind.
        </p>
        <Link to="/products">
          <button className="about-cta">Explore Products</button>
        </Link>
      </section>

      {/* FEATURES */}
      <section className="about-features">
        <div className="feature-card">
          <VisibilityIcon className="feature-icon" />
          <h3>Precision Optics</h3>
          <p>High-clarity lenses for accurate retinal examination.</p>
        </div>

        <div className="feature-card">
          <MedicalServicesIcon className="feature-icon" />
          <h3>Medical Grade</h3>
          <p>Built to meet international healthcare standards.</p>
        </div>

        <div className="feature-card">
          <VerifiedIcon className="feature-icon" />
          <h3>Certified Quality</h3>
          <p>Trusted and tested by eye-care professionals.</p>
        </div>

        <div className="feature-card">
          <PublicIcon className="feature-icon" />
          <h3>Global Reach</h3>
          <p>Serving hospitals and clinics across multiple countries.</p>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To empower ophthalmologists with reliable diagnostic tools that
          improve patient outcomes and support early detection of eye
          conditions.
        </p>
        <p className="trust-text">
          ✔ ISO Certified • ✔ Trusted by 500+ Clinics
        </p>
      </section>
    </div>
  );
}
