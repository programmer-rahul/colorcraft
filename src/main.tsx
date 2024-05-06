import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GradientProvider } from "./context/GradientContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GradientProvider>
      <App />
    </GradientProvider>
  </React.StrictMode>
);
