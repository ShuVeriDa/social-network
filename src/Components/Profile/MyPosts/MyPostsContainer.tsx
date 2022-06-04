import React from "react";
import {addPostAC, ProfilePageType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type mapStateToPropsType = {
   profilePage: ProfilePageType
}

const mapStateToProps = (state: mapStateToPropsType) => {
   return {
      posts: state.profilePage.posts,
   }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
   return {
      addPost: (newPostText: string) => dispatch(addPostAC(newPostText)),
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
