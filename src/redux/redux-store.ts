import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {userReducer} from "./userReducer";

export type ReducersType = typeof store

export const rootReducer = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   sidebarPage: sidebarReducer,
   usersPage: userReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

export default store