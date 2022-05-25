import React, {FC} from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderType = {
   isAuth: boolean,
   login: null | string
}

const Header: FC<HeaderType> = ({isAuth, login, ...props}) => {
   return (
      <header className={classes.header}>
         <img src="https://cryptologos.cc/logos/aave-aave-logo.png" alt=""/>

         <div className={classes.loginBlock}>
            {isAuth ? login
               : <NavLink to={'/login'}>login</NavLink>
            }

         </div>
      </header>
   );
};

export {Header};
