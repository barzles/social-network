import React, {Component} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../../redux/reducer/dialogs";
import {withRouter} from "react-router";

class ProfileContainer extends Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2
    }
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return <Profile {...this.props} />
  }
}

let mapStateToProps = (state) => ({
  profile: state.dialogsPage.profile
})
export default withRouter(connect(mapStateToProps, {setUserProfile})(ProfileContainer));
