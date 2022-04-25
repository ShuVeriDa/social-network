import {ActionsTypes, StateType} from "./store";

export type PostsType = {
   id: number
   message: string
   likesCount: number
}

export type ProfilePageType = {
   posts: Array<PostsType>
   newPostText: string
}

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT"

let initialState: ProfilePageType = {
   posts: [
      {id: 1, message: "Hi, how are you?", likesCount: 10},
      {id: 2, message: "It is my friend", likesCount: 13},
   ],
   newPostText: 'it-kamasutra'
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
      case CHANGE_NEW_TEXT: {
         return {
            ...state,
            newPostText: action.newText
         }
      }
      default:
         return state
   }
}

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