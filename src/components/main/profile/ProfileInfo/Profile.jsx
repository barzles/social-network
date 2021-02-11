import React from "react";
import s from '../../../../style/component/Profile/ProfileInfo.module.css'
import Preloader from "../../../common/preloader/Preloader";
import noAvatarImg from "../../../../assets/images/no-avatar.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({profile}) => {
  if (!Object.keys(profile).length) {
    return <Preloader/>
  }
  return (
    <>
      <div className="content-background"></div>
      <div className={s.imgProfileBlock}>
        <img src={profile.photos.large !== null ? profile.photos.large : noAvatarImg}
             alt={`user-avatar_${profile.userId}`}/>
      </div>
      <ProfileStatus profile={profile}/>
    </>

  )
};

export default ProfileInfo;
