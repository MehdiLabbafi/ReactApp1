import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return React.createElement(
    "div",
    { className: "homepage" },
    React.createElement("h1", null, "Welcome to Conservation Area Reservation System"),
    React.createElement("p", null, "Select a regional conservation area and book your time slot today!"),
    React.createElement(
      Link,
      { to: "/reservation", className: "homepage-link" },
      "Go to Reservation Page"
    )
  );
}

export default HomePage;