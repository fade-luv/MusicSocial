import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {addPost} from "./redux/state";
import {refreshPostText} from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById("root"));
export function rerenderEntireTree(props) {

  
  root.render(
    <React.StrictMode>
      <App state={props} addPost={addPost} refreshPostText={refreshPostText}/>
    </React.StrictMode>
  );
}
reportWebVitals();




