import React, {RefObject} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/profileReducer";

type MyPostsType = {
   posts: Array<PostsType>
   newPostText: string
   updateNewPostText: (text: string) => void
   addPost: () => void
   // onPostChange: (text: string) => void
}

const MyPosts = (props: MyPostsType) => {
   const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

   const newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

   const onAddPost = () => {
      props.addPost()
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
             <button onClick={onAddPost}>AddPost</button>
          </div>
         </div>
         <div className={classes.posts}>
            {postsElements}
         </div>
      </div>
   );
};

export {MyPosts};
