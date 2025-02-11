import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./css/index.css";
import "./i18n";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
