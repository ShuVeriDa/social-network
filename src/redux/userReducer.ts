import {Dispatch} from "redux";
import {usersAPI} from "../Components/api/api";
import {updateObjectInArray} from "../utils/object-helpers";

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

export const userReducer = (state: initialStateType = initialState, action: userReducerACType): initialStateType => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
         }
      case UNFOLLOW:
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
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

type followOrUnFollowSuccess = typeof followSuccess | typeof unfollowSuccess

export type userReducerACType =
   ReturnType<typeof followSuccess> |
   ReturnType<typeof unfollowSuccess> |
   ReturnType<typeof setUsers> |
   ReturnType<typeof setCurrentPage> |
   ReturnType<typeof setTotalUsersCount> |
   ReturnType<typeof toggleIsFetching> |
   ReturnType<typeof toggleIsFollowingProgressAC>

export const followSuccess = (userID: number) => (
   {type: FOLLOW, userID} as const
)
export const unfollowSuccess = (userID: number) => (
   {type: UNFOLLOW, userID} as const
)
export const setUsers = (users: UserType[]) => (
   {type: SET_USERS, users} as const
)
export const setCurrentPage = (currentPage: number) => (
   {type: SET_CURRENT_PAGE, currentPage} as const
)
export const setTotalUsersCount = (totalUsersCount: number) => (
   {type: SET_TOTAL_USERS_COUNT, count: totalUsersCount} as const
)
export const toggleIsFetching = (isFetching: boolean) => (
   {type: TOGGLE_IS_FETCHING, isFetching} as const
)
export const toggleIsFollowingProgressAC = (isFetching: boolean, userId: number) => (
   {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const
)

export const requestUsers = (page: number, pageSize: number) => async (dispatch: Dispatch) => {

   dispatch(toggleIsFetching(true))
   dispatch(setCurrentPage(page))

   const data = await usersAPI.getUsers(page, pageSize)

   dispatch(toggleIsFetching(false))
   dispatch(setUsers(data.items))
   dispatch(setTotalUsersCount(data.totalCount))
}

const followUnFollowFlow = async(dispatch: Dispatch, userId: number, apiMethod: any, actionCreator: followOrUnFollowSuccess) => {
   dispatch(toggleIsFollowingProgressAC(true, userId))
   const response = await apiMethod(userId)

   if (response.data.resultCode === 0) {
      dispatch(actionCreator(userId))
   }
   dispatch(toggleIsFollowingProgressAC(false, userId))
}

export const follow = (userId: number) => async (dispatch: Dispatch) => {
   followUnFollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}

export const unfollow = (userId: number) => async (dispatch: Dispatch) => {
   followUnFollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}