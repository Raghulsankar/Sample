import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams(); // get id from URL
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

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
    <div className="product-details-container">
      <div className="product-card">
        <button className="back-btn" onClick={() => navigate("/products")}>
          ← Back to Products
        </button>

        <div className="product-image-section">
          <img
            src={product.poster}
            alt={product.name}
            className="product-image"
          />
        </div>

        <div className="product-info-section">
          <h2 className="product-title">{product.name}</h2>

          <h3 className="product-price">
            {product.price.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
          </h3>

          <p className="product-details-text">{product.details}</p>

          <div className="quantity-section">
            <p className="qty-label">Quantity:</p>

            <div className="quantity-box">
              <button onClick={decreaseQty} className="qty-btn">
                -
              </button>
              <span className="qty-number">{quantity}</span>
              <button onClick={increaseQty} className="qty-btn">
                +
              </button>
            </div>
          </div>

          <div className="product-buttons">
            <button className="add-cart-btn">Add to Cart</button>
            <button className="buy-now-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;