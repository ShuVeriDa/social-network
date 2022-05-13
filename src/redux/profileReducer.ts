import {ActionsTypes, StateType} from "./store";
import {follow, setUsers, unfollow} from "./userReducer";

export const ADD_POST = 'ADD-POST'
export const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT"
export const SET_USER_PROFILE = "SET-USER-PROFILE"

export type PostsType = {
   id: number
   message: string
   likesCount: number
}

export type ProfilePageType = {
   posts: Array<PostsType>
   newPostText: string
   profile: null
}


let initialState: ProfilePageType = {
   posts: [
      {id: 1, message: "Hi, how are you?", likesCount: 10},
      {id: 2, message: "It is my friend", likesCount: 13},
   ],
   newPostText: 'it-kamasutra',
   profile: null
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes):ProfilePageType => {
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
      default:
         return state
   }
}

export type profileReducerType = ReturnType<typeof addPostAC> |
   ReturnType<typeof changeNewTextAC> |
   ReturnType<typeof setUserProfileAC>

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