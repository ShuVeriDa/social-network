import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {
   setCurrentPage, UserType,
   toggleIsFollowingProgressAC, getUsers, follow, unfollow,
} from "../../redux/userReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {RootReducerType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export type MapStateToPropsFactoryType = {
   users: UserType[]
   pageSize: number
   totalUsersCount: number
   currentPage: number
   isFetching: boolean
   followingInProgress: Array<boolean | number>
}

export type MapDispatchToPropsFactoryType = {
   follow: (userID: number) => void
   unfollow: (userID: number) => void
   setCurrentPage: (pageNumber: number) => void
   toggleIsFollowingProgressAC: (isFetching: boolean, userId: number) => void
   getUsers: (currentPage: number, pageSize: number) => void
}

export type UserPropsType = MapStateToPropsFactoryType & MapDispatchToPropsFactoryType

type UsersUsersContainerType = {
   users: UserType[]
   pageSize: number
   totalUsersCount: number
   currentPage: number
   isFetching: boolean
   follow: (userID: number) => void
   unfollow: (userID: number) => void
   setUsers: (users: UserType[]) => void
   setCurrentPage: (pageNumber: number) => void
   setTotalUsersCount: (totalCount: number) => void
   toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UserPropsType, any> {
   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
   }

   onPageChanged = (pageNumber: number) => {
      this.props.getUsers(pageNumber, this.props.pageSize)
   }

   render() {
      return (
         <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
            />
         </>

      );
   }
}

const mapStateToPropsFactory = (state: RootReducerType): MapStateToPropsFactoryType => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress,
   }
}

export default compose<ComponentType>(
   connect(mapStateToPropsFactory, {
      follow, unfollow, setCurrentPage, toggleIsFollowingProgressAC, getUsers
   }),
   withAuthRedirect,
)(UsersContainer)
