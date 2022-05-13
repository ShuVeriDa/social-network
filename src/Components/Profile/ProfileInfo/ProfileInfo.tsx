import React from 'react';
import classes from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";

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
            <img
               src={props.profile.photos.large}
               alt=""/>
         </div>
         <div className={classes.descriptionBlock}>
            ava + description
         </div>
      </div>
   );
};