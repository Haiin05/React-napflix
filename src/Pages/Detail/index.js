import React from "react";
import { withRouter } from "react-router-dom";
import DetailContainer from "./DetailContainer";
import styled from "styled-components";

const Detail = () => {
  return <DetailContainer />;
};

export default withRouter(Detail);

const DetailWrapper = styled.header`
  height: 10%;
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;
