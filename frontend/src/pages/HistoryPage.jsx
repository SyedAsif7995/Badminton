import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getHistory } from "../api";
import './HistoryPage.css';
export default function HistoryPage() {
  const [history, setHistory] = useState([]);
const navigate=useNavigate();
  useEffect(() => {
    getHistory().then((data) => setHistory(data));
  }, []);

  return (
    <div>
      <h2>Your Booking History</h2>

      {history.map((b) => (
        <div key={b.id}>
          <p>
            Court ID: {b.courtId} | Date: {b.date} | Price: ₹{b.totalPrice}
          </p>
          <hr />
        </div>
      ))}
      <button className="back-btn" onClick={()=>navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}
