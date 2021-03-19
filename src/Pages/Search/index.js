import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Search = () => {
  return <SearchWrapper></SearchWrapper>;
};

export default withRouter(Search);

const SearchWrapper = styled.header`
  height: 10%;
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;
