import React, { FC } from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DIalog/DialogItem";
import {Message} from "./Message/Message";
import { DialogsPageType} from "../../redux/state";


type DialogsType = {
   state: DialogsPageType
}

export const Dialogs: FC<DialogsType> = ({state}) => {

   const dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/> )
   const messagesElements = state.messages.map(message => <Message key={message.id} message={message.message}/> )

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
