import React from "react"
import { IObject } from "../../inteface";

interface IState {
  formData: IObject;
}
export  default class Form extends React.Component<any, IState> {
  constructor(props:any) {
    super(props);
    this.state = {
      formData: {},
    };
  }

  //  很奇怪，这里如果childrens放在class里，会导致重复，有机会研究一下，react:17.0.2
  // <React.StrictMode> 模式， 在DEv环境 可能会调用多次render() ,所以导致了这个问题
  // childrens:any[] = [];

  submitForm = (handleSubmit: any) => {
    handleSubmit(this.state.formData);
  }

  resetForm =() => {
    this.setState({formData: {}})
  }

  handleInput = (value: Object) => {
    const formData = {...this.state.formData, ...value}
    this.setState({formData});
  }

  componentDidUpdate(){
    console.log('Form componentDidUpdate');
    
  }

  render () {
    const childrens = [] as React.ReactNode[];
    React.Children.forEach(this.props.children, (item) => {
      if (React.isValidElement(item) && (item.type as any).displayName === 'formItem') {
        const {name} = item.props;
        const value = this.state.formData[name];

        const child = React.cloneElement(item, {handleInput: this.handleInput, value});
        childrens.push(child);
        
        console.log('this.childrens.length', childrens.length);
      }
    });
    
    return childrens;
  }
}