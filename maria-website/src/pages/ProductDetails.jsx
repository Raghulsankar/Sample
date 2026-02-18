import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams(); // get id from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://6971d21f32c6bacb12c49d92.mockapi.io/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  //   if (!product) return <h2>Loading...</h2>;

  if (!product) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <h2 className="loading-msg">Loading products...</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.poster} alt={product.name} width="200" />
      <p>{product.description}</p>
      <h3>₹ {product.price}</h3>
      <h4>{product.details}</h4>
    </div>
  );
}

export default ProductDetails;
