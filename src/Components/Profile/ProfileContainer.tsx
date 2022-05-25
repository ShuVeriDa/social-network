import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfileAC, ProfilePageType, setUserProfileAC} from "../../redux/profileReducer";
import {useLocation, useMatch, useNavigate, useParams} from "react-router-dom";
import { RootReducerType} from "../../redux/redux-store";
import {usersAPI} from "../api/api";

export type MapStateToPropsType = {
   profile: null
}

// type TypeType = {
//    profilePage: ProfilePageType
// }

export type MapDispatchToPropsType = {
   setUserProfileAC: (profile: any) => void
   profile: null
   router: any
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

export type ProfileContainerType = {
   profile: null
   setUserProfileAC: (profile: null) => void
   getUserProfileAC: (userId: number) => void
   router: any
}

export const withRouter = (WrappedComponent: typeof React.Component) => {
   return (props: object) => {

      const params = useParams(); //useParams возвращает объект пары key/value (ключ/значение) параметров URL.

      return (
         <WrappedComponent {...props} router={params}/>
      );
   }
}


class ProfileContainer extends React.Component<ProfileContainerType, any> {
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

let mapStateToProps = (state: RootReducerType): MapStateToPropsType => ({
   profile: state.profilePage.profile
})

export default connect(mapStateToProps, {getUserProfileAC})(withRouter(ProfileContainer))