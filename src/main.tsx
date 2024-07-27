import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GradientProvider } from "./context/GradientContext.tsx";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  //<React.StrictMode>*
  <ThemeProvider>
    <GradientProvider>
      <Toaster position="top-right" />
      <App />
    </GradientProvider>
  </ThemeProvider>,
  //</React.StrictMode>
);
