import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import GlobalStyle from "./assets/styles/global";
import { ThemeProvider } from "styled-components";
import light from "./assets/styles/themes/light.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={light}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
