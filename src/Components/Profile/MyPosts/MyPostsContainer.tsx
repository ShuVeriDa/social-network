import React from "react";
import {addPostAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {updateNewMessageBodyAC} from "../../../redux/dialogsReducer";
import StoreContext from "../../../StoreContext";

type MyPostsContainerPropsType = {

}

const MyPostsContainer = (props: MyPostsContainerPropsType) => {
   return <StoreContext.Consumer>
      {(store: any) => {

            let state = store.getState()

            const addPost = () => {
               store.dispatch(addPostAC(state.profilePage.newPostText))
            }

            const onPostChange = (text: string) => {
               let action = updateNewMessageBodyAC(text)
               store.dispatch(action)
            }
            return (
               <div>
               <MyPosts updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
               />
               </div>
               )
         }

      }
      </StoreContext.Consumer>
};

export {MyPostsContainer};
