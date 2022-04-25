import {ActionsTypes} from "./store";

export type DialogsDataType = {
   id: number
   name: string
}
export type MessagesDataType = {
   id: number
   message: string
}

export type DialogsPageType = {
   messages: Array<MessagesDataType>
   dialogs: Array<DialogsDataType>
   newMessageBody: string
}

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState: DialogsPageType = {
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
   }

export const dialogsReducer = (state: DialogsPageType = initialState, action :ActionsTypes):DialogsPageType => {

   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
         return {
            ...state,
            newMessageBody: action.body
         }
      case SEND_MESSAGE:
         let body = state.newMessageBody
         return {
            ...state,
            newMessageBody: '',
            messages: [...state.messages, {id: 5, message: body}]
         }
      default:
         return  state
   }
}

export const updateNewMessageBodyAC = (body: string) => {
   return {
      type: UPDATE_NEW_MESSAGE_BODY,
      body: body
   } as const
}
export const sendMessageAC = () => {
   return {
      type: SEND_MESSAGE,
   } as const
}
