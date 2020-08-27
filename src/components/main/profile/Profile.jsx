import React from "react";
import MyPosts from "./myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/Profile";

const Profile = () => {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts/>
        </div>

    )
};

export default Profile;