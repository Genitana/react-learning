import React from "react"

class Children extends React.Component{  
    render=()=><div>hello,world</div>
}

/** Ref属性是一个ref对象 */
export default class Demo3 extends React.Component{
    currentDom:any = React.createRef()
    currentComponentInstance:any = React.createRef()
    componentDidMount(){
        console.log(this.currentDom)
        console.log(this.currentDom.current);
        
        console.log(this.currentComponentInstance)
    }
    render=()=> <div>
        <h4>demo3 --》Ref属性是一个ref对象</h4>
         <div ref={ this.currentDom }  >Ref对象模式获取元素或组件</div>
        <Children ref={ this.currentComponentInstance }  />
   </div>
}