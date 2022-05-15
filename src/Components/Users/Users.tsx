import classes from "./users.module.css";
import {toggleIsFollowingProgressAC, UserType} from "../../redux/userReducer";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

export type UsersPropsType = {
   users: UserType[]
   pageSize: number
   totalUsersCount: number
   currentPage: number
   follow: (userID: number) => void
   unfollow: (userID: number) => void
   onPageChanged: (pageNumber: number) => void
   toggleIsFollowingProgressAC: (isFetching: boolean, userId: number) => void
   followingInProgress: Array<boolean | number>
}

export const Users = (props: UsersPropsType) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }


   return (
      <div>
         <div>
            {pages.map(p => {
               return <span className={props.currentPage === p ? classes.selectedPage : ""}
                            onClick={(e) => props.onPageChanged(p)}>
                  {p}
                    </span>
            })}
         </div>
         {
            props.users.map((u: UserType) => {
               return (
                  <div key={u.id}>
                     <span>
                        <div>
                           <NavLink to={'/profile/' + u.id}>
                              <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                   className={classes.usersPhoto}/>
                           </NavLink>
                        </div>
                        <div>
                           {u.followed
                              ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                 props.toggleIsFollowingProgressAC(true, u.id)
                                 axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                       "API-KEY" : "c094e303-b7d4-4052-8343-1a5391056e3d"
                                    }
                                 })
                                    .then(response => {
                                       if (response.data.resultCode == 0) {
                                          props.unfollow(u.id)
                                       }
                                       props.toggleIsFollowingProgressAC(false, u.id)
                                    })
                              }}>UnFollow</button>
                              : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                 props.toggleIsFollowingProgressAC(true, u.id)
                                 axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                       "API-KEY" : "c094e303-b7d4-4052-8343-1a5391056e3d"
                                    }
                                 })
                                    .then(response => {
                                       if (response.data.resultCode == 0) {
                                          props.follow(u.id)
                                       }
                                       props.toggleIsFollowingProgressAC(false, u.id)
                                    })
                              }}>Follow</button>
                           }

                        </div>
                     </span>
                     <span>
                        <span>
                           <div>{u.name}</div>
                           <div>{u.status}</div>
                        </span>
                        <span>
                           <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                     </span>
                  </div>
               )
            })
         }
      </div>
   );
};