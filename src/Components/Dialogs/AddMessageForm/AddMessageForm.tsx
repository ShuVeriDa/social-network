import {Field, reduxForm} from "redux-form";
import React, {FormEventHandler} from "react";
import {TextArea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

type AddMessageFormType = {
   handleSubmit: FormEventHandler<HTMLFormElement>
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props: AddMessageFormType) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component={TextArea}
                   validate={[required, maxLength50]}
                   name='newMessageBody'
                   placeholder="Enter your message"
            />
         </div>
         <div>
            <button>Send</button>
         </div>
      </form>
   )
}


export default reduxForm({form: "dialog-add-message-form"}) (AddMessageForm)