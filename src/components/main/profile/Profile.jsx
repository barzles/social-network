import React from "react";

// Components
import ProfileInfo from "./ProfileInfo/Profile";
import MyPostsContainer from "./myposts/MyPostsContainer";

const Profile = ({profile}) => {
  return (
    <div>
      <ProfileInfo profile={profile}/>
      <MyPostsContainer/>
    </div>

  )
};

export default Profile;
