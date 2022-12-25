import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
function Dialogs(props) {

  let dialogs = props.dialogsPage.dialogs
  let messages = props.dialogsPage.messages;
  let newMessageText = props.dialogsPage.newMessageText;
  let newMessageElement = React.createRef();

  let dialogsElements = dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id}></DialogItem>
  ));

  let messagesElements = messages.map((message) => (
    <Message message={message.textMessage} />
  ));


  
  let onSendMessageClick = () => {
    let text = newMessageElement.current.value;
    props.onSendMessageClick(text);
  }

 let onNewMessageChange = () => {
   let text = newMessageElement.current.value;
   props.onNewMessageChange(text);
   
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
