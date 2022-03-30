import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import {StateType} from "./redux/state";

export type AppType = {
   state: StateType
   addPost: () => void
   updateNewPostText: (newPost: string) => void
}

function App(props: AppType) {
   return (
         <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
               <Routes>
                  <Route path="/profile" element={<Profile profilePage={props.state.profilePage}
                                                           addPost={props.addPost}
                                                           updateNewPostText={props.updateNewPostText}
                                                   />}
                  />
                  <Route path="/dialogs" element={<Dialogs state={props.state.dialogsPage} />}/>
               </Routes>
            </div>
         </div>


   )
}

export default App;
