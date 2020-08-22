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

function Collection({ collectionElements, name, collections, setCollections }) {
  const removeCollection = (collection) => {
    const indexOfElement = collections.indexOf(collection);

    let tempCollections = collections;

    if (indexOfElement > -1) {
      setCollections(tempCollections.splice(indexOfElement, 1));
    }
  };
  return (
    <CollectionsContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: 20,
        }}
      >
        <button onClick={() => removeCollection(name, Collections)}>-</button>
        <h2
          style={{
            margin: 0,
          }}
        >
          {name}
        </h2>
        <button>+</button>
      </div>
      <>
        {collectionElements &&
          collectionElements.map((site) => <collectionElement site={site} />)}
      </>
    </CollectionsContainer>
  );
}

export default Collection;
