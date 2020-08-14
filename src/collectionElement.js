/*global chrome*/
import React from "react";
import styled from "styled-components";
import "./App.css";

const Container = styled.div`
  // display: flex;
  // justify-content: space-between;
  height: 20px;
  border: 1px solid black;
`;

function CollectionElement({ site }) {
  return <Container>{site}</Container>;
}

export default CollectionElement;
