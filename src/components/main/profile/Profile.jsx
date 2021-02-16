import React from "react";

// Components
import ProfileInfo from "./ProfileInfo/Profile";
import MyPostsContainer from "./myposts/MyPostsContainer";

const Profile = ({profile, updateStatus, status}) => {
  return (
    <div>
      <ProfileInfo profile={profile} updateStatus={updateStatus} status={status}/>
      <MyPostsContainer/>
    </div>

  )
};

export default Profile;
