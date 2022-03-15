import React, {FC} from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfilelInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType, ProfilePageType, StateType} from "../../redux/state";
import App, {AppType} from "../../App";

// type ProfileType = {
//    posts: Array<PostsType>
// }
type ProfileType = {
   state: ProfilePageType
}

const Profile: FC<ProfileType> = ({state}) => {
   return (
      <div className={classes.content}>
         <ProfilelInfo/>
         <MyPosts posts={state.posts}/>
      </div>
   );
};

export {Profile};
