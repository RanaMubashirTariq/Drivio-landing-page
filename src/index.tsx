import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { OnlineTaxiLanding } from "./screens/OnlineTaxiLanding";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <OnlineTaxiLanding />
  </StrictMode>,
);
