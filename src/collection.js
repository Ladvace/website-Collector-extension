import React, { useState } from "react";
import styled from "styled-components";
import collectionElement from "./collectionElement";
import "./App.css";

const CollectionsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 20px;
`;

function Collection({ collectionElements, name }) {
  return (
    <CollectionsContainer>
      <h1>{name}s</h1>
      <>
      {collectionElements &&
        collectionElements.map((site) => <collectionElement site={site} />)}
      </>
    </CollectionsContainer>
  );
}

export default Collection;
