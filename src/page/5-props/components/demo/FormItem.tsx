import React from 'react'

interface IProps {
  name:string;
  label: string;
  children: React.ReactNode;
}

export default function FormItem(props: IProps) {
  console.log('Formitem');
  
  const {name, label, children} = props;
  
  return (
    <div>
      <span>{label}:</span>
      {children}
    </div>
  );
}

export function Input() {

  return (
    <input></input>
  )
}

FormItem.displayName ='formItem';