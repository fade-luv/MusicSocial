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

function Dialogs(params) {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        <DialogItem name="Dmitry" id="1"></DialogItem>
        <DialogItem name="Sergey" id="2"></DialogItem>
        <DialogItem name="Svetlana" id="3"></DialogItem>
        <DialogItem name="Ilya" id="4"></DialogItem>
      </div>
      <div className={classes.messages}>
        <Message message="Hi,bro"/>
        <Message message="How, are you?" />
        <Message message="Thanks" />
      </div>
    </div>
  );
}

export default Dialogs;
