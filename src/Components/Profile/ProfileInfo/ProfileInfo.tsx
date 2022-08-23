import React from 'react';
import classes from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from './../../../assets/images/user.png'
import {ProfileType} from "../ProfileContainer";

type ProfileInfoType = {
   profile: ProfileType
   status: string
   updateStatus: (status: string) => void
   isOwner: boolean
   savePhoto: (photos: any)=>void
}

export const ProfilelInfo = ({profile, status, updateStatus, isOwner, savePhoto,...props}: ProfileInfoType) => {
   if (!profile) {
      return <Preloader />
   }

   const onMainPhotoSelected = (e: any) => {
      if (e.target.files.length) {
         savePhoto(e.target.files[0])
      }
   }
   return (
      <div className={classes.profileInfo}>
         <div>
            <img src={profile.photos.large} alt="" className={classes.mainPhoto}/>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
         </div>
      </div>
   );
};