import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { appTheme } from "./assets/theme/index.js";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={appTheme}>
      <CSSReset />
      <App />
    </ChakraProvider>
  </StrictMode>
);
