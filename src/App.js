/*global chrome*/
import React, { useState } from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import { useKey } from "rooks";
import { Counter } from "./features/counter/Counter";
import Collection from "./collection";
import "./App.css";

const Container = styled.div`
  padding: 10px;
`;

const AddSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CollectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  overflow-y: auto;
`;

function App() {
  const [collections, setCollections] = useState([]);
  const [collectionName, setCollectionName] = useState(undefined);
  const createCollection = () => {
    const existCollection = collections.some((x) => x.name === collectionName);

    if (collectionName && !existCollection) {
      setCollections([...collections, { name: collectionName, sites: [] }]);
    }
  };

  useKey(["Enter"], createCollection);

  return (
    <Container>
      <AddSection>
        <button
          style={{
            marginRight: 5,
          }}
          onClick={createCollection}
        >
          +
        </button>
        <input onChange={(e) => setCollectionName(e.target.value)} />
      </AddSection>
      <CollectionsContainer>
        {collections &&
          collections.map((collection) => (
            <Collection
              name={collection.name}
              collections={collections}
              setCollections={setCollections}
              collectionElements={collection.sites}
            />
          ))}
      </CollectionsContainer>
    </Container>
  );
}

export default App;
