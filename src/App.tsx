import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import {ActionsTypes, ProfilePageType, StateType, StoreType} from "./redux/store";
import {ReducersType} from "./redux/redux-store";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";

export type AppType = {
   store: ReducersType
   dispatch: (action: ActionsTypes) => void
}

function App(props: AppType) {
   const state = props.store.getState()
   return (
      <div className="app-wrapper">
         <Header/>
         <NavBar/>
         <div className='app-wrapper-content'>
            <Routes>
               <Route path="/profile" element={<Profile
                  store={props.store}
               />}/>
               <Route path="/dialogs" element={<DialogsContainer state={state.dialogsPage} store={props.store}/>}/>
            </Routes>
         </div>
      </div>


   )
}

export default App;
