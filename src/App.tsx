import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import { StoreType} from "./redux/state";

export type AppType = {
   store: StoreType
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
                  profilePage={state.profilePage}
                  dispatch={props.store.dispatch.bind(props.store)}
               />}/>
               <Route path="/dialogs" element={<Dialogs state={state.dialogsPage}/>}/>
            </Routes>
         </div>
      </div>


   )
}

export default App;
