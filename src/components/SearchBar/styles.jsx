import styled from "styled-components";
import { DatePicker, Select, Input } from "web3uikit";
import React from "react";

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 65px;
  font-size: 12px;
  width: 170px;
`;
export const StyledSelect = styled(Select)`
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
export const StyledDatePicker = styled(DatePicker)`
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
export const StyledInput = styled(Input)`
  font-size: 13px !important;
  height: 26px !important;
`;
export const VerticalLine = styled.div`
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
