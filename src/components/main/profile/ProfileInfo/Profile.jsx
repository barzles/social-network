import React from "react";
import s from '../../../../style/component/Profile/ProfileInfo.module.css'
import Preloader from "../../../common/preloader/Preloader";
import noAvatarImg from "../../../../assets/images/no-avatar.png";

const ProfileInfo = ({profile}) => {
  if (!Object.keys(profile).length) {
    return <Preloader/>
  }
  console.log(profile)
  return (
    <>
      <div className="content-background"></div>
      <div className={s.imgProfileBlock}>
        <img src={profile.photos.large !== null ? profile.photos.large : noAvatarImg}
             alt={`user-avatar_${profile.userId}`}/>
      </div>
      <div className={s.descriptionBlock}>
        {profile.aboutMe ? profile.aboutMe : 'nothing...'}
      </div>
    </>

  )
};

export default ProfileInfo;
