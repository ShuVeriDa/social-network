import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
   followAC,
   initialStateType,
   setCurrentPageAC,
   setUsersAC, setUsersTotalCountAC,
   unfollowAC,
   UserType
} from "../../redux/userReducer";
import {AppStateType} from "../../redux/redux-store";
import {User} from "./Users";

export type MapStateToPropsFactoryType = {
   usersPage: initialStateType
}

export type MapDispatchToPropsFactoryType = {
   follow: (userID: number) => void
   unfollow: (userID: number) => void
   setUsers: (users: UserType[]) => void
   setCurrentPage: (pageNumber: number) => void
   setTotalUsersCount: (totalCount: number) => void
}

const mapStateToPropsFactory = (state: MapStateToPropsFactoryType) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
   }
}

export type UserPropsType = MapStateToPropsFactoryType & MapDispatchToPropsFactoryType

const mapDispatchToPropsFactory = (dispatch: Dispatch): MapDispatchToPropsFactoryType => {
   return {
      follow: (userID: number) => {
         dispatch(followAC(userID))
      },
      unfollow: (userID: number) => {
         dispatch(unfollowAC(userID))
      },
      setUsers: (users: UserType[]) => {
         dispatch(setUsersAC(users))
      },
      setCurrentPage: (pageNumber: number) => {
         dispatch(setCurrentPageAC(pageNumber))
      },
      setTotalUsersCount: (totalCount: number) => {
         dispatch(setUsersTotalCountAC(totalCount))
      }

   }
}

export default connect(mapStateToPropsFactory, mapDispatchToPropsFactory)(User)