import React from "react";
import { Button } from "web3uikit";
import styled from "styled-components";
const Container = styled.div`
  color: white;
  margin-top: 25vh;
  margin-left: 5%;
  p {
    font-size: 12px;
    font-weight: bold;
  }
  button {
    margin-top: 20px;
  }
`;
export default function CallToAction() {
  return (
    <Container>
      <h1>Feel Adventurous</h1>
      <p>Let us decide and discover new places</p>
      <p>to stay, live, work or just relax.</p>
      <Button text="Explore a location" />
    </Container>
  );
}
