import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

function DialogItem(props) {
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
}


function Message(props) {
  return <div className={classes.message}>{props.message}</div>;
}

function Dialogs(props) {

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

let dialogsElements = dialogs.map((dialog) => 
  <DialogItem name={dialog.name} id={dialog.id}></DialogItem>
);

let messagesElements = messages.map((message) => (
  <Message message={message.textMessage} />
));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
}

export default Dialogs;
