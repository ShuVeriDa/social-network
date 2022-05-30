import React from 'react';
import classes from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoType = {
   profile: any
}

export const ProfilelInfo = (props: ProfileInfoType) => {
   if (!props.profile) {
      return <Preloader />
   }
   return (
      <div className={classes.profileInfo}>
         <div>
            <img src={props.profile.photos.large} alt=""/>
            <ProfileStatus status={"Hello my friends"}/>
         </div>
      </div>
   );
};