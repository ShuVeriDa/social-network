import React from 'react';
import classes from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoType = {
   profile: any
   status: string
   updateStatus: (status: string) => void
}

export const ProfilelInfo = ({profile, status, updateStatus,...props}: ProfileInfoType) => {
   if (!profile) {
      return <Preloader />
   }
   return (
      <div className={classes.profileInfo}>
         <div>
            <img src={profile.photos.large} alt=""/>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
         </div>
      </div>
   );
};