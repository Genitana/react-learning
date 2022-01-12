import React from "react"

class Children extends React.Component{  
    render=()=><div>hello,world</div>
}

/* TODO: Ref属性是一个函数 */
export default class Demo2 extends React.Component{
    currentDom:any = null
    currentComponentInstance:any = null
    componentDidMount(){
        console.log(this.currentDom)
        console.log(this.currentComponentInstance)
    }
    render=()=> <div>
        <h4>demo2 --》Ref 属性是一个函数</h4>
        <div ref={(node)=> this.currentDom = node }  >Ref模式获取元素或组件</div>
        <Children ref={(node) => this.currentComponentInstance = node  }  />
    </div>
}