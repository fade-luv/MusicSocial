import { connect } from "react-redux";
import {
  updateNewMessageCreator,
  sendNewMessageCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";



let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onNewMessageChange: (text) => {
      let action = updateNewMessageCreator(text);
      dispatch(action);
    },
    sendNewMessageCreator: (text) => {
      let action = sendNewMessageCreator(text);
      dispatch(action);
    },
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
