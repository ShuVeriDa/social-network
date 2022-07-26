import React, {ComponentType} from 'react';
import './App.css';
import {NavBar} from "./Components/NavBar/NavBar";
import {Routes, Route, useParams} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {initializeApp} from "./redux/appReducer";
import {Preloader} from "./Components/common/Preloader/Preloader";
import {RootReducerType} from "./redux/redux-store";
import {compose} from "redux";
import {connect} from "react-redux";

export type AppType = {
   initializeApp: () => void
}

export type MapStateToPropsType = {
   initialized: boolean
}

export type MapDispatchToPropsType = {}

type AppPropsType = MapStateToPropsType & MapDispatchToPropsType & AppType

class App extends React.Component<AppPropsType> {
   componentDidMount() {
      this.props.initializeApp()
   }

   render() {
      if (!this.props.initialized) {
         return <Preloader/>
      }

      return (
         <div className="app-wrapper">
            <HeaderContainer/>
            <NavBar/>
            <div className='app-wrapper-content'>
               <Routes>
                  <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                  <Route path='/profile' element={<ProfileContainer/>}/>
                  <Route path="/dialogs" element={<DialogsContainer/>}/>
                  <Route path="/users" element={<UsersContainer/>}/>
                  <Route path="/login" element={<Login/>}/>
               </Routes>
            </div>
         </div>
      )
   }
}

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
   return {
      initialized: state.app.initialized
   }

}

const withRouter = (WrappedComponent: typeof React.Component) => {
   return (props: object) => {

      const params = useParams(); //useParams возвращает объект пары key/value (ключ/значение) параметров URL.

      return (
         <WrappedComponent {...props} router={params}/>
      );
   }
}

export default compose<ComponentType>(
   withRouter,
   connect(mapStateToProps, {initializeApp})
   )(App);
