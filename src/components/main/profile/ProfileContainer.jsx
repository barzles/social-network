import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../../redux/reducer/dialogs";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getStatus, updateStatus} from "../../../redux/reducer/profile";
import {Redirect} from "react-router-dom";

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizatedUserId
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        if (!this.props.match.params.userId && !this.props.authorizatedUserId) {
            return <Redirect to={'/login'}/>
        }
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.dialogsPage.profile,
    status: state.profilePage.status,
    authorizatedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});


export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
