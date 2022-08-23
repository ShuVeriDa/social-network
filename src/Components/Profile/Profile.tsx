import React, {FC} from "react";
import classes from './Profile.module.css'
import {ProfilelInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";

type ProfilePropsType = {
   profile: ProfileType
   status: string
   updateStatus: (status: string) => void
   isOwner: boolean
   savePhoto: (photos: any)=>void
}

const Profile: FC<ProfilePropsType> = ({ ...props}) => {
   return (
      <div className={classes.content}>
         <ProfilelInfo isOwner={props.isOwner}
                       profile={props.profile}
                       status={props.status}
                       updateStatus={props.updateStatus}
                       savePhoto={props.savePhoto}/>
         <MyPostsContainer />
      </div>
   );
};

export {Profile};
