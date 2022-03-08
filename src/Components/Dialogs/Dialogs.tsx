import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
            <div className={(`${classes.dialog} ${classes.active}`)}>
               <NavLink to={"/dialogs/1"}>Ramzan</NavLink>
            </div>
            <div className={classes.dialog}>
               <NavLink to={"/dialogs/2"}>Billy</NavLink>
            </div>
            <div className={classes.dialog}>
               <NavLink to={"/dialogs/3"}>Islam</NavLink>
            </div>
            <div className={classes.dialog}>
               <NavLink to={"/dialogs/4"}>Abdurrahman</NavLink>
            </div>

         </div>
         <div className={classes.messages}>
            <div className={classes.message}>Hi</div>
            <div className={classes.message}>How are you?</div>
            <div className={classes.message}>What happen?</div>
            <div className={classes.message}>What's up?</div>
         </div>
      </div>
   );
}
