import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import {DialogsDataType, MessagesDataType, PostsType} from "./index";

export type AppType = {
   posts: Array<PostsType>
   dialogs: Array<DialogsDataType>
   messages: Array<MessagesDataType>
}

function App(props: AppType) {
   return (
         <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
               <Routes>
                  <Route path="/profile" element={<Profile posts={props.posts}/>}/>
                  <Route path="/dialogs" element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
               </Routes>
            </div>
         </div>


   )
}

export default App;
