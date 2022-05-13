import {addPostAC, changeNewTextAC, profileReducer, setUserProfileAC} from "./profileReducer";
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow} from "./userReducer";

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
   profile: null
}
export type DialogsPageType = {
   messages: Array<MessagesDataType>
   dialogs: Array<DialogsDataType>
   newMessageBody: string
}
export type SidebarType = {}
export type StateType = {
   profilePage: ProfilePageType
   dialogsPage: DialogsPageType
   sidebar: SidebarType
}
export type StoreType = {
   _state: StateType
   _callSubscriber: () => void
   subscribe: (observer: () => void) => void
   getState: () => StateType
   dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = ReturnType<typeof addPostAC> |
   ReturnType<typeof changeNewTextAC> |
   ReturnType<typeof updateNewMessageBodyAC> |
   ReturnType<typeof sendMessageAC> |
   ReturnType<typeof setUserProfileAC> |
   ReturnType<typeof follow> |
   ReturnType<typeof unfollow> |
   ReturnType<typeof setUsers> |
   ReturnType<typeof setCurrentPage> |
   ReturnType<typeof setTotalUsersCount> |
   ReturnType<typeof toggleIsFetching>

const store: StoreType = {
   _state: {
      profilePage: {
         posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 10},
            {id: 2, message: "It is my friend", likesCount: 13},
         ],
         newPostText: 'it-kamasutra',
         profile: null
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
         newMessageBody: ''
      },
      sidebar: {},
   },
   _callSubscriber() {
      console.log('State changed')
   },

   getState() {
      return this._state
   },
   subscribe (observer) {
      this._callSubscriber = observer
   },

   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
      this._state.sidebar = sidebarReducer(this._state.sidebar, action)
      this._callSubscriber()
   }
}

export default store



