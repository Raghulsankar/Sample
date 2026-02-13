export function DirectOphthalmoscope({ name, price, poster, details }) {
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
        <button className="details-btn">Add to Cart</button>
      </div>
    </div>
  );
}
