import {UserType} from "../../redux/userReducer";
import React from "react";
import {Paginator} from "./Paginator";
import {User} from "./User";

export type UsersPropsType = {
   users: UserType[]
   pageSize: number
   totalUsersCount: number
   currentPage: number
   follow: (userID: number) => void
   unfollow: (userID: number) => void
   onPageChanged: (pageNumber: number) => void
   followingInProgress: Array<boolean | number>
}

export const Users = (
   {
      users, pageSize, totalUsersCount, currentPage,
      follow, unfollow, onPageChanged, followingInProgress,
      ...props
   }: UsersPropsType) => {

   return (
      <div>
         <Paginator pageSize={pageSize}
                    totalUsersCount={totalUsersCount}
                    currentPage={currentPage}
                    onPageChanged={onPageChanged}
                    portionSize={10}
         />
         {
            users.map((u: UserType) => <User key={u.id}
                                             user={u}
                                             follow={follow}
                                             unfollow={unfollow}
                                             followingInProgress={followingInProgress}
            />)
         }
      </div>
   );
};