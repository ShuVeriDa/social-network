import React from 'react';
import {connect} from "react-redux";
import {
   follow, setCurrentPage,
   setUsers, setTotalUsersCount, toggleIsFetching,
   unfollow, UserType, toggleIsFollowingProgressAC,
} from "../../redux/userReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {RootReducerType} from "../../redux/redux-store";
import {usersAPI} from "../api/api";

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
   setUsers: (users: UserType[]) => void
   setCurrentPage: (pageNumber: number) => void
   setTotalUsersCount: (totalCount: number) => void
   toggleIsFetching: (isFetching: boolean) => void
   toggleIsFollowingProgressAC: (isFetching: boolean, userId: number) => void
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
      this.props.toggleIsFetching(true)
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
         .then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
         })
   }

   onPageChanged = (pageNumber: number) => {
      this.props.setCurrentPage(pageNumber)
      this.props.toggleIsFetching(true)
         usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
         })
   }

   render() {

      return (
         <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
                   toggleIsFollowingProgressAC={this.props.toggleIsFollowingProgressAC}
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

// const mapDispatchToPropsFactory = (dispatch: Dispatch): MapDispatchToPropsFactoryType => {
//    return {
//       follow: (userID: number) => {
//          dispatch(followAC(userID))
//       },
//       unfollow: (userID: number) => {
//          dispatch(unfollowAC(userID))
//       },
//       setUsers: (users: UserType[]) => {
//          dispatch(setUsersAC(users))
//       },
//       setCurrentPage: (pageNumber: number) => {
//          dispatch(setCurrentPageAC(pageNumber))
//       },
//       setTotalUsersCount: (totalCount: number) => {
//          dispatch(setUsersTotalCountAC(totalCount))
//       },
//       toggleIsFetching: (isFetching: boolean) => {
//          dispatch(setisFetchingAC(isFetching))
//       },
//
//    }
// }

export default connect(mapStateToPropsFactory, {
   follow, unfollow,
   setUsers, setCurrentPage,
   setTotalUsersCount, toggleIsFetching,
   toggleIsFollowingProgressAC,
})(UsersContainer)