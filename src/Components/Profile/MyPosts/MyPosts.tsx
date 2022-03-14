import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

type myPostsType = {
   id: number
   message: string
   likesCount: number
}

const MyPosts = () => {

   const posts: Array<myPostsType> = [
      {id: 1, message: "Hi, how are you?", likesCount: 10},
      {id: 2, message: "It is my friend", likesCount: 13},
   ]
   const postsElement = posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

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
            {postsElement}
         </div>
      </div>
   );
};

export {MyPosts};
