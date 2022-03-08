import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";

function App() {
   return (
         <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
               <Routes>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/dialogs" element={<Dialogs/>}/>
               </Routes>
            </div>
         </div>


   )
}

export default App;
