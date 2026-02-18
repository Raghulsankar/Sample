import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import contactImg from "../assets/images/contact-us.jpg";
import Footer from "./Footer";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Minimum 3 characters")
        .required("Full Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
        .required("Phone number is required"),
      organization: Yup.string().required("Clinic/Hospital name is required"),
      message: Yup.string()
        .min(10, "Minimum 10 characters")
        .required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form Data:", values);
      alert("Your enquiry has been submitted successfully!");
      resetForm();
    },
  });

  return (
    <>
    <div className="contact-wrapper">
      {/* LEFT SIDE - IMAGE */}
      <div className="contact-image">
        <img src={contactImg} alt="Ophthalmic Equipment" />
      </div>
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Maria Enterprises</h1>
          <p>
            For bulk ophthalmic product orders, dealership enquiries, or product
            information, please fill out the form below.
          </p>
        </div>

        <form className="contact-form" onSubmit={formik.handleSubmit}>
          {/* Name */}
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" {...formik.getFieldProps("name")} />
            {formik.touched.name && formik.errors.name && (
              <p className="error">{formik.errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="error">{formik.errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              {...formik.getFieldProps("phone")}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="error">{formik.errors.phone}</p>
            )}
          </div>

          {/* Organization */}
          <div className="form-group">
            <label>Clinic / Hospital / Institution</label>
            <input
              type="text"
              name="organization"
              {...formik.getFieldProps("organization")}
            />
            {formik.touched.organization && formik.errors.organization && (
              <p className="error">{formik.errors.organization}</p>
            )}
          </div>

          {/* Message */}
          <div className="form-group">
            <label>Enquiry Details</label>
            <textarea
              rows="4"
              name="message"
              {...formik.getFieldProps("message")}
            />
            {formik.touched.message && formik.errors.message && (
              <p className="error">{formik.errors.message}</p>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;
