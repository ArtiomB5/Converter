import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  rootElement
);
