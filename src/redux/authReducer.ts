export const SET_USER_DATA = "SET-USER-DATA"

type initialStateType = {
   userId: null,
   email: null,
   login: null,
   isAuth: boolean,
}

const initialState: initialStateType = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,

}

export const authReducer = (state: initialStateType = initialState, action: authReducerACType): initialStateType => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.data,
            isAuth: true,
         }
      default:
         return state
   }
}

export type authReducerACType =
   ReturnType<typeof setAuthUserDataAC>

export const setAuthUserDataAC = (data: any, userId: number, email: string, login: string) => (
   {type: SET_USER_DATA, data, userId, email, login} as const
)