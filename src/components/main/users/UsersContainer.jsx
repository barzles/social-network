import React, {Component} from "react";
import {connect} from "react-redux";
import {usersAPI} from "../../../api/api";

import {
  follow,
  setCurrentPage,
  toggleIsFetching,
  setTotalUsersCount,
  setUsers,
  unFollow, toggleFollowingProgress
} from "../../../redux/reducer/users";

//Components
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";

class UsersContainer extends Component {

  componentDidMount() {
    this.getUsersFunc()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.currentPage !== this.props.currentPage) {
      this.getUsersFunc()
    }
  }

  getUsersFunc() {
    this.props.toggleIsFetching(true)

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
        this.props.toggleIsFetching(false);
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
  }

  render() {
    let {users, follow, unFollow, pageSize, totalUsersCount, currentPage, isFetching, toggleFollowingProgress, isFollowingProgress} = this.props;

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
      isFetching={isFetching}
      toggleFollowingProgress={toggleFollowingProgress}
      isFollowingProgress={isFollowingProgress}
      />
      </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowingProgress: state.usersPage.followingInProgress
  }
}

export default connect(mapStateToProps,
  {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress})(UsersContainer);
