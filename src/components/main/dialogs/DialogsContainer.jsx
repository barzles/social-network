import React, {Component} from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/reducer/dialogs";
import {connect} from "react-redux";

// Components
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

class DialogsContainer extends Component {
  render() {
    return <Dialogs {...this.props}/>
  }
}


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
  }
}

export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(DialogsContainer));
