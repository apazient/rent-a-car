import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import { App } from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <BrowserRouter basename="/rent-a-car">
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyles />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </PersistGate>

  // </React.StrictMode>
);
