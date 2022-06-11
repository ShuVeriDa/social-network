import {Dispatch} from "redux";
import {getAuthUserDataAC} from "./authReducer";

export const SET_INITIALIZED_SUCCESS = "SET-INITIALIZED-SUCCESS"

export type initialStateType = {
   initialized: boolean
}

const initialState: initialStateType = {
   initialized: false
}

export const appReducer = (state: initialStateType = initialState, action: appReducerACType): initialStateType => {
   switch (action.type) {
      case SET_INITIALIZED_SUCCESS:
         return {
            ...state,
            initialized: true,
         }
      default:
         return state
   }
}

export type appReducerACType =
   ReturnType<typeof inititalizedSucces>

export const inititalizedSucces = () => ({type: SET_INITIALIZED_SUCCESS} as const)

export const initializeApp = () => (dispatch: Dispatch) => {
   // @ts-ignore
   let promise = dispatch(getAuthUserDataAC())
   Promise.all([promise])
      .then(() => {
         dispatch(inititalizedSucces())
      })
}