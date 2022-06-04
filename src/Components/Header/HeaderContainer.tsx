import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {getAuthUserDataAC, logout} from "../../redux/authReducer";

type MapStateToPropsType = {
   isAuth: boolean
   login: null | string
   logout?:  () => void
}

type MapDispatchToPropsType = {
   getAuthUserDataAC: () => void
}

export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderPropsType, any> {
   componentDidMount() {
      this.props.getAuthUserDataAC()
   }

   render() {
      return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
   }
}

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login,
   }
}

export default connect(mapStateToProps, {getAuthUserDataAC, logout})(HeaderContainer)

