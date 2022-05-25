import {Dispatch} from "redux";
import {authAPI} from "../Components/api/api";

export const SET_USER_DATA = "SET-USER-DATA"

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
            ...action.data,
            isAuth: true,
         }
      default:
         return state
   }
}

export type authReducerACType =
   ReturnType<typeof setAuthUserDataAC>

export const setAuthUserDataAC = (userId: number, email: string, login: string) => {
   return {
      type: SET_USER_DATA,
      data: {
         userId,
         email,
         login
      }
   } as const
}

export const getAuthUserDataAC = () => (dispatch: Dispatch) => {
   authAPI.me()
      .then(response => {
         if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setAuthUserDataAC(id, login, email))
         }
      })
}