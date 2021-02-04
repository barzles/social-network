import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/reducer/dialogs";
import {connect} from "react-redux";

// Components
import Dialogs from "./Dialogs";

class DialogsContainer extends Component {
  render() {
    if (!this.props.isAuth) {
      return <Redirect to={'/login'}/>
    }
    return <Dialogs {...this.props}/>
  }
}

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
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

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);
