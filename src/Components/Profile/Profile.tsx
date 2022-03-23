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
   addPost: (postMessage: string) => void
}

const Profile: FC<ProfileType> = ({state, ...props}) => {
   return (
      <div className={classes.content}>
         <ProfilelInfo/>
         <MyPosts posts={state.posts} addPost={props.addPost}/>
      </div>
   );
};

export {Profile};
