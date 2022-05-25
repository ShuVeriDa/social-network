import React from "react";
import classes from './Header.module.css'
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataAC, setAuthUserDataAC} from "../../redux/authReducer";
import {RootReducerType} from "../../redux/redux-store";
import {authAPI} from "../api/api";

type MapStateToPropsType = {
   isAuth: boolean
   login: null | string
}

type MapDispatchToPropsType = {
   getAuthUserDataAC: () => void
}

type HeaderComponentPropsType = {
}

export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderPropsType, any> {
   componentDidMount() {
      this.props.getAuthUserDataAC()
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

export default connect(mapStateToProps, {getAuthUserDataAC})(HeaderContainer)

