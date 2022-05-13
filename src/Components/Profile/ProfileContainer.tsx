import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePageType, setUserProfileAC} from "../../redux/profileReducer";
import {useLocation, useMatch, useNavigate, useParams} from "react-router-dom";
import { RootReducerType} from "../../redux/redux-store";

export type MapStateToPropsType = {
   profile: null
}

// type TypeType = {
//    profilePage: ProfilePageType
// }

export type MapDispatchToPropsType = {
   setUserProfileAC: (profile: any) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

export type ProfileContainerType = {
   profile: null
   setUserProfileAC: (profile: null) => void
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
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
         .then(response => {
            this.props.setUserProfileAC(response.data)
         })
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

export default connect(mapStateToProps, {setUserProfileAC})(withRouter(ProfileContainer))