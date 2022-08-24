import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle  from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    primary: "#6419E6",
    neutral: "#2a303c",
    base: "#191d24",
  }
}

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const chakraTheme = extendTheme({ config });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <ChakraProvider theme={chakraTheme}>
      <ThemeProvider theme={theme}>
    <GlobalStyle />
      <App />
      </ThemeProvider>
    </ChakraProvider>

);

reportWebVitals();
