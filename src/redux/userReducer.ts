export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET-USERS"
export const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
export const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"

export type initialStateType = {
   users: UserType[]
   pageSize: number
   totalUsersCount: number
   currentPage: number
}

export type UserType = {
   id: number
   followed: boolean
   name: string
   status: string
   location: UsersLocationType
   photoUrl: string
   photos: {
      small: string
      large: string
   }
}

export type UsersLocationType = {
   city: string
   country: string
}

const initialState: initialStateType = {
   users: [ ],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
}

export const userReducer = (state:initialStateType = initialState, action: userReducerACType) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userID)
                  return {...u, followed: true}
            }),

         }
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userID)
                  return {...u, followed: false}
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
      default:
         return state
   }
}

export type userReducerACType =
   ReturnType<typeof followAC> |
   ReturnType<typeof unfollowAC> |
   ReturnType<typeof setUsersAC> |
   ReturnType<typeof setCurrentPageAC> |
   ReturnType<typeof setUsersTotalCountAC>

export const followAC = (userID: number) => (
   {type: FOLLOW, userID} as const
)
export const unfollowAC = (userID: number) => (
   {type: UNFOLLOW, userID} as const
)
export const setUsersAC = (users: UserType[]) => (
   {type: SET_USERS, users }as const
)
export const setCurrentPageAC = (currentPage: number) => (
   {type: SET_CURRENT_PAGE, currentPage }as const
)
export const setUsersTotalCountAC = (totalUsersCount: number) => (
   {type: SET_TOTAL_USERS_COUNT, count: totalUsersCount }as const
)