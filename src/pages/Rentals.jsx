import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Rentals() {
  const { state: searchFilters } = useLocation();
  return (
    <>
      <Header version="light" />
    </>
  );
}
