import React from "react";
import MyPosts from "./myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/Profile";

const Profile = (props) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts postsData={props.profilePage.postsData}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     updateNewChangeText={props.updateNewChangeText}/>
        </div>

    )
};

export default Profile;