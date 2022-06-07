import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon, ConnectButton, DatePicker, Select, Input } from "web3uikit";

const SearchBarWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 800px;
  font-size: 12px;
  display: flex;
  justify-content: space-around;
  padding-left: 30px;
  align-items: center;
  padding: 0 1rem;
  height: 65px;
  border-radius: 100px;
  background-color: #ffffff;
  box-shadow: 0 0 10px #ccc;
`;
const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 65px;
  font-size: 12px;
  width: 170px;
`;
const StyledSelect = styled(Select)`
  width: 170px !important;

  > div:nth-child(1) {
    border: 0px !important;
    border-radius: 0px !important;
    padding-left: 0px !important;
    padding-top: 3px !important;
    padding-bottom: 3px !important;
    height: 30px !important;
    font-size: 14px !important;
  }
  > div:nth-child(2) {
  }
`;
const StyledDatePicker = styled(DatePicker)`
  outline: 0px !important;
  padding-left: 0px !important;
  padding-top: 3px !important;
  padding-bottom: 3px !important;
  width: 100%;
  input {
    font-size: 13px !important;
    height: 26px !important;
  }
  div {
    height: 100%;
  }
  span {
  }
`;
const StyledInput = styled(Input)`
  font-size: 13px !important;
  height: 26px !important;
`;
const VerticalLine = styled.div`
  position: relative;
  top: 15;
  height: 40%;
  background-color: grey;
  width: 1.5px;
  position: relative;
  top: 15;
  height: 40%;
  background-color: grey;
  width: 1.5px;
`;
const SearchIconContainer = styled.div`
  background-color: #eb4e5f;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px #ccc;
  :hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px #ccc;
  }
`;
export default function SearchBar(props) {
  const [guests, setGuests] = useState(2);
  const [location, setLocation] = useState("New York");
  const [checkin, setCheckin] = useState(new Date().toDateString());
  const [checkout, setCheckout] = useState(new Date().toDateString());
  // console.log(
  //   `${guests} guests, in ${location}, starting ${checkin}, ending ${checkout}`
  // );
  return (
    <SearchBarWrap>
      <Inputs>
        Location
        <StyledSelect
          onChange={(e) => setLocation(e.label)}
          className="locationSelectMoralis"
          defaultOptionIndex={0}
          options={[
            {
              id: "ny",
              label: "New York",
            },
            {
              id: "lon",
              label: "London",
            },
            {
              id: "val",
              label: "Valiug",
            },
          ]}
        />
      </Inputs>
      <VerticalLine />
      <Inputs>
        Check-in
        <StyledDatePicker onChange={(e) => setCheckin(e.date.toDateString())} />
      </Inputs>
      <VerticalLine></VerticalLine>
      <Inputs>
        Check-out
        <StyledDatePicker
          onChange={(e) => setCheckout(e.date.toDateString())}
        />
      </Inputs>
      <VerticalLine />
      <Inputs>
        Guests
        <StyledInput
          className="asdasdzaS"
          name="guestsInput"
          value={2}
          type="number"
          onBlur={function noRefCheck() {}}
          onChange={(e) => setGuests(e.target.value)}
          state="confirmed"
          style={{
            outline: "none",
            paddingLeft: "0px",
            paddingBottom: "3px",
            paddingTop: "3px",
          }}
        />
      </Inputs>

      <Link
        to={"/rentals"}
        state={{
          location: location,
          guests: guests,
          checkin: checkin,
          checkout: checkout,
        }}
      >
        <SearchIconContainer>
          <Icon size="24" svg="search" fill="#ffffff"></Icon>
        </SearchIconContainer>
      </Link>
    </SearchBarWrap>
  );
}
