import classes from "./Paginator.module.css";
import React, {useState} from "react";
import cn from 'classnames'

export type PaginatorPropsType = {
   pageSize: number
   totalUsersCount: number
   currentPage: number
   onPageChanged: (pageNumber: number) => void
   portionSize: number
}

export const Paginator = ({
                             pageSize,
                             totalUsersCount,
                             currentPage,
                             onPageChanged,
                             portionSize = 10,
                             ...props
                          }: PaginatorPropsType) => {
   const pagesCount = Math.ceil(totalUsersCount / pageSize)

   const pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }

   const portionCount = Math.ceil(pagesCount / portionSize)
   const [portionNumber, setPortionNumber] = useState<number>(1)
   const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
   const rightPortionPageNumber = portionNumber * portionSize

   return (
      <div className={classes.paginator}>
         {portionNumber > 1 &&
             <button onClick={() => {
                setPortionNumber(portionNumber - 1)
             }}>PREV</button>}

         {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
               return <span className={cn({[classes.selectedPage]: currentPage === p}, classes.pageNumber)}
                            onClick={(e) => onPageChanged(p)}
                           key={p}
               >
                  {p}
                    </span>

            })}

         {portionCount > portionNumber &&
             <button onClick={() => {setPortionNumber(portionNumber + 1 )}}>PREV</button>}
      </div>
   );
};