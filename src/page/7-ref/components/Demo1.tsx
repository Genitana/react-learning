import React from "react"
import { Component } from "react"

class Children extends Component{  
    render=()=><div>hello,world</div>
}
/* TODO:  Ref属性是一个字符串 */
export default class Demo1 extends React.Component{
    componentDidMount(){
        // this.refs已经废弃了
       console.log('this.refs', this.refs)
    }
    render =()=> (
    <div>
        <h4>demo1 --》Ref属性是一个字符串</h4>
        <div ref="currentDom"  >字符串模式获取元素或组件</div>
        <Children ref="currentComInstance"  />
    </div>)
}