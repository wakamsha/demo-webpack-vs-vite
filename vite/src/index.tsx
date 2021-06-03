import { StrictMode } from "react";
import { render } from "react-dom";
import { App } from "./App";
import { applyGlobalStyle } from "./utils/Style";

applyGlobalStyle();

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
