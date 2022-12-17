import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

function Dialogs(params) {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        <div className={classes.dialog + " " + classes.active}>
          <NavLink to="/dialogs/1">Dmitry</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/2">Sergey</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/3">Svetlana</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/4">Elena</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/5">Victor</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/6">Valera</NavLink>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi!</div>
        <div className={classes.message}>Hi,how are you?</div>
        <div className={classes.message}>I Love you!</div>
        <div className={classes.message}>Thanks, bro!</div>
      </div>
    </div>
  );
}

export default Dialogs;