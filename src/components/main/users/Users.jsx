import React from "react";
import Paginator from "../../common/paginator/Paginator";
import User from "./User";

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
    return (
        <div>
            {users.map(user => <User key={user.id}
                                     user={user}
                                     unFollow={unFollow}
                                     follow={follow}
                                     isFollowingProgress={isFollowingProgress}
                />
            )}

            {
                users.length ?
                    <Paginator
                        currentPage={currentPage}
                        pageSize={pageSize}
                        totalUsersCount={totalUsersCount}
                        onPageChanged={onPageChanged}
                    /> : ''
            }
        </div>
    )
}
export default Users;
