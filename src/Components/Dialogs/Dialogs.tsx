import React, {FC} from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from "./DIalog/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/store";
import {Navigate} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

type DialogsType = {
   updateNewMessageBodyAC: (body: string) => void
   sendMessageAC: (newMessageBody: string) => void
   dialogsPage: DialogsPageType
   isAuth: boolean
}

export const Dialogs: FC<DialogsType> = ({ ...props}) => {

   let state = props.dialogsPage

   const dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
   const messagesElements = state.messages.map(message => <Message key={message.id} message={message.message}/>)

   const addNewMessage = (values: any) => {
      props.sendMessageAC(values.newMessageBody)
   }

   if (props.isAuth == false) return <Navigate to={"/login"} />

   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={classes.messages}>
            <div>{messagesElements}</div>
         </div>
         <AddMessageForm onSubmit={addNewMessage}/>
      </div>
   );
}