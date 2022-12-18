import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const dialogs = [
  { id: 1, name: "Dmitry" },
  { id: 2, name: "Sergey" },
  { id: 3, name: "Svetlana" },
  { id: 4, name: "Ilyaa" },
];

const messages = [
  { id: 1, textMessage: "Hi,bro" },
  { id: 2, textMessage: "How, are you" },
  { id: 3, textMessage: "Thanks" },
  { id: 4, textMessage: "Goodbye" },
];

const posts = [
  { id: 1, textPost: "Hi,bro", likesCount: 0 },
  { id: 2, textPost: "How, are you", likesCount: 0 },
  { id: 3, textPost: "Thanks", likesCount: 0 },
  { id: 4, textPost: "Goodbye", likesCount: 0 },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App dialogsData={dialogs} messagesData={messages} postsData={posts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
