import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";
import {FC} from "react";
import {Input} from "../common/FormsControls/FromsControls";
import {required} from "../../utils/validators/validators";

type FormDataType = {
   login: string
   password: string
   rememberMe: boolean
}

const LoginForm:FC<InjectedFormProps<FormDataType>> = (props) => {
   return (
         <form onSubmit={props.handleSubmit}>
            <div>
               <Field placeholder={'Login'}
                      name={'login'}
                      component={Input}
                      validate={[required]}
               />
            </div>
            <div>
               <Field placeholder={'Password'}
                      name={'password'}
                      component={Input}
                      validate={[required]}
               />
            </div>
            <div>
               <Field type="checkbox" name={'rememberMe'} component={Input}/>
               remember me
            </div>
            <div>
               <button>Login</button></div>
         </form>
   );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
   const onSubmit = (formData: FormDataType) => {
      console.log(formData)
   }
   return (
      <div>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit}/>
      </div>
   )
}