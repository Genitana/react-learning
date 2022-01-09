import React, { ChangeEvent } from 'react'

interface IProps {
  name:string;
  label: string;
  handleInput?: (value:Object) => void;
  children: React.ReactElement;
}

export default function FormItem(props: IProps) {
  console.log('Formitem');
  
  const {name, label, handleInput, children} = props;
  
  return (
    <div>
      <span>{label}:</span>
      {React.cloneElement(children, {name, handleInput}) }
    </div>
  );
}

export function Input(props:any) {

  const {name, handleInput} = props;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (handleInput) {
      handleInput({[name]: e.target.value});
    }
  }

  return (
    <input onChange={onChange}></input>
  )
}

FormItem.displayName ='formItem';