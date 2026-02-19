// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export function AddProduct() {
//   const [name, setName] = useState("");
//   const [poster, setPoster] = useState("");
//   const [price, setPrice] = useState("");
//   const [details, setDetails] = useState("");
//   const [brand, setBrand] = useState("");
//   const [category, setCategory] = useState("");

//   const navigate = useNavigate();

//   const createProduct = () => {
//     const newProduct = {
//       name,
//       poster,
//       price: Number(price),
//       details,
//       brand,
//       category,
//     };

//     fetch(`https://6971d21f32c6bacb12c49d92.mockapi.io/products`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newProduct),
//     })
//       .then((res) => res.json())
//       .then(() => {
//         alert("Product Added Successfully ✅");
//         navigate("/products"); // go back to products page
//       })
//       .catch((err) => console.error("Error:", err));
//   };

//   return (
//     <div className="add-product-wrapper">
//     <div className="add-product-container">
//       <h2>Add New Product</h2>

//       <input
//         type="text"
//         placeholder="Product Name"
//         onChange={(e) => setName(e.target.value)}
//       />

//       <input
//         type="text"
//         placeholder="Poster URL"
//         onChange={(e) => setPoster(e.target.value)}
//       />

//       <input
//         type="number"
//         placeholder="Price"
//         onChange={(e) => setPrice(e.target.value)}
//       />

//       <input
//         type="text"
//         placeholder="Brand (heine, volk, zeiss...)"
//         onChange={(e) => setBrand(e.target.value)}
//       />

//       <input
//         type="text"
//         placeholder="Category (ido, lens, slitlamp...)"
//         onChange={(e) => setCategory(e.target.value)}
//       />

//       <textarea
//         placeholder="Product Details"
//         onChange={(e) => setDetails(e.target.value)}
//       ></textarea>

//       <button onClick={createProduct}>Add Product</button>
//     </div>
//     </div>
//   );
// }



import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export function AddProduct() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      price: "",
      details: "",
      brand: "",
      category: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Product name is required")
        .min(3, "Minimum 3 characters"),

      poster: Yup.string()
        .required("Poster URL is required")
        .url("Enter valid URL"),

      price: Yup.number()
        .required("Price is required")
        .positive("Price must be positive"),

      details: Yup.string()
        .required("Details are required")
        .min(10, "Minimum 10 characters"),

      brand: Yup.string().required("Brand is required"),

      category: Yup.string().required("Category is required"),
    }),

    onSubmit: (values) => {
      fetch(`https://6971d21f32c6bacb12c49d92.mockapi.io/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          price: Number(values.price),
        }),
      })
        .then((res) => res.json())
        .then(() => {
          alert("Product Added Successfully ✅");
          navigate("/products");
        })
        .catch((err) => console.error("Error:", err));
    },
  });

  return (
    <div className="add-product-wrapper">
      <div className="add-product-container">
        <h2>Add New Product</h2>

        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="error">{formik.errors.name}</p>
          )}

          <input
            type="text"
            name="poster"
            placeholder="Poster URL"
            value={formik.values.poster}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.poster && formik.errors.poster && (
            <p className="error">{formik.errors.poster}</p>
          )}

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.price && formik.errors.price && (
            <p className="error">{formik.errors.price}</p>
          )}

          <input
            type="text"
            name="brand"
            placeholder="Brand (heine, volk, zeiss...)"
            value={formik.values.brand}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.brand && formik.errors.brand && (
            <p className="error">{formik.errors.brand}</p>
          )}

          <input
            type="text"
            name="category"
            placeholder="Category (ido, lens, slitlamp...)"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.category && formik.errors.category && (
            <p className="error">{formik.errors.category}</p>
          )}

          <textarea
            name="details"
            placeholder="Product Details"
            value={formik.values.details}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.details && formik.errors.details && (
            <p className="error">{formik.errors.details}</p>
          )}

          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
}
