/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef,Component } from 'react'


export default class RefDemo1 extends Component {
   
  ref = React.createRef();

   handleClick = () => {
     console.log('RefDemo1 ref', this.ref);
     
   }
  render(){
    return (
      <div>
        <Son ref={'qqq'} test={this.ref} ></Son>
        <button onClick={this.handleClick}>ttrrr</button>
      </div>
    )
  } 
}

class Son extends Component<any> {

  componentDidMount(){
    const { ref,test } = this.props;
    console.log("son  received ref", ref);
    console.log("son  received test", test);
  }

  render() {
    return (
      <div>
        <div>RefDemo1</div>
        <div>refs 将不会透传下去。这是因为 `ref` 不是 prop 属性。就像 `key` 一样，其被 React 进行了特殊处理。要用forwardref(props, ref)</div>
      </div>
    )
  }
}

function GrandSon(props: any) {
  
    return (
      <span ref={props.test}>grand son!</span>
    )
}
