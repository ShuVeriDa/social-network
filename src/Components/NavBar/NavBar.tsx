import React from "react";
import classes from './NavBar.module.css'
import {NavLink} from "react-router-dom";


export const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to={"/profile/"} className={({isActive}) => isActive ? classes.active : classes.NavLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/dialogs/"} className={({isActive}) => isActive ? classes.active : classes.NavLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <a>News</a>
            </div>
            <div className={classes.item}>
                <a>Music</a>
            </div>
            <div className={classes.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
};
