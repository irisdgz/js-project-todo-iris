import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
  --app-font: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
}


  html, body, #root {
    margin: 0;
    padding: 0;
    font-family: var(--app-font);
    background: #fff;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }

  /* Force form controls */
  button, input, textarea, select {
    font-family: var(--app-font);
    font: inherit;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
