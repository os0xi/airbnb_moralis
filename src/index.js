import React from "react";
import { MoralisProvider } from "react-moralis";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MoralisProvider
      appId="3zvmZ7CBMV1cVw9mIPnrtUiPYZHuHKkaVdDVNAVn"
      serverUrl="https://bexnvkjunxyf.usemoralis.com:2053/server"
    >
      <App />
    </MoralisProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
