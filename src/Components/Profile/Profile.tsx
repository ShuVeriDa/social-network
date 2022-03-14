import React from "react";
import classes from './Profile.module.css'

import {MyPosts} from "./MyPosts/MyPosts";
import {ProfilelInfo} from "./ProfileInfo/ProfileInfo";

const Profile = () => {
   return (
      <div className={classes.content}>
         <ProfilelInfo/>
         <MyPosts/>
      </div>
   );
};

export {Profile};
