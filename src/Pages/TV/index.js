import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const TV = () => {
  return <TVWrapper></TVWrapper>;
};

export default withRouter(TV);

const TVWrapper = styled.header`
  height: 10%;
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;
