import React, {FC} from "react";
import classes from './Profile.module.css'
import {ProfilelInfo} from "./ProfileInfo/ProfileInfo";
import {
   ActionsTypes,
   ProfilePageType,
} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ReducersType} from "../../redux/redux-store";

type ProfileType = {

}

const Profile: FC<ProfileType> = ({ ...props}) => {
   return (
      <div className={classes.content}>
         <ProfilelInfo/>
         <MyPostsContainer />
      </div>
   );
};

export {Profile};
