import React, {ComponentType} from 'react';
import {DialogsPageType, sendMessageAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {RootReducerType} from "../../redux/redux-store";


type DialogsContainerType = {
   dialogsPage: DialogsPageType
}

let mapStateToProps = (state: RootReducerType): DialogsContainerType => {
   return {
      dialogsPage: state.dialogsPage,
   }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
   return {
      sendMessageAC: (newMessageBody: string) => {
         dispatch(sendMessageAC(newMessageBody))
      }
   }
}

export default compose<ComponentType>(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
) (Dialogs)