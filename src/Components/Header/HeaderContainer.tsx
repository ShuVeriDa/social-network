import React from "react";
import classes from './Header.module.css'
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/authReducer";
import {RootReducerType} from "../../redux/redux-store";

type MapStateToPropsType = {
   isAuth: boolean
   login: null
}

type MapDispatchToPropsType = {}

type HeaderComponentPropsType = {
}

class HeaderContainer extends React.Component<any, any> {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
         withCredentials: true
      })
         .then(response => {
            if (response.data.resultCode === 0) {
               let {id, login, email} = response.data.data
               this.props.setAuthUserDataAC({id, login, email})
            }
         })
   }

   render() {
      return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>
   }
}

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login,
   }
}

export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer)

