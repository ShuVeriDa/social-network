import React, {RefObject} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, PostsType} from "../../../redux/store";
import {addPostAC} from "../../../redux/profileReducer";

type MyPostsType = {
   posts: Array<PostsType>
   newPostText: string
   updateNewPostText: (text: string) => void
   addPost: () => void
}

const MyPosts = (props: MyPostsType) => {
   const postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

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
            {postsElement}
         </div>
      </div>
   );
};

export {MyPosts};
