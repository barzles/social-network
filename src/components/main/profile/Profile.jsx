import React from "react";

// Components
import ProfileInfo from "./ProfileInfo/Profile";
import MyPostsContainer from "./myposts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer
        store={props.store}
      />
    </div>

  )
};

export default Profile;
