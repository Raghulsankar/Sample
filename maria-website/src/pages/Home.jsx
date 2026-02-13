import { Link } from "react-router-dom";
import Footer from "./Footer";

export function Home() {
  return (
    <>
    <div className="home">
      {/* Blur layer */}
      <div className="home-overlay"></div>

      {/* Content stays sharp */}
      <div className="home-content">
        <h1>Welcome to Ophthalmic Store 👁️</h1>
        <p>
          We provide premium ophthalmology instruments from HEINE, ZEISS, WELCH
          ALLYN, VOLK, and KEELER.
        </p>

        <Link to="/products">
          <button className="primary-btn">Shop Now</button>
        </Link>
      </div>
    </div>
    <Footer />
    </>
  );
}
