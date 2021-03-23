import React from "react";
import { withRouter } from "react-router-dom";
import HomeContainer from "./HomeContainer";
import styled from "styled-components";

const Home = () => {
  return <HomeContainer />;
};

export default withRouter(Home);

const HomeWrapper = styled.header`
  height: 10%;
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;
