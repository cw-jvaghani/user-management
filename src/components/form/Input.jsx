import classes from './Form.module.css';
export default function Input({label,inputId,...props}){
    return <div className={classes["user-input"]}>
    <label htmlFor={inputId}>{label}</label>
    <input id={inputId} name={inputId} {...props}/>

  </div>
}