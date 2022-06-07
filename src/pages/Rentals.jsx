import React from "react";
import { useLocation } from "react-router-dom";

export default function Rentals() {
  const { state: searchFilters } = useLocation();
  return (
    <div>
      {searchFilters.guests} guests, in {searchFilters.location}, starting from{" "}
      {searchFilters.checkin}, ending in {searchFilters.checkout}{" "}
    </div>
  );
}
