import "./index.css";
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
function rerenderEntireTree(state) {

  root.render(
    <BrowserRouter>
      <App store={store} dispatch={store.dispatch.bind(state)}/>
    </BrowserRouter>
  );
}
rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
