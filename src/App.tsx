import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";


export type AppType = {

}

function App(props: AppType) {
   return (
      <div className="app-wrapper">
         <Header/>
         <NavBar/>
         <div className='app-wrapper-content'>
            <Routes>
               <Route path='/profile/:userId' element={<ProfileContainer/>}/>
               <Route path='/profile' element={<ProfileContainer />} />
               <Route path="/dialogs" element={<DialogsContainer />}/>
               <Route path="/users" element={<UsersContainer />}/>
            </Routes>
         </div>
      </div>
   )
}

export default App;
