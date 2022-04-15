import React, {FC} from 'react';
import classes from './Dialogs.module.css'
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import StoreContext from '../../StoreContext';


type DialogsContainerType = {

}

export const DialogsContainer: FC<DialogsContainerType> = ({ ...props}) => {
   return <StoreContext.Consumer>
      {(store: any) => {

         let state = store.getState().dialogsPage

         const onSendMessageClick = () => {
            store.dispatch(sendMessageAC())
         }
         const onNewMessageChange = (body: string) => {
            store.dispatch(updateNewMessageBodyAC(body))
         }
         return (
            <div className={classes.dialogs}>
               <Dialogs updateNewMessageBody={onNewMessageChange}
                        sendMessage={onSendMessageClick}
                        dialogsPage={state}
               />
            </div>
         )
      }
   }

   </StoreContext.Consumer>

}