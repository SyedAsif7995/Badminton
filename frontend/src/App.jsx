import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import HistoryPage from "./pages/HistoryPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
