import React, { useRef,Component } from 'react'


export default class RefDemo1 extends Component {
   ref = React.createRef();

  render(){
    return (
      <div>
        <Son ref={'qqq'} ></Son>
      </div>
    )
  } 
}

class Son extends Component<any> {

  componentDidMount(){
    const { ref } = this.props;
    console.log("son  received ref", ref);
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
