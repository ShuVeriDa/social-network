import React from "react";
import {addPostAC, ProfilePageType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {updateNewMessageBodyAC} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type mapStateToPropsType = {
   profilePage: ProfilePageType
}

const mapStateToProps = (state: mapStateToPropsType) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
   }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
   return {
      addPost: (postText: string) => dispatch(addPostAC(postText)),
      onPostChange: (text: string) => {
         let action = updateNewMessageBodyAC(text)
         dispatch(action)
      },
   }
}

const MyPostsContainer = () => connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
