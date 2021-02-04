import React, {Component} from "react";
import {connect} from "react-redux";

import {
  follow,
  setCurrentPage,
  unFollow,
  getUsers
} from "../../../redux/reducer/users";

//Components
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";

class UsersContainer extends Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.currentPage !== this.props.currentPage) {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
  }

  render() {
    let {
      users,
      follow,
      unFollow,
      pageSize,
      totalUsersCount,
      currentPage,
      isFetching,
      isFollowingProgress
    } = this.props;

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
  {
    follow,
    unFollow,
    setCurrentPage,
    getUsers,
  })(UsersContainer);
