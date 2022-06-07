import React from "react";
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

export default function Header(props) {
  const logo = require(props.version === "light"
    ? "../../images/airbnbRed.png"
    : "../../images/airbnb.png");
  return (
    <Headr>
      <Logo src={logo} />
      <Tabs version={props.version}>
        <div className="active">Places to stay</div>
        <div>Experiences</div>
        <div>Online Experiences</div>
      </Tabs>
      <ConnectButtonWrapper>
        <ConnectButton />
      </ConnectButtonWrapper>
    </Headr>
  );
}
