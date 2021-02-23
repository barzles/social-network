import React from "react";

// Components
import ProfileInfo from "./ProfileInfo/Profile";
import MyPostsContainer from "./myposts/MyPostsContainer";
import Preloader from "../../common/preloader/Preloader";

const Profile = ({profile, updateStatus, status}) => {
  if (!profile && !status) {
    return <Preloader/>
  }
  return (
    <div>
      <ProfileInfo profile={profile} updateStatus={updateStatus} status={status}/>
      <MyPostsContainer/>
    </div>

  )
};

export default Profile;
