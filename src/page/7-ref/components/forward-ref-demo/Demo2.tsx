import React, { Component } from 'react';

class RefDemo2 extends Component<any> {

  ref = React.createRef();

  componentDidMount() {
    console.log('ref', this.ref);
    
  }
  render() {
    return (
      <div>
        <NewFather ref={this.ref}></NewFather>
      </div>
    );
  }
}

export default RefDemo2;


class Father extends Component<any> {
  render() {
    const {forwardRef} = this.props;
    return (
      <div>
        <Son forwardRef={forwardRef}></Son>
      </div>
    );
  }
}
const NewFather = React.forwardRef((props, ref) => <Father forwardRef={ref} ></Father>)


class Son extends Component<any> {
  render() {
    const {forwardRef} = this.props;
    return (
      <div>
        <span ref={forwardRef}>this is what i want</span>
      </div>
    );
  }
}

