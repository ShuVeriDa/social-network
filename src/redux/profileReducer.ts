import {ActionsTypes, StateType} from "./store";
import {follow, setUsers, unfollow} from "./userReducer";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../Components/api/api";

export const ADD_POST = 'ADD-POST'
export const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT"
export const SET_USER_PROFILE = "SET-USER-PROFILE"
export const SET_STATUS = "SET-STATUS"

export type PostsType = {
   id: number
   message: string
   likesCount: number
}

export type ProfilePageType = {
   posts: Array<PostsType>
   newPostText: string
   profile: null
   status: string
}


let initialState: ProfilePageType = {
   posts: [
      {id: 1, message: "Hi, how are you?", likesCount: 10},
      {id: 2, message: "It is my friend", likesCount: 13},
   ],
   newPostText: 'it-kamasutra',
   profile: null,
   status: '',
}

export const profileReducer = (state: ProfilePageType = initialState, action: profileReducerType):ProfilePageType => {
   switch (action.type) {
      case ADD_POST:
         const newPost: PostsType = {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
         }
         return {
            ...state,
            posts : [...state.posts, newPost],
            newPostText: '',
         }
      case CHANGE_NEW_TEXT:
         return {
            ...state,
            newPostText: action.newText
         }
      case SET_USER_PROFILE:
         return {...state, profile: action.profile}
      case SET_STATUS:
         return {...state, status: action.status}
      default:
         return state
   }
}

export type profileReducerType =
   ReturnType<typeof addPostAC> |
   ReturnType<typeof changeNewTextAC> |
   ReturnType<typeof setUserProfileAC> |
   ReturnType<typeof setStatusAC>



export const addPostAC = () => {
   return {
      type: ADD_POST,
   } as const
}
export const changeNewTextAC = (newText: string) => {
   return {
      type: CHANGE_NEW_TEXT,
      newText: newText
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

export const getUserProfileAC = (userId: number) => (dispatch: Dispatch) => {
   usersAPI.getProfile(userId)
      .then(response => {
         dispatch(setUserProfileAC(response.data))
      })
}

export const getStatus = (userId: number) => (dispatch: Dispatch) => {
   profileAPI.getStatus(userId)
      .then(response => {
         dispatch(setStatusAC(response.data))
      })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
   profileAPI.updateStatus(status)
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(setStatusAC(status))
         }
      })
}