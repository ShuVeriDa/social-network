import React from 'react';
import classes from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoType = {
   profile: any
   status: string
   updateStatus: (status: string) => void
}

export const ProfilelInfo = (props: ProfileInfoType) => {
   if (!props.profile) {
      return <Preloader />
   }
   return (
      <div className={classes.profileInfo}>
         <div>
            <img src={props.profile.photos.large} alt=""/>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
         </div>
      </div>
   );
};