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
   profilePage: ProfilePageType
   addPost: () => void
   updateNewPostText: (newPost: string) => void
}

const Profile: FC<ProfileType> = ({profilePage, ...props}) => {
   return (
      <div className={classes.content}>
         <ProfilelInfo/>
         <MyPosts posts={profilePage.posts}
                  newPostText={profilePage.newPostText}
                  addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText}
         />
      </div>
   );
};

export {Profile};
