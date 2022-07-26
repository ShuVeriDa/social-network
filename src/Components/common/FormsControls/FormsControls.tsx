import {FC} from "react";
import classes from './FormsControls.module.css'
import {Field } from "redux-form";

type FormControlType = {
   input: any
   meta: {
      touched: any
      error: string
   }
   children: any
}

const FormControl: FC<FormControlType> = ({input, meta: {touched, error}, children, ...props}) => {
   const hasError = touched && error

   return (
      <div className={classes.formControl + " " + (hasError ? classes.error : '')}>
         <div>
            {children}
         </div>
         {hasError && <span>{error}</span>}
      </div>
   )
}

export const TextArea = (props: FormControlType) => {
   const {input, meta, children, ...restProps} = props
   return <FormControl {...props}>
      <textarea {...input} {...restProps}/>
   </FormControl>
}

export const Input = (props: FormControlType) => {
   const {input, meta, children, ...restProps} = props
   return <FormControl {...props}>
      <input {...input} {...restProps}/>
   </FormControl>
}


export const CreateField = (
   placeholder: string | null,
   name: string,
   validators: ((value: string) => "Field is required" | undefined)[],
   component: any,
   type?: { type: string },
   text: string = ''
) => {
   return (
      <div>
         <Field placeholder={placeholder}
                name={name}
                component={component}
                validate={validators}
                type={type}
         />{text}
      </div>
   )
}