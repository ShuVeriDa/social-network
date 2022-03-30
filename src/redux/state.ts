// const posts: Array<PostsType> = [
//    {id: 1, message: "Hi, how are you?", likesCount: 10},
//    {id: 2, message: "It is my friend", likesCount: 13},
// ]
//
// const dialogs: Array<DialogsDataType> = [
//    {id: 1, name: "Ramzan"},
//    {id: 2, name: "Billy"},
//    {id: 3, name: "Islam"},
//    {id: 4, name: "Abdurrahman"},
// ]
//
// const messages: Array<MessagesDataType> = [
//    {id: 1, message: 'Hi'},
//    {id: 2, message: 'How are You?'},
//    {id: 3, message: 'Mukha vu ho?'},
//    {id: 4, message: 'Yo, whats up?'},
// ]

import {rerenderTree} from "../render";

export type PostsType = {
   id: number
   message: string
   likesCount: number
}

export type DialogsDataType = {
   id: number
   name: string
}

export type MessagesDataType = {
   id: number
   message: string
}

export type ProfilePageType = {
   posts: Array<PostsType>
   newPostText: string
}

export type DialogsPageType = {
   messages: Array<MessagesDataType>
   dialogs: Array<DialogsDataType>
}

export type StateType = {
   profilePage: ProfilePageType
   dialogsPage: DialogsPageType
}

let state: StateType = {
   profilePage: {
      posts: [
         {id: 1, message: "Hi, how are you?", likesCount: 10},
         {id: 2, message: "It is my friend", likesCount: 13},
      ],
      newPostText: 'it-kamasutra'
   },
   dialogsPage: {
      messages: [
         {id: 1, message: 'Hi'},
         {id: 2, message: 'How are You?'},
         {id: 3, message: 'Mukha vu ho?'},
         {id: 4, message: 'Yo, whats up?'},
      ],
      dialogs: [
         {id: 1, name: "Ramzan"},
         {id: 2, name: "Billy"},
         {id: 3, name: "Islam"},
         {id: 4, name: "Abdurrahman"},
      ],
   }
}

export let addPost = () => {
   let newPost :PostsType = {
      id: 5,
      message: state.profilePage.newPostText,
      likesCount: 0,
   }
   state.profilePage.posts.push(newPost)
   updateNewPostText('')
   rerenderTree(state)
}

export let updateNewPostText = (newText: string) => {
   state.profilePage.newPostText = newText
   rerenderTree(state)
}

export default state



