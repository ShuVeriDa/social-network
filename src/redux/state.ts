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

export type StoreType = {
   _state: StateType
   _callSubscriber: () => void
   subscribe: (observer: () => void) => void
   getState: () => StateType
   dispatch: (action: ActionsTypes) => void
}

type AddPostActionType = {
   type: "ADD-POST"
   postText: string
}
type ChangeNewTextActionType = {
   type: "CHANGE-NEW-TEXT"
   newText: string
}

export type ActionsTypes = AddPostActionType | ChangeNewTextActionType

const store: StoreType = {
   _state: {
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
      if (action.type === "ADD-POST") {
         const newPost :PostsType = {
            id: 5,
            message: action.postText,
            likesCount: 0,
         }
         this._state.profilePage.posts.push(newPost)
         this._callSubscriber()
      } else if(action.type === "CHANGE-NEW-TEXT") {
         this._state.profilePage.newPostText = action.newText
         this._callSubscriber()
      }
   }

}

// window.state = state

export default store



