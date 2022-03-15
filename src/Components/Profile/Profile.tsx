import React, {FC} from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfilelInfo} from "./ProfileInfo/ProfileInfo";
import { PostsType } from "../..";

type ProfileType = {
   posts: Array<PostsType>
}

const Profile: FC<ProfileType> = ({posts}) => {
   return (
      <div className={classes.content}>
         <ProfilelInfo/>
         <MyPosts posts={posts}/>
      </div>
   );
};

export {Profile};
