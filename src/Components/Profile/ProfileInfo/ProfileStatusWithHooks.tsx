import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import classes from './ProfileInfo.module.css'

type ProfileStatusType = {
   status: string
   updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: FC<ProfileStatusType> = ({ updateStatus, ...props}) => {
   const [editMode, setEditMode] = useState<boolean>(false)
   const [status, setStatus] = useState(props.status)

   useEffect(() => {
      setStatus(props.status)
   }, [props.status])

   const activateEditMode = () => {
      setEditMode(true)
   }

   const deactivateEditMode = () => {
      setEditMode(false)
      updateStatus(status)
   }

   const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
      setStatus(e.currentTarget.value)
   }

   return (
      <div className={classes.profileInfo}>
         {!editMode &&
            <div>
               <span onDoubleClick={activateEditMode}>{props.status || "----"}</span>
            </div>
         }
         {editMode &&
             <div>
                 <input onBlur={deactivateEditMode} autoFocus={true} onChange={onStatusChange}/>
             </div>
         }
      </div>
   );
}