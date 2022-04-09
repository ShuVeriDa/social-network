import React, {FC} from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfilelInfo} from "./ProfileInfo/ProfileInfo";
import {
   ActionsTypes,
   ProfilePageType,
} from "../../redux/state";

// type ProfileType = {
//    posts: Array<PostsType>
// }
type ProfileType = {
   profilePage: ProfilePageType
   dispatch: (action: ActionsTypes) => void
}

const Profile: FC<ProfileType> = ({profilePage, ...props}) => {
   return (
      <div className={classes.content}>
         <ProfilelInfo/>
         <MyPosts posts={profilePage.posts}
                  newPostText={profilePage.newPostText}
                  dispatch={props.dispatch}
         />
      </div>
   );
};

export {Profile};
