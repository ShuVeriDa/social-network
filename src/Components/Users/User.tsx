import classes from "./users.module.css";
import {UserType} from "../../redux/userReducer";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";

export type UserPropsType = {
   user: UserType
   follow: (userID: number) => void
   unfollow: (userID: number) => void
   followingInProgress: Array<boolean | number>
}

export const User = ({
     user, unfollow, followingInProgress, follow,
   }: UserPropsType) => {

   return (
      <div>

                     <span>
                        <div>
                           <NavLink to={'/profile/' + user.id}>
                              <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                                   className={classes.usersPhoto}/>
                           </NavLink>
                        </div>
                        <div>
                           {user.followed
                              ? <button disabled={followingInProgress.some(id => id === user.id)}
                                        onClick={() => {
                                           unfollow(user.id)
                                        }
                                        }>UnFollow</button>
                              : <button disabled={followingInProgress.some(id => id === user.id)}
                                        onClick={() => {
                                           follow(user.id)
                                        }
                                        }>Follow</button>
                           }

                        </div>
                     </span>
                     <span>
                        <span>
                           <div>{user.name}</div>
                           <div>{user.status}</div>
                        </span>
                        <span>
                           <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                     </span>
                  </div>

   );
};