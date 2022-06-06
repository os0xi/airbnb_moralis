import React from "react";
import styled from "styled-components";
import background from "../../images/frontpagebg2.png";

const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  background-image: url(${background});
  background-size: cover;
`;
const Shade = styled.div`
  position: absolute;
  z-index: -1;
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  width: 100vw;
  height: 20vh;
`;

export default function Background() {
  return (
    <div>
      <Container />
      <Shade />
    </div>
  );
}
