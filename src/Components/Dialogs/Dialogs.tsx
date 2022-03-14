import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {Dialog} from "./DIalog/Dialog";
import {Message} from "./Message/Message";

export const Dialogs = () => {
   let dialogsData = [
      {id: 1, name: "Ramzan"},
      {id: 2, name: "Billy"},
      {id: 3, name: "Islam"},
      {id: 4, name: "Abdurrahman"},
   ]

   let messagesData = [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How are You?'},
      {id: 3, message: 'Mukha vu ho?'},
      {id: 4, message: 'Yo, whats up?'},
   ]

   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
           <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
           <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
           <Dialog name={dialogsData[2].name} id={dialogsData[2].id} />
           <Dialog name={dialogsData[3].name} id={dialogsData[3].id} />

         </div>
         <div className={classes.messages}>
            <Message message={messagesData[0].message}/>
            <Message message={messagesData[1].message}/>
            <Message message={messagesData[2].message}/>
            <Message message={messagesData[3].message}/>
         </div>
      </div>
   );
}
