import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfileAC,  updateStatus} from "../../redux/profileReducer";
import { useParams} from "react-router-dom";
import { RootReducerType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export type MapStateToPropsType = {
   profile: null
   status: string
   authorizedUserId: number | null
   isAuth: boolean
}

export type MapDispatchToPropsType = {
   setUserProfileAC: (profile: any) => void
   getUserProfileAC: (userId: number) => void
   getStatus: (userId: number) => void
   updateStatus: (status: string) => void
   profile: null
   router: any
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType, any> {
   componentDidMount() {
      let userId = this.props.router.userId || this.props.authorizedUserId
      this.props.getUserProfileAC(userId)
      this.props.getStatus(userId)
   }

   render() {

     return (
        <Profile {...this.props}
                 profile={this.props.profile}
                 status={this.props.status}
                 updateStatus={this.props.updateStatus}
        />
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
   status: state.profilePage.status,
   authorizedUserId: state.auth.userId,
   isAuth: state.auth.isAuth
})

export default compose<ComponentType>(
   connect(mapStateToProps, {getUserProfileAC, getStatus, updateStatus}),
   withRouter,
   withAuthRedirect
)(ProfileContainer)
