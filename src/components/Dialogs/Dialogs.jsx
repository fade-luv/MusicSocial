import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { updateNewMessageCreator,sendNewMessageCreator } from "../../redux/state";
function Dialogs(props) {
  let newMessageElement = React.createRef();
   
  let dialogsElements = props.store.state.dialogsPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id}></DialogItem>
  ));

  let messagesElements = props.store.state.dialogsPage.messages.map(
    (message) => <Message message={message.textMessage} />
  );

  let newMessageText = props.store.state.dialogsPage.newMessageText;
  
  let onSendMessageClick = () => {
    let text = newMessageElement.current.value;
    props.store.dispatch(sendNewMessageCreator(text));
  }

 let onNewMessageChange = () => {
   let text = newMessageElement.current.value;
   props.store.dispatch(updateNewMessageCreator(text));
 };


  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageText}
              ref={newMessageElement}
              placeholder="Enter your message"
              onChange={onNewMessageChange}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
