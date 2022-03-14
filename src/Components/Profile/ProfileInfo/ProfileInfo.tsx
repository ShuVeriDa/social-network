import React from 'react';
import classes from './ProfileInfo.module.css'

export const ProfilelInfo = () => {
   return (
      <div className={classes.profileInfo}>
         <div>
            <img
               src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=800&h=300"
               alt=""/>
         </div>
         <div className={classes.descriptionBlock}>
            ava + description
         </div>
      </div>
   );
};