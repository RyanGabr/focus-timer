import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { TimerProvider } from "./context/timer-context";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TimerProvider>
      <App />
    </TimerProvider>
  </StrictMode>
);
