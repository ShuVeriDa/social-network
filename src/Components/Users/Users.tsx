import classes from "./users.module.css";
import {UserType} from "../../redux/userReducer";
import userPhoto from "../../assets/images/user.png";
import React from "react";

export type UsersPropsType = {
   users: UserType[]
   pageSize: number
   totalUsersCount: number
   currentPage: number
   follow: (userID: number) => void
   unfollow: (userID: number) => void
   onPageChanged: (pageNumber: number) => void
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
                        <div><img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                  className={classes.usersPhoto}/></div>
                        <div>
                           {u.followed
                              ? <button onClick={() => props.unfollow(u.id)}>UnFollow</button>
                              : <button onClick={() => props.follow(u.id)}>Follow</button>
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