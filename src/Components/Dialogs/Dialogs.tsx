import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DIalog/DialogItem";
import {Message} from "./Message/Message";

type DialogsDataType = {
   id: number
   name: string
}

type MessagesDataType = {
   id: number
   message: string
}

export const Dialogs = () => {

   const dialogs: Array<DialogsDataType> = [
      {id: 1, name: "Ramzan"},
      {id: 2, name: "Billy"},
      {id: 3, name: "Islam"},
      {id: 4, name: "Abdurrahman"},
   ]

   const messages: Array<MessagesDataType> = [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How are You?'},
      {id: 3, message: 'Mukha vu ho?'},
      {id: 4, message: 'Yo, whats up?'},
   ]

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
