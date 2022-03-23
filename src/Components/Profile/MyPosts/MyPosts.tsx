import React, {RefObject} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/state";

type MyPostsType = {
   posts: Array<PostsType>
   addPost: (postMessage: string) => void
}

const MyPosts = (props: MyPostsType) => {
   const postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

   const newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()
   const addPost = () => {
      if (newPostElement.current) {
         props.addPost(newPostElement.current.value)
         console.log( props.addPost)
      }
   }

   return (
      <div className={classes.postsBlock}>
         My posts
         <div>
            <div>
               <textarea ref={newPostElement}></textarea>
            </div>
          <div>
             <button onClick={addPost}>AddPost</button>
          </div>
         </div>
         <div className={classes.posts}>
            {postsElement}
         </div>
      </div>
   );
};

export {MyPosts};
