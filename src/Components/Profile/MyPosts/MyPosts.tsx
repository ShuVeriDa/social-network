import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/state";

type MyPostsType = {
   posts: Array<PostsType>
}

const MyPosts = (props: MyPostsType) => {

   const postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

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
