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
      <App state={store._state} addPost={store.addPost.bind(store)} refreshPostText={store.refreshPostText.bind(store)} />
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());
store.subscriber(rerenderEntireTree);
reportWebVitals();






