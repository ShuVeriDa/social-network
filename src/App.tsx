import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import {StateType, StoreType} from "./redux/state";

export type AppType = {
   store: StoreType
   state: StateType
   addPost: (postText: string) => void
   updateNewPostText: (newPost: string) => void
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
                  addPost={props.store.addPost.bind(props.store)}
                  updateNewPostText={props.store.updateNewPostText.bind(props.store)}
               />}/>
               <Route path="/dialogs" element={<Dialogs state={state.dialogsPage}/>}/>
            </Routes>
         </div>
      </div>


   )
}

export default App;
