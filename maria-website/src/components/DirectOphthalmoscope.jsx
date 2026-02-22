import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";

export function DirectOphthalmoscope({
  id,
  name,
  price,
  poster,
  details,
  onDelete,
}) {
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

        {/* <div className="card-buttons">
          <Link to={`/products/${id}`}>
            <button className="details-btn">View Product</button>
          </Link>

          <button className="delete-btn" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div> */}

        <div className="card-buttons">
          <Link to={`/products/${id}`} className="icon-link">
            <button className="icon-btn view-btn">
              <VisibilityIcon />
            </button>
          </Link>

          <button className="icon-btn delete-btn" onClick={() => onDelete(id)}>
            <DeleteIcon />
          </button>

          <Link to={`/product/edit/${id}`}>
            <button className="icon-btn edit-btn">
              <EditIcon />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

