import React, {Component} from "react";
import axios from "axios";
import styles from "./users.module.css";
import noAvatarImg from "../../../assets/images/no-avatar.png";

class Users extends Component {

  componentDidMount() {
    if (!this.props.users.length) {
      this.getUsers()
    }
  }

  getUsers() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    let {users, follow, unFollow} = this.props;
    return (
      <div>
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
