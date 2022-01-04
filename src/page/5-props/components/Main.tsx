import React from 'react'

import { ChidrenComponent, PropsComponent } from './PropsComponent ';
import styles from './main.module.scss';

/* props 定义绑定 */
class Main extends React.Component{
  state={  
      mes: "hello,React"
  }
  node = null
  say= () =>  this.setState({ mes:'let us learn React!' })
  render(){
      return <div>
          <PropsComponent  
             mes={this.state.mes}  // 1, props 作为一个渲染数据源
             say={ this.say  }     // 2, props 作为一个回调函数 callback
             Component={ ChidrenComponent } // 3, props 作为一个组件
             renderName={ ()=><div> my name is alien </div> } // 4, props 作为渲染函数
          >
              { ()=> <div>hello,world</div>  } { /* 5, render props */ }
              <ChidrenComponent />             { /* 6, render component */ }
          </PropsComponent>
      </div>
  }
}

export default Main;
