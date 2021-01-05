import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/reducer/dialogs";
import {connect} from "react-redux";

// Components
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {dispatch(updateNewMessageBodyCreator(body))},
    sendMessage: () => {dispatch(sendMessageCreator())},
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;
