import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfileAC, ProfilePageType, setUserProfileAC} from "../../redux/profileReducer";
import {Navigate, useLocation, useMatch, useNavigate, useParams} from "react-router-dom";
import { RootReducerType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export type MapStateToPropsType = {
   profile: null
   // isAuth: boolean
}

export type MapDispatchToPropsType = {
   setUserProfileAC: (profile: any) => void
   getUserProfileAC: (userId: number) => void
   profile: null
   router: any
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType, any> {
   componentDidMount() {
      let userId = this.props.router.userId || 2
      this.props.getUserProfileAC(userId)
   }

   render() {

     return (
        <Profile {...this.props} profile={this.props.profile}/>
     )
   }
}

export const withRouter = (WrappedComponent: typeof React.Component) => {
   return (props: object) => {

      const params = useParams(); //useParams возвращает объект пары key/value (ключ/значение) параметров URL.

      return (
         <WrappedComponent {...props} router={params}/>
      );
   }
}

let mapStateToProps = (state: RootReducerType): MapStateToPropsType => ({
   profile: state.profilePage.profile,
})

export default compose<ComponentType>(
   connect(mapStateToProps, {getUserProfileAC: getUserProfileAC}),
   withRouter,
   withAuthRedirect
)(ProfileContainer)
