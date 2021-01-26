import React, {Component} from "react";
import {connect} from "react-redux";
import axios from "axios";
import {
  follow,
  setCurrentPage,
  toggleIsFetching,
  setTotalUsersCount,
  setUsers,
  unFollow
} from "../../../redux/reducer/users";

//Components
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";

class UsersContainer extends Component {

  componentDidMount() {
    this.getUsers()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.currentPage !== this.props.currentPage) {
      this.getUsers()
    }
  }

  getUsers() {
    this.props.toggleIsFetching(true)
    axios.get('https://social-network.samuraijs.com/api/1.0/users?page=' + this.props.currentPage + '&count=' + this.props.pageSize)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        this.props.toggleIsFetching(false);
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
  }

  render() {
    let {users, follow, unFollow, pageSize, totalUsersCount, currentPage, isFetching} = this.props;

    return <>
      {
        isFetching ? <Preloader/>
          : null
      }
      <Users
      users={users}
      follow={follow}
      unFollow={unFollow}
      pageSize={pageSize}
      currentPage={currentPage}
      totalUsersCount={totalUsersCount}
      onPageChanged={this.onPageChanged}
      isFetching={isFetching}/>
      </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

export default connect(mapStateToProps,
  {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);
