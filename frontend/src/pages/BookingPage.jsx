import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    createBooking,
    getAvailability,
    previewPrice,
} from "../api";
import './BookingPage.css';

import CoachSelector from "../components/CoachSelector";
import CourtSelector from "../components/CourtSelector";
import EquipmentSelector from "../components/EquipmentSelector";
import PricePreview from "../components/PricePreview";

export default function BookingPage() {
  const [courts, setCourts] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [coaches, setCoaches] = useState([]);
const navigate=useNavigate();
  const [courtId, setCourtId] = useState("");
  const [equipIds, setEquipIds] = useState([]);
  const [coachId, setCoachId] = useState("");

  const [price, setPrice] = useState(0);

  useEffect(() => {
    getAvailability().then((data) => {
      setCourts(data.courts);
      setEquipment(data.equipment);
      setCoaches(data.coaches);
    });
  }, []);

  useEffect(() => {
    if (!courtId) return;

    const court = courts.find((c) => c.id == courtId);

    previewPrice({
      courtType: court.type,
      isWeekend: false,
      isPeak: false,
    }).then((res) => setPrice(res.price));
  }, [courtId]);

  function handleBooking() {
    createBooking({
      date: "2025-01-01",
      startTime: "17:00",
      duration: 60,
      courtId,
      equipment: equipIds,
      coachId: coachId || null,
      totalPrice: price,
    }).then(() => alert("Booking successful!"));
  }
return (
  <div className="booking-container">
    <CourtSelector courts={courts} value={courtId} onChange={setCourtId} />
    <EquipmentSelector equipment={equipment} onChange={setEquipIds} />
    <CoachSelector coaches={coaches} value={coachId} onChange={setCoachId} />

    <PricePreview price={price} />

    <button onClick={handleBooking} disabled={!courtId}>
      Confirm Booking
    </button>
    <button className="back-btn" onClick={()=>navigate("/")}>Back to Home</button>
  </div>
);

}
