import "./index.css";
import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";



const root = ReactDOM.createRoot(document.getElementById("root"));

 function rerenderEntireTree() {
  root.render(
    <React.StrictMode>
      <App state={store._state} dispatch={store.dispatch.bind(store) } />
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());
store._subscriber(rerenderEntireTree);
reportWebVitals();






