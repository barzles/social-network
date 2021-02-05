import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../../redux/reducer/dialogs";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

class ProfileContainer extends Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2
    }
    this.props.getUserProfile(userId)
  }

  render() {

    return <Profile {...this.props} />
  }
}

let mapStateToProps = (state) => ({
  profile: state.dialogsPage.profile,
})
export default withAuthRedirect(withRouter(connect(mapStateToProps, {getUserProfile})(ProfileContainer)));
