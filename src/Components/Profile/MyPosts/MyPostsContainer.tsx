import React from "react";
import {ActionsTypes, PostsType} from "../../../redux/store";
import {addPostAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {updateNewMessageBodyAC} from "../../../redux/dialogsReducer";
import {ReducersType} from "../../../redux/redux-store";

type MyPostsContainerPropsType = {
   store: ReducersType
}

const MyPostsContainer = (props: MyPostsContainerPropsType) => {
   let state = props.store.getState()

   const addPost = () => {
      props.store.dispatch(addPostAC(state.profilePage.newPostText))
   }

   const onPostChange = (text: string) => {
         let action = updateNewMessageBodyAC(text)
         props.store.dispatch(action)
   }

   return (
      <MyPosts updateNewPostText={onPostChange}
               addPost={addPost}
               posts={state.profilePage.posts}
               newPostText={state.profilePage.newPostText}
      />
   );
};

export {MyPostsContainer};
