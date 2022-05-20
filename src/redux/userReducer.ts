import {Dispatch} from "redux";
import {usersAPI} from "../Components/api/api";

export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET-USERS"
export const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
export const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
export const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
export const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS"

export type initialStateType = {
   users: Array<UserType>
   pageSize: number
   totalUsersCount: number
   currentPage: number
   isFetching: boolean
   followingInProgress: Array<boolean | number>
}

export type UserType = {
   id: number
   followed: boolean
   name: string
   status: string
   location: UsersLocationType
   photoUrl: string
   photos: PhotosType
}

export type PhotosType = {
   small: string
   large: string
}

export type UsersLocationType = {
   city: string
   country: string
}

const initialState: initialStateType = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: true,
   followingInProgress: []
}

export const userReducer = (state:initialStateType = initialState, action: userReducerACType): initialStateType => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userID) {
                  return {...u, followed: true}
               }
                  return u
            }
            )
         }
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userID) {
                  return {...u, followed: false}
               }
                  return u
            }),

         }
      case SET_USERS:
         return {
            ...state,
            users: action.users
         }
      case SET_CURRENT_PAGE:
         return {...state, currentPage: action.currentPage}
      case SET_TOTAL_USERS_COUNT:
         return {...state, totalUsersCount: action.count}
      case TOGGLE_IS_FETCHING:
         return {...state, isFetching: action.isFetching}
      case TOGGLE_IS_FOLLOWING_PROGRESS:
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter(id => id !== action.userId),
         }
      default:
         return state
   }
}

export type userReducerACType =
   ReturnType<typeof followSucces> |
   ReturnType<typeof unfollowSucces> |
   ReturnType<typeof setUsers> |
   ReturnType<typeof setCurrentPage> |
   ReturnType<typeof setTotalUsersCount> |
   ReturnType<typeof toggleIsFetching> |
   ReturnType<typeof toggleIsFollowingProgressAC
>

export const followSucces = (userID: number) => (
   {type: FOLLOW, userID} as const
)
export const unfollowSucces = (userID: number) => (
   {type: UNFOLLOW, userID} as const
)
export const setUsers = (users: UserType[]) => (
   {type: SET_USERS, users }as const
)
export const setCurrentPage = (currentPage: number) => (
   {type: SET_CURRENT_PAGE, currentPage }as const
)
export const setTotalUsersCount = (totalUsersCount: number) => (
   {type: SET_TOTAL_USERS_COUNT, count: totalUsersCount }as const
)
export const toggleIsFetching = (isFetching: boolean) => (
   {type: TOGGLE_IS_FETCHING, isFetching }as const
)
export const toggleIsFollowingProgressAC = (isFetching: boolean, userId: number) => (
   {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId }as const
)

export const getUsers= (currentPage: number, pageSize: number) => {

   return (dispatch: Dispatch) => {

      dispatch(toggleIsFetching(true))

      usersAPI.getUsers(currentPage, pageSize)
         .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
         })
   }
}

export const follow= (userId: number) => {

   return (dispatch: Dispatch) => {

      dispatch(toggleIsFollowingProgressAC(true, userId))
      usersAPI.follow(userId)
         .then(response => {
            if (response.data.resultCode == 0) {
               dispatch(followSucces(userId))
            }
            dispatch(toggleIsFollowingProgressAC(false, userId))
         })
   }
}

export const unfollow= (userId: number) => {

   return (dispatch: Dispatch) => {

      dispatch(toggleIsFollowingProgressAC(true, userId))
      usersAPI.unfollow(userId)
         .then(response => {
            if (response.data.resultCode == 0) {
               dispatch(unfollowSucces(userId))
            }
            dispatch(toggleIsFollowingProgressAC(false, userId))
         })
   }
}