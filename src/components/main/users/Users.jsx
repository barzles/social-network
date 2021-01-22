import React from "react";
import styles from "./users.module.css";
import noAvatarImg from "../../../assets/images/no-avatar.png";

const Users = ({follow, unFollow, users, currentPage, pageSize, totalUsersCount, onPageChanged, isFetching}) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      {
        users.length ?
          <div className={styles.pagination}>
            {
              pages.map(p => (
                <button
                  key={`pages_btn+${p}`}
                  className={currentPage === p ? styles.active : ''}
                  onClick={() => {
                    onPageChanged(p)
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
export default Users;
