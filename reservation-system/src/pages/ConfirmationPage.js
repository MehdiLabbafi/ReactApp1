import React from "react";
import "./ConfirmationPage.css";

function ConfirmationPage() {
  return React.createElement(
    "div",
    { className: "confirmation-page" },
    React.createElement("h3", null, "Reservation Confirmed!"),
    React.createElement("p", null, "Thank you for booking with us. Enjoy your visit!")
  );
}

export default ConfirmationPage;