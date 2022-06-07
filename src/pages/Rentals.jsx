import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Rentals() {
  const { state: searchFilters } = useLocation();
  const period = 0;
  return (
    <>
      <Header
        version="light"
        page="rentals"
        location={searchFilters.location}
        checkin={searchFilters.checkin}
        checkout={searchFilters.checkout}
        guests={searchFilters.guests}
      />
    </>
  );
}
