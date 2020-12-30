import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/reducer/dialogs";

const DialogsContainer = ({store}) => {
  let state = store.getState().dialogsPage;

  let onUpdateNewMessageBody = (body) => {
    store.dispatch(updateNewMessageBodyCreator(body))
  }
  let onSendMessage = () => {
    store.dispatch(sendMessageCreator())
  }
  return (<Dialogs
    updateNewMessageBodyCreator={onUpdateNewMessageBody}
    sendMessageCreator={onSendMessage}
    dialogsPage={state}/>)
};
export default DialogsContainer;
