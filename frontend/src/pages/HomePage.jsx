import { useNavigate } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="hero">
        <h1 className="title">🏸 Welcome to Badminton Booking</h1>
        <p className="subtitle">
          Book courts, rent equipment, and train with professional coaches — all in one place.
        </p>
            <div className="quote-container">
  <p className="quote-text">
    “The shuttle may fall, but the champion rises again.” 🏸
  </p>
</div>

        <div className="button-group">
          <button className="hero-btn" onClick={() => navigate("/booking")}>
            Book Court
          </button>

          <button className="hero-btn secondary" onClick={() => navigate("/history")}>
            Booking History
          </button>
        </div>
      </div>
    </div>
  );
}
