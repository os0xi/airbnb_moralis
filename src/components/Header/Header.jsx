import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ConnectButton } from "web3uikit";
// import logo from "../../images/airbnb.png";

const Headr = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 10vw;
  height: calc(10vw * 0.3);
`;
const Tabs = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-evenly;
  color: ${(props) => {
    return props.version == "light" ? "#000000" : "#ffffff";
  }};
  font-size: 16px;
  font-weight: 600;
`;
const Active = styled.div`
  text-decoration: underline;
`;
const ConnectButtonWrapper = styled.div`
  button:nth-child(1) {
    background-color: #fc642d;
    box-sizing: content-box;
  }
  button span:first-child {
    font-weight: normal;
    color: white;
  }

  button :hover {
  }
`;
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
export default function Header(props) {
  const logo = require(props.version === "light"
    ? "../../images/airbnbRed.png"
    : "../../images/airbnb.png");
  return (
    <Headr>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      {props.page == "home" ? (
        <Tabs version={props.version}>
          <div className="active">Places to stay</div>
          <div>Experiences</div>
          <div>Online Experiences</div>
        </Tabs>
      ) : (
        <SearchBarWrap>
          <div>{props.location}</div>
          <VerticalLine />
          <div>{`
          ${props.checkin.toLocaleString("default", { month: "short" })}
          ${props.checkin.toLocaleString("default", { day: "2-digit" })}
          -
          ${props.checkout.toLocaleString("default", { month: "short" })}
          ${props.checkout.toLocaleString("default", { day: "2-digit" })}
          `}</div>
          <VerticalLine />
          <div>{props.guests}</div>
        </SearchBarWrap>
      )}
      <ConnectButtonWrapper>
        <ConnectButton />
      </ConnectButtonWrapper>
    </Headr>
  );
}
