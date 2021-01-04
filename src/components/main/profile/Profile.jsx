import React from "react";

// Components
import ProfileInfo from "./ProfileInfo/Profile";
import MyPostsContainer from "./myposts/MyPostsContainer";

const Profile = () => {
  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer/>
    </div>

  )
};

export default Profile;
