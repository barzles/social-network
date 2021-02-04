import React from "react";
import styles from "./users.module.css";
import noAvatarImg from "../../../assets/images/no-avatar.png";
import {NavLink} from "react-router-dom";

const Users = ({
                 follow,
                 unFollow,
                 users,
                 currentPage,
                 pageSize,
                 totalUsersCount,
                 onPageChanged,
                 isFollowingProgress
               }) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      {
        users.map(user => (
          <div key={user.id}>
          <span>
            <div>
              <NavLink to={`/profile/${user.id}`}>
                              <img className={styles.avatarImg}
                                   src={user.photos.small !== null ? user.photos.small : noAvatarImg}
                                   alt={`user-avatar_${user.id}`}/>
              </NavLink>
            </div>
            <div>
              {
                user.followed ?
                  <button key={`button-${user.id}`}
                          disabled={isFollowingProgress.some(id => id === user.id)}
                          onClick={() => {unFollow(user.id)}}>
                    Unfollow
                  </button>
                  : <button key={`button-${user.id}`}
                            disabled={isFollowingProgress.some(id => id === user.id)}
                            onClick={() => {follow(user.id)}}>
                    Follow
                  </button>
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
    </div>
  )
}
export default Users;
