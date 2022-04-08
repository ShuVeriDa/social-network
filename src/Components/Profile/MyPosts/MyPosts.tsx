import React, {RefObject} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/state";

type MyPostsType = {
   posts: Array<PostsType>
   addPost: (postText: string) => void
   newPostText: string
   updateNewPostText: (newPost: string) => void
}

const MyPosts = (props: MyPostsType) => {
   const postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

   const newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()
   const addPost = () => {
         props.addPost(props.newPostText)
   }

   const onPostChange = () => {
      if (newPostElement.current) {
         let text = newPostElement.current.value
         props.updateNewPostText(text)
      }
   }

   return (
      <div className={classes.postsBlock}>
         My posts
         <div>
            <div>
               <textarea ref={newPostElement}
                         onChange={onPostChange}
                         value={props.newPostText}
               />
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
