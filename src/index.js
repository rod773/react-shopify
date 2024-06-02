import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import shopProvider from "context/shopContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <shopProvider>
      <App />
    </shopProvider>
  </React.StrictMode>
);
