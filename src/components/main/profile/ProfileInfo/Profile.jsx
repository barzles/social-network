import React from "react";
import s from '../../../../style/component/Profile/ProfileInfo.module.css'
import Preloader from "../../../common/preloader/Preloader";
const ProfileInfo = ({profile}) => {
  if(!Object.keys(profile).length) {
    return <Preloader/>
  }
    return (
        <>
            <div className="content-background"></div>
            <div className={s.descriptionBlock}>
              {profile.aboutMe}
            </div>
        </>

    )
};

export default ProfileInfo;
