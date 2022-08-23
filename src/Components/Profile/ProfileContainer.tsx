import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfileAC, savePhoto, updateStatus} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";
import {RootReducerType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export type MapStateToPropsType = {
   profile: ProfileType
   status: string
   authorizedUserId: number | null
   isAuth: boolean
}

export type MapDispatchToPropsType = {
   // setUserProfileAC: (profile: any) => void
   getUserProfileAC: (userId: number | null) => void
   getStatus: (userId: number | null) => void
   updateStatus: (status: string) => void
   // profile: any

   savePhoto: (photos: any)=>void
}

export type ContactsType = {
   github: string
   vk: string
   facebook: string
   instagram: string
   twitter: string
   website: string
   youtube: string
   mainLink: string
}

export type PhotosType = {
   small: string
   large: string
}
export type ProfileType = {
   userId: number | null
   status: string
   lookingForAJob: boolean
   lookingForAJobDescription: string
   fullName: string
   contacts: ContactsType
   photos: PhotosType
}

export type PathParamsType = {
   userId: number | null
   isOwner: boolean
   router: { userId: number }
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & PathParamsType

class ProfileContainer extends React.Component<PropsType, any> {
   refreshProfile() {
      let userId = this.props.router.userId || this.props.authorizedUserId
      this.props.getUserProfileAC(userId)
      this.props.getStatus(userId)
   }


   componentDidMount() {
      this.refreshProfile()
   }

   componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<any>, snapshot?: any) {
      debugger
      if (this.props.router.userId !== prevProps.authorizedUserId) {
         this.refreshProfile()
      }
   }

   render() {
      return (
         <Profile {...this.props}
                  isOwner={!this.props.router.userId}
                  profile={this.props.profile}
                  status={this.props.status}
                  updateStatus={this.props.updateStatus}
                  savePhoto={this.props.savePhoto}
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
   connect(mapStateToProps, {getUserProfileAC, getStatus, updateStatus, savePhoto}),
   withRouter,
   withAuthRedirect
)(ProfileContainer)
