import React, {Component} from "react";
import axios from "axios";
import styles from "./users.module.css";
import noAvatarImg from "../../../assets/images/no-avatar.png";

class Users extends Component {

  componentDidMount() {
    this.getUsers()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.currentPage !== this.props.currentPage) {
      this.getUsers()
    }
  }

  getUsers() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users?page=' + this.props.currentPage + '&count=' + this.props.pageSize)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
  }

  render() {
    let {users, follow, unFollow, pageSize, totalUsersCount, currentPage} = this.props;
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    return (
      <div>
        {
          this.props.users.length ?
            <div className={styles.pagination}>
              {
                pages.map(p => (
                  <button
                    key={`pages_btn+${p}`}
                    className={currentPage === p ? styles.active : ''}
                    onClick={() => {
                      this.onPageChanged(p)
                    }}>
                    {p}
                  </button>
                ))
              }
            </div>
            : ''
        }

        {
          users.map(user => (
            <div key={user.id}>
          <span>
            <div>
              <img className={styles.avatarImg} src={user.photos.small !== null ? user.photos.small : noAvatarImg}
                   alt={`user-avatar_${user.id}`}/>
            </div>
            <div>
              {
                user.followed ?
                  <button onClick={() => unFollow(user.id)}>Unfollow</button>
                  : <button onClick={() => follow(user.id)}>Follow</button>

              }
            </div>
          </span>
              <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
                {
                  user.location ?
                    <span>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </span>
                    : ''
                }
          </span>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Users;
