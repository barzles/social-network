import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthUserData} from "../redux/reducer/auth";

let mapStateTopPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
};

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    constructor(props) {
      super(props);
      console.log('props', props)
    }
    render() {
      if (!this.props.isAuth) {
        return <Redirect to={"/login"}/>
      }
      return <Component {...this.props} />
    }
  }

  return connect(mapStateTopPropsForRedirect, {getAuthUserData})(RedirectComponent);
};
