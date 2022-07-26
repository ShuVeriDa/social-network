import classes from "./Paginator.module.css";
import React from "react";

export type PaginatorPropsType = {
   pageSize: number
   totalUsersCount: number
   currentPage: number
   onPageChanged: (pageNumber: number) => void
}

export const Paginator = ({pageSize, totalUsersCount, currentPage, onPageChanged, ...props}: PaginatorPropsType) => {
   let pagesCount = Math.ceil(totalUsersCount / pageSize)

   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }

   return (
         <div>
            {pages.map(p => {
               return <span className={currentPage === p ? classes.selectedPage : ""}
                            onClick={(e) => onPageChanged(p)}>
                  {p}
                    </span>

            })}
         </div>
   );
};