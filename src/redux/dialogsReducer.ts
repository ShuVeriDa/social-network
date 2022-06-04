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

}

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

   }


export const dialogsReducer = (state: DialogsPageType = initialState, action: dialogsReducerAC):DialogsPageType => {
   switch (action.type) {
      case SEND_MESSAGE:
         let body = action.newMessageBody
         return {
            ...state,
            messages: [...state.messages, {id: 5, message: body}]
         }
      default:
         return  state
   }
}

type dialogsReducerAC =
   ReturnType<typeof sendMessageAC>

export const sendMessageAC = (newMessageBody: string) => {
   return {
      type: SEND_MESSAGE,
      newMessageBody
   } as const
}
