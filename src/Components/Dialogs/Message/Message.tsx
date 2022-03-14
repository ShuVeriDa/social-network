import React, {FC} from 'react';
import classes from './Message.module.css'

type MessageType = {
   message: string
}

export const Message: FC<MessageType> = ({message}) => {
   return (
      <div>
         <div className={classes.dialog}>{message}</div>
      </div>
   );
};