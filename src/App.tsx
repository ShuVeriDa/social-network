import React from 'react';
import './App.css';
import {NavBar} from "./Components/NavBar/NavBar";
import {Routes, Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {LoginPage} from "./Components/Login/LoginPage";


export type AppType = {

}

function App(props: AppType) {
   return (
      <div className="app-wrapper">
         <HeaderContainer/>
         <NavBar/>
         <div className='app-wrapper-content'>
            <Routes>
               <Route path='/profile/:userId' element={<ProfileContainer/>}/>
               <Route path='/profile' element={<ProfileContainer />} />
               <Route path="/dialogs" element={<DialogsContainer />}/>
               <Route path="/users" element={<UsersContainer />}/>
               <Route path="/login" element={<LoginPage />}/>
            </Routes>
         </div>
      </div>
   )
}

export default App;
