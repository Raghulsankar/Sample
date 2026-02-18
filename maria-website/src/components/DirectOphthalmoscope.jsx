import { Link } from "react-router-dom";
export function DirectOphthalmoscope({ id,name, price, poster, details }) {
  return (
    <div className="card">
      <img src={poster} alt={name} className="card-img" />

      <div className="card-body">
        <h3>{name}</h3>

        <p className="price">
          {price.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </p>

        <p className="details">{details}</p>
         <Link to={`/products/${id}`}>
          <button className="details-btn">View Product</button>
        </Link>
      </div>
    </div>
  );
}
