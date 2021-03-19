import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Movies = () => {
  return <MoviesWrapper></MoviesWrapper>;
};

export default withRouter(Movies);

const MoviesWrapper = styled.header`
  height: 10%;
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;
