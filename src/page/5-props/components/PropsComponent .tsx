import React from "react"

interface IProps{
  mes:string;  // 1, props 作为一个渲染数据源
  say: () => void;     // 2, props 作为一个回调函数 callback
  Component: React.ReactNode; // 3, props 作为一个组件
  renderName: () => React.ReactNode; // 4, props 作为渲染函数
  children: React.ReactNode; 
}

/* props 接受处理 */
export class PropsComponent extends React.Component<IProps>{
  componentDidMount(){
      console.log('_this', this)
  }
  render(){
      const {  children , mes , renderName , say ,Component } = this.props as any
      const renderFunction = children[0]
      const renderComponent = children[1]
      /* 对于子组件，不同的props是怎么被处理 */
      return <div>
          { renderFunction() }
          { mes }
          { renderName() }
          { renderComponent }
          <Component />
          <button onClick={ () => say() } > change content </button>
      </div>
  }
}


/* children 组件 */
export function ChidrenComponent(){
  return <div> In this chapter, let's learn about react props ! </div>
}