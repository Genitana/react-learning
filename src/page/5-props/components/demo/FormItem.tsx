import React, { ChangeEvent, useEffect } from 'react'

interface IObject {
  [key: string]: any;
}

interface IProps {
  name:string;
  label: string;
  formData?: IObject;
  handleInput?: (value:Object) => void;
  children: React.ReactElement;
}

export default function FormItem(props: IProps) {
  console.log('Formitem');
  
  const {name, label, handleInput, children} = props;
  const  formData = props.formData || {};
  
  return (
    <div>
      <span>{label}:</span>
      {React.cloneElement(children, {name, handleInput, value: formData[name]}) }
    </div>
  );
}

export function Input(props:any) {

  const {name, handleInput} = props;
  const value = props.value || '';

  console.log('Input, name:', name);
  
  useEffect(() => {
    return () => {
      console.log('Input 卸载。。，name:', name);
      
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (handleInput) {
      handleInput({[name]: e.target.value});
    }
  }

  return (
    <input onChange={onChange} value={value}></input>
  )
}

FormItem.displayName ='formItem';