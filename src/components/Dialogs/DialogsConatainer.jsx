import React from "react";
import {
  updateNewMessageCreator,
  sendNewMessageCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

function DialogsContainer(props) {

 function onSendMessageClick(text) {
    let action = sendNewMessageCreator(text);
    props.store.dispatch(action);
 }  
 function onNewMessageChange(text) {
   let action = updateNewMessageCreator(text);
   props.store.dispatch(action);
 } 


  return (
    <Dialogs
      store={props.store}
      onNewMessageChange={onNewMessageChange}
      onSendMessageClick={onSendMessageClick}
    />
  );
}

export default DialogsContainer;
