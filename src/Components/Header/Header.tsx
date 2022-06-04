import React, {FC} from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderType = {
   isAuth: boolean,
   login: null | string
   logout?:  () => void
}

const Header: FC<HeaderType> = ({isAuth, login, logout, ...props}) => {
   return (
      <header className={classes.header}>
         <img src="https://cryptologos.cc/logos/aave-aave-logo.png" alt=""/>

         <div className={classes.loginBlock}>
            {isAuth
               ? <div>{login} - <button onClick={logout}>Log out</button></div>
               : <NavLink to={'/login'}>login</NavLink>
            }

         </div>
      </header>
   );
};

export {Header};
