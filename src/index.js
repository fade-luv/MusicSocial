import "./index.css";
import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = () =>
  root.render(
    <BrowserRouter>
      <App state={store._state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>
  );

rerenderEntireTree(store.getState());
store._subscriber(rerenderEntireTree);
reportWebVitals();
