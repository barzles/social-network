import React, {Component} from "react";
import {sendMessageCreator} from "../../../redux/reducer/dialogs";
import {connect} from "react-redux";

// Components
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

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
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody))
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
  (DialogsContainer);
