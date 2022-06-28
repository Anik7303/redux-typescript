import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import "index.css";
import { store } from "store";
import { App } from "components";

const container: HTMLDivElement = document.getElementById(
  "root"
) as HTMLDivElement;
const root = createRoot(container);
const element = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
root.render(element);
