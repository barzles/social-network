import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../../redux/reducer/dialogs";
import {withRouter} from "react-router";
import {Redirect} from "react-router-dom";

class ProfileContainer extends Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2
    }
    this.props.getUserProfile(userId)
  }

  render() {
    if(!this.props.isAuth) {
      return <Redirect to={"/login"}/>
    }
    return <Profile {...this.props} />
  }
}

let mapStateToProps = (state) => ({
  profile: state.dialogsPage.profile,
  isAuth: state.auth.isAuth
})
export default withRouter(connect(mapStateToProps, {getUserProfile})(ProfileContainer));
