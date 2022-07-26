import {ActionsTypes, StateType} from "./store";
import {follow, setUsers, unfollow} from "./userReducer";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../Components/api/api";

export const ADD_POST = 'ADD-POST'
export const SET_USER_PROFILE = "SET-USER-PROFILE"
export const SET_STATUS = "SET-STATUS"
export const DELETE_POST = "DELETE-POST"

export type PostsType = {
   id: number
   message: string
   likesCount: number
}

export type ProfilePageType = {
   posts: Array<PostsType>
   profile: null
   status: string
}


let initialState: ProfilePageType = {
   posts: [
      {id: 1, message: "Hi, how are you?", likesCount: 10},
      {id: 2, message: "It is my friend", likesCount: 13},
   ],
   profile: null,
   status: '',
}

export const profileReducer = (state: ProfilePageType = initialState, action: profileReducerType): ProfilePageType => {
   switch (action.type) {
      case ADD_POST:
         const newPost: PostsType = {
            id: 5,
            message: action.newPostText,
            likesCount: 0,
         }
         return {
            ...state,
            posts: [...state.posts, newPost],
         }
      case SET_USER_PROFILE:
         return {...state, profile: action.profile}
      case SET_STATUS:
         return {...state, status: action.status}
      case DELETE_POST:
         return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
      default:
         return state
   }
}

export type profileReducerType =
   ReturnType<typeof addPostAC> |
   ReturnType<typeof setUserProfileAC> |
   ReturnType<typeof setStatusAC> |
   ReturnType<typeof deletePostAC>


export const addPostAC = (newPostText: string) => {
   return {
      type: ADD_POST,
      newPostText
   } as const
}
export const setUserProfileAC = (profile: null) => {
   return {
      type: SET_USER_PROFILE,
      profile
   } as const
}

export const setStatusAC = (status: string) => {
   return {
      type: SET_STATUS,
      status
   } as const
}

export const deletePostAC = (postId: number) => ({type: DELETE_POST, postId} as const)


export const getUserProfileAC = (userId: number) => async (dispatch: Dispatch) => {
   const response = await usersAPI.getProfile(userId)
   dispatch(setUserProfileAC(response.data))

}

export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
   const response = await profileAPI.getStatus(userId)

   dispatch(setStatusAC(response.data))

}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
   const response = await profileAPI.updateStatus(status)

   if (response.data.resultCode === 0) {
      dispatch(setStatusAC(status))
   }

}