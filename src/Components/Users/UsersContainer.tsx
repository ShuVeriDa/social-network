import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {
   setCurrentPage, UserType, toggleIsFollowingProgressAC, requestUsers,
   follow, unfollow,
} from "../../redux/userReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {RootReducerType} from "../../redux/redux-store";
import {compose} from "redux";
import {
   getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize,
   getTotalUsersCount, getUsers,
} from "../../redux/usersSelectors";

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
      const {pageSize, currentPage} = this.props
      this.props.getUsers(currentPage, pageSize)
   }

   onPageChanged = (pageNumber: number) => {
      const {pageSize} = this.props
      this.props.getUsers(pageNumber, pageSize)
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
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state),
   }
}

export default compose<ComponentType>(
   connect(mapStateToPropsFactory, {
      follow, unfollow, setCurrentPage, toggleIsFollowingProgressAC, getUsers: requestUsers
   }),
)(UsersContainer)
