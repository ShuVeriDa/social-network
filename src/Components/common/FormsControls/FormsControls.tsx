import {FC} from "react";
import classes from './FormsControls.module.css'
import {Simulate} from "react-dom/test-utils";

type FormControlType = {
   input: any
   meta: {
      touched: any
      error: string
   }
   children: any
}

const FormControl: FC<FormControlType> = ({input, meta, children, ...props}) => {
   const hasError = meta.touched && meta.error

   return (
      <div className={classes.formControl + " " + (hasError ? classes.error : '')}>
         <div>
            {children}
         </div>
         {hasError && <span>{meta.error}</span>}
      </div>
   )
}

export const TextArea = (props: FormControlType) => {
   const {input, meta, children, ...restProps} = props
   return <FormControl {...props}>
      <textarea {...input} {...restProps}/>
   </FormControl>
}

export const Input= (props: FormControlType) => {
   const {input, meta, children, ...restProps} = props
   return <FormControl {...props}>
      <input {...input} {...restProps}/>
   </FormControl>
}