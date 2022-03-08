import React from 'react';
import classes from './Dialogs.module.css'

export const Dialogs = () => {
   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
            <div className={(`${classes.dialog} ${classes.active}`)}>Ramzan</div>
            <div className={classes.dialog}>Billy</div>
            <div className={classes.dialog}>Islam</div>
            <div className={classes.dialog}>Isreal</div>

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
