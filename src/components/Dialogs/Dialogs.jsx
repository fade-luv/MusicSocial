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

const dialogsData = [
  { id: 1, name: "Dmitry" },
  { id: 2, name: "Sergey" },
  { id: 3, name: "Svetlana" },
  { id: 4, name: "Ilyaa" },
];

const messagesData = [
  { id: 1, textMessage: "Hi,bro" },
  { id: 2, textMessage: "How, are you" },
  { id: 3, textMessage: "Thanks" },
  { id: 4, textMessage: "Goodbye" },
];


  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        <DialogItem
          name={dialogsData[0].name}
          id={dialogsData[0].id}
        ></DialogItem>
        <DialogItem
          name={dialogsData[1].name}
          id={dialogsData[1].id}
        ></DialogItem>
        <DialogItem
          name={dialogsData[2].name}
          id={dialogsData[2].id}
        ></DialogItem>
        <DialogItem
          name={dialogsData[3].name}
          id={dialogsData[3].id}
        ></DialogItem>
      </div>
      <div className={classes.messages}>
        <Message message={messagesData[0].textMessage} />
        <Message message={messagesData[1].textMessage} />
        <Message message={messagesData[2].textMessage} />
        <Message message={messagesData[3].textMessage} />
      </div>
    </div>
  );
}

export default Dialogs;
