import React, {ChangeEvent, FC} from 'react';
import classes from './Dialogs.module.css'

import {DialogItem} from "./DIalog/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType, StoreType, } from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {ReducersType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";


type DialogsContainerType = {
   state: DialogsPageType
   store: ReducersType
}

export const DialogsContainer: FC<DialogsContainerType> = ({ ...props}) => {
   let state = props.store.getState().dialogsPage

   const onSendMessageClick = () => {
      props.store.dispatch(sendMessageAC())
   }
   const onNewMessageChange = (body: string) => {
      props.store.dispatch(updateNewMessageBodyAC(body))
   }

   return (
      <div className={classes.dialogs}>
         <Dialogs updateNewMessageBody={onNewMessageChange}
                  sendMessage={onSendMessageClick}
                  dialogsPage={state}
         />
      </div>
   );
}