import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ReservationPage.css";

function ReservationPage() {
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [reservations, setReservations] = useState([]);
  const [isTimeLocked, setIsTimeLocked] = useState(false);

  const areas = ["Forest Reserve", "Wetland Sanctuary", "Mountain Park", "Desert Reserve"];
  const timeSlots = ["9:00 AM - 12:00 PM", "12:00 PM - 3:00 PM", "3:00 PM - 6:00 PM"];

  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);
    setIsTimeLocked(false); // اجازه تغییر بازه زمانی در ابتدا
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
    setIsTimeLocked(true); // قفل کردن بازه زمانی بعد از انتخاب
  };

  const handleSubmit = () => {
    if (selectedArea && selectedTime) {
      const isAlreadyReserved = reservations.some(
        (reservation) => reservation.area === selectedArea && reservation.time === selectedTime
      );

      if (isAlreadyReserved) {
        alert(`The time slot ${selectedTime} for ${selectedArea} is already reserved!`);
      } else {
        setReservations((prevReservations) => [
          ...prevReservations,
          { area: selectedArea, time: selectedTime },
        ]);
        setSelectedArea("");
        setSelectedTime("");
        setIsTimeLocked(false);
      }
    } else {
      alert("Please select both a conservation area and a time slot.");
    }
  };

  return (
    <div className="reservation-page">
      <div className="top-navigation">
        <Link to="/" className="home-button">Home</Link>
      </div>
      <h2>Book Your Visit</h2>
      <p>Choose a conservation area and an available time slot.</p>
      <div className="form-group">
        <label htmlFor="area-select">Select Conservation Area:</label>
        <select
          id="area-select"
          value={selectedArea}
          onChange={handleAreaChange}
        >
          <option value="">-- Select an Area --</option>
          {areas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="time-select">Select Time Slot:</label>
        <select
          id="time-select"
          value={selectedTime}
          onChange={handleTimeChange}
          disabled={isTimeLocked}
        >
          <option value="">-- Select a Time Slot --</option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        Confirm Reservation
      </button>

      <h3>Your Reservations</h3>
      <table className="reservation-table">
        <thead>
          <tr>
            <th>Conservation Area</th>
            <th>Time Slot</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => (
            <tr key={index}>
              <td>{reservation.area}</td>
              <td>{reservation.time}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer className="footer">
        Made by <strong>Mehdi Labbafi</strong>
      </footer>
    </div>
  );
}

export default ReservationPage;