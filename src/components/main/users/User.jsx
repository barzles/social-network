import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./users.module.css";
import noAvatarImg from "../../../assets/images/no-avatar.png";

const User = ({user, isFollowingProgress, follow, unFollow}) => {
    return (
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
                              onClick={() => {
                                  unFollow(user.id)
                              }}>
                          Unfollow
                      </button>
                      : <button key={`button-${user.id}`}
                                disabled={isFollowingProgress.some(id => id === user.id)}
                                onClick={() => {
                                    follow(user.id)
                                }}>
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
    );
};

export default User;
