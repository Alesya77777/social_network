import Field from 'redux-form/lib/Field';
import classes from './FormsControls.module.css';

const FormControls = ({ input, meta, child, ...props }) => {
  const hasError = meta.error && meta.touched;

  return (
    <div className={classes.formControl + " " + (hasError ? classes.error : "")} >
      <div>
        {props.children}
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControls {...props}> <textarea  {...input} {...restProps} /></FormControls>
  )
};
export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControls {...props}> <input  {...input} {...restProps} /></FormControls>
  )
};

// export const createField = (placeholder, name, component, validate, props = {}, text = "") => (
//   <div>
//     <Field placeholder={placeholder} name={name} component={component}
//       validate={[validate]} {...props} />{text}
//   </div>
// );