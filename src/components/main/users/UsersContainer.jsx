import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAc, unFollowAC} from "../../../redux/reducer/users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userid) => {
      dispatch(followAC(userid))
    },
    unFollow: (userid) => {
      dispatch(unFollowAC(userid))
    },
    setUsers: (users) => {
      dispatch(setUsersAc(users))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
