import classes from "./Dialogs.module.css";

function Dialogs(params) {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        <div className={classes.dialog + ' ' + classes.active}>Dmitry</div>
        <div className={classes.dialog}>Sergey</div>
        <div className={classes.dialog}>Svetlana</div>
        <div className={classes.dialog}>Elena</div>
        <div className={classes.dialog}>Victor</div>
        <div className={classes.dialog}>Valera</div>
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