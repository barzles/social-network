import React, {Component} from "react";
import {connect} from "react-redux";

import {
  follow,
  setCurrentPage,
  unFollow,
  requestUsers
} from "../../../redux/reducer/users";

//Components
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount, getUsers
} from "../../../redux/selectors/user-selector";

class UsersContainer extends Component {

  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.currentPage !== this.props.currentPage) {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize)
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
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isFollowingProgress: getFollowingInProgress(state)
  }
}

export default connect(mapStateToProps,
  {
    follow,
    unFollow,
    setCurrentPage,
    requestUsers: requestUsers,
  })(UsersContainer);
