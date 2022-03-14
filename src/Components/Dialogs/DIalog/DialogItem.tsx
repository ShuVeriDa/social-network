import React, {FC} from 'react';
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogType = {
   name: string
   id: number
}

export const DialogItem: FC<DialogType> = ({name, id}) => {
   let path = "/dialogs/" + id
   return (
      <div>
         <div className={(`${classes.dialog} ${classes.active}`)}>
            <NavLink to={path}>{name}</NavLink>
         </div>
      </div>
   );
};
