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
import axios from "axios";
import {Users} from "./Users";

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

export type UserPropsType = MapStateToPropsFactoryType & MapDispatchToPropsFactoryType

type UsersUsersContainerType = {
   users: UserType[]
   pageSize: number
   totalUsersCount: number
   currentPage: number
   follow: (userID: number) => void
   unfollow: (userID: number) => void
   setUsers: (users: UserType[]) => void
   setCurrentPage: (pageNumber: number) => void
   setTotalUsersCount: (totalCount: number) => void
}

class UsersContainer extends React.Component<UsersUsersContainerType, any> {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
         })
   }

   onPageChanged = (pageNumber: number) => {
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items)
         })
   }

   render() {

      return (
         <Users users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
         />
      );
   }
}

const mapStateToPropsFactory = (state: MapStateToPropsFactoryType) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
   }
}

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

export default connect(mapStateToPropsFactory, mapDispatchToPropsFactory)(UsersContainer)