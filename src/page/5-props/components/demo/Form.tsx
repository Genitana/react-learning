import React from "react"


interface IState {
  formData: Object;
}
export  default class Form extends React.Component<any, IState> {
  constructor(props:any) {
    super(props);
    this.state = {
      formData: {},
    };
  }

  childrens:any[] = [];

  submitForm = (handleSubmit: any) => {
    handleSubmit(this.state.formData);
  }

  resetForm =() => {
    //TODO:
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
    
  }

  render () {
    React.Children.forEach(this.props.children, (item) => {
      if (React.isValidElement(item) && (item.type as any).displayName === 'formItem') {
        const child = React.cloneElement(item);
        this.childrens.push(child);
      }
    });
    console.log('this.childrens', this.childrens);
    
    return this.childrens;
  }
}