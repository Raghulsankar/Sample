import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function EditProduct() {
  const { id } = useParams(); // get id from URL
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");
  const [brand, setBrand] = useState("");

  // ✅ Fetch product by ID
  useEffect(() => {
    fetch(`https://6971d21f32c6bacb12c49d92.mockapi.io/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setPoster(data.poster);
        setPrice(data.price);
        setDetails(data.details);
        setBrand(data.brand);
      });
  }, [id]);

  // ✅ Update product
  const updateProduct = () => {
    const updatedProduct = {
      name,
      poster,
      price: Number(price),
      details,
      brand,
    };

    fetch(`https://6971d21f32c6bacb12c49d92.mockapi.io/products/${id}`, {
      method: "PUT", // or PATCH
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    }).then(() => navigate("/products"));
  };

  return (
    <div className="add-product-container">
      <h2>Edit Product</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={poster}
        onChange={(e) => setPoster(e.target.value)}
        placeholder="Image URL"
      />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <input
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        placeholder="Brand"
      />
      <textarea
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder="Details"
      />

      <button onClick={updateProduct}>Update Product</button>
    </div>
  );
}
