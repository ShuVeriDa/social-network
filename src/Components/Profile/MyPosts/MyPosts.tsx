import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

type myPostsType = {
   id: number
   message: string
   likesCount: number
}

const MyPosts = () => {

   let postData: Array<myPostsType> = [
      {id: 1, message: "Hi, how are you?", likesCount: 10},
      {id: 2, message: "It is my friend", likesCount: 13},

   ]

   return (
      <div className={classes.postsBlock}>
         My posts
         <div>
            <div>
               <textarea></textarea>
            </div>
          <div>
             <button>AddPost</button>
          </div>
         </div>
         <div className={classes.posts}>
            <Post message={postData[0].message} likesCount={postData[1].likesCount}/>
            <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
         </div>
      </div>
   );
};

export {MyPosts};
