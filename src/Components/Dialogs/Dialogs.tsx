import React, { FC } from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DIalog/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessagesDataType} from "../../index";


type DialogsType = {
   messages: Array<MessagesDataType>
   dialogs: Array<DialogsDataType>
}

export const Dialogs: FC<DialogsType> = ({messages, dialogs}) => {

   const dialogsElements = dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/> )
   const messagesElements = messages.map(message => <Message key={message.id} message={message.message}/> )

   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={classes.messages}>
            {messagesElements}
         </div>
      </div>
   );
}
