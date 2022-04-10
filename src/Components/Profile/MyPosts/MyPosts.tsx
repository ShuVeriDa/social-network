import React, {RefObject} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, addPostAC, PostsType} from "../../../redux/state";

type MyPostsType = {
   posts: Array<PostsType>
   dispatch: (action: ActionsTypes) => void
   newPostText: string
}

const MyPosts = (props: MyPostsType) => {
   const postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

   const newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()
   const addPost = () => {
      props.dispatch(addPostAC(props.newPostText))
   }

   const onPostChange = () => {
      if (newPostElement.current) {
         let text = newPostElement.current.value
         props.dispatch({type: 'CHANGE-NEW-TEXT', newText: text})
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
