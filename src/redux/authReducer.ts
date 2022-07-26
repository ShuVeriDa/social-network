import {Dispatch} from "redux";
import {authAPI} from "../Components/api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "samurai-network/auth/SET-USER-DATA"

export type initialStateType = {
   userId: null | number,
   email: null | string
   login: null | string
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
            ...action.payload,
         }
      default:
         return state
   }
}

export type authReducerACType =
   ReturnType<typeof setAuthUserDataAC>

export const setAuthUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
   return {
      type: SET_USER_DATA,
      payload: {
         userId,
         email,
         login,
         isAuth
      }
   } as const
}

export const getAuthUserDataAC = () => async (dispatch: Dispatch) => {
   const response = await authAPI.me()

   if (response.data.resultCode === 0) {
      let {id, login, email} = response.data.data
      dispatch(setAuthUserDataAC(id, login, email, true))
   }

   return 'yo'
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
   const response = await authAPI.login(email, password, rememberMe)

   if (response.data.resultCode === 0) {
      // @ts-ignore
      dispatch(getAuthUserDataAC())
   } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
      dispatch(stopSubmit('login', {_error: message}))
   }
}
export const logout = () => async (dispatch: Dispatch) => {
   const response = await authAPI.logout()

   if (response.data.resultCode === 0) {
      dispatch(setAuthUserDataAC(null, null, null, false))
   }
}