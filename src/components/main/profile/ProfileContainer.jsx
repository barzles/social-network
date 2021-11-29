import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../../redux/reducer/dialogs";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getStatus, updateStatus} from "../../../redux/reducer/profile";

class ProfileContainer extends Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 14455
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return <Profile {...this.props}/>
  }
}

let mapStateToProps = (state) => ({
  profile: state.dialogsPage.profile,
  status: state.profilePage.status
});


export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
