import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FC} from "react";
import {CreateField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import {RootReducerType} from "../../redux/redux-store";
import classes from '../common/FormsControls/FormsControls.module.css'
import {Simulate} from "react-dom/test-utils";

type FormDataType = {
   email: string
   password: string
   rememberMe: boolean
}

type LoginType = {
   login: (email: string, password: string, rememberMe: boolean) => void
   isAuth: boolean
}

type MapStateToPropsType = {
   isAuth: boolean
}

const LoginForm: FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error, ...props}) => {
   return (
      <form onSubmit={handleSubmit}>
         {CreateField('Email',
            'email',
            [required],
            Input
         )}
         {CreateField('Password',
            'password',
            [required],
            Input,
            {type: "password"}
         )}
         {/*{CreateField(null,*/}
         {/*   'checkbox',*/}
         {/*   [],*/}
         {/*   Input,*/}
         {/*   {type: "checkbox"}*/}
         {/*)}*/}

         <div>
            <Field type="checkbox" name='rememberMe' component={Input}/> remember me
         </div>

         {error && <div className={classes.formSummaryError}>
            {error}
         </div>}
         <div>
            <button>Login</button>
         </div>
      </form>
   );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: LoginType) => {
   const onSubmit = (formData: FormDataType) => {
      props.login(formData.email, formData.password, formData.rememberMe)
   }


   if (props.isAuth) {
      return <Navigate to={'/profile'}/>
   }
   return (
      <div>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit}/>
      </div>
   )
}


const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
   return {
      isAuth: state.auth.isAuth
   }

}

export default connect(mapStateToProps, {login})(Login)