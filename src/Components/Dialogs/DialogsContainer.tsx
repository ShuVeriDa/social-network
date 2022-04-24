import React, {FC} from 'react';
import classes from './Dialogs.module.css'
import {DialogsPageType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type DialogsContainerType = {
   dialogsPage: DialogsPageType
}

let mapStateToProps = (state: DialogsContainerType) => {
   return {
      dialogsPage: state.dialogsPage
   }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
   return {
      updateNewMessageBodyAC: (body: string) => {
         dispatch(updateNewMessageBodyAC(body))
      },
      sendMessageAC: () => {
         dispatch(sendMessageAC())
      }
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer