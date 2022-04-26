import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {followAC, initialStateType, setUsersAC, unfollowAC, UserType} from "../../redux/userReducer";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsFactoryType = {
   usersPage: initialStateType
}

type MapDispatchToPropsFactoryType = {
   follow: (userID: number) => void
   unfollow: (userID: number) => void
   setUsers: (users: UserType[]) => void
}

const mapStateToPropsFactory = (state: AppStateType): MapStateToPropsFactoryType => {
   return {
      usersPage: state.users
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
      }

   }
}

export default connect(mapStateToPropsFactory, mapDispatchToPropsFactory)(Users)