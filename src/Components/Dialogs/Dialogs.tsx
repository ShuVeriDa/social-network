import React, {ChangeEvent, FC} from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from "./DIalog/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType } from "../../redux/store";
import {Navigate} from "react-router-dom";

type DialogsType = {
   updateNewMessageBodyAC: (body: string) => void
   sendMessageAC: () => void
   dialogsPage: DialogsPageType
   isAuth: boolean
}

export const Dialogs: FC<DialogsType> = ({ ...props}) => {

   let state = props.dialogsPage

   const dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
   const messagesElements = state.messages.map(message => <Message key={message.id} message={message.message}/>)
   const newMessageBody = state.newMessageBody

   const onSendMessageClick = () => {
      props.sendMessageAC()
   }
   const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      let body = event.target.value
      props.updateNewMessageBodyAC(body)
   }

   if (props.isAuth == false) return <Navigate to={"/login"} />

   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={classes.messages}>
            <div>{messagesElements}</div>
            <div>
               <textarea value={newMessageBody}
                         onChange={onNewMessageChange}
                         placeholder={'Enter your message'}
               />
            </div>
            <div>
               <button onClick={onSendMessageClick}>Send</button>
            </div>
         </div>
      </div>
   );
}