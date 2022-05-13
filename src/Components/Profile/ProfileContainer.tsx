import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePageType, setUserProfileAC} from "../../redux/profileReducer";

export type MapStateToProps = {
   profilePage: ProfilePageType
}

export type ProfileContainerType = {
   profile: null
   setUserProfileAC: (profile: null) => void
}

class ProfileContainer extends React.Component<ProfileContainerType, any> {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

let mapStateToProps = (state: MapStateToProps) => ({
   profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfileAC})(ProfileContainer)