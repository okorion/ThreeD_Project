import React from "react";
import styled from "styled-components";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
  color: white;
`;

const domNode = document.getElementById("root");

if (domNode !== null) {
  const root = createRoot(domNode);

  root.render(
    <React.StrictMode>
      <AppWrapper>
        <App />
      </AppWrapper>
    </React.StrictMode>
  );

  reportWebVitals();
} else {
  console.error("Root element not found.");
}
