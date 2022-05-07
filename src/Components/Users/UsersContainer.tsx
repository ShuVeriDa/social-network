import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
   follow, initialStateType, setCurrentPage,
   setUsers, setTotalUsersCount, toggleIsFetching,
   unfollow, UserType,
} from "../../redux/userReducer";
import axios from "axios";
import {Users} from "./Users";
import preloader from '../../assets/images/preloader.png'
import {Preloader} from "../common/Preloader/Preloader";

export type MapStateToPropsFactoryType = {
   usersPage: initialStateType
}

export type MapDispatchToPropsFactoryType = {
   follow: (userID: number) => void
   unfollow: (userID: number) => void
   setUsers: (users: UserType[]) => void
   setCurrentPage: (pageNumber: number) => void
   setTotalUsersCount: (totalCount: number) => void
   toggleIsFetching: (isFetching: boolean) => void
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
   toggleIsFetching: (isFetching: boolean) => void
   isFetching: boolean
}

class UsersContainer extends React.Component<UsersUsersContainerType, any> {
   componentDidMount() {
      this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
         })
   }

   onPageChanged = (pageNumber: number) => {
      this.props.setCurrentPage(pageNumber)
      this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
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
            />
      </>

      );
   }
}

const mapStateToPropsFactory = (state: MapStateToPropsFactoryType) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching
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
})(UsersContainer)