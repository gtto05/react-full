import React, { Component } from 'react'

export default class ComponentLife extends Component {
  state = {
    name:'xander'
  }
  constructor() {
    super()
    console.log('挂载：constructor');
  }
  UNSAFE_componentWillMount() {
    console.log('挂载：UNSAFE_componentWillMount'); // 即将废弃，改名UNSAFE__
  }

  // 更新状态
  changeName = () => {
    console.log('@changeName');
    let {name} = this.state
    name += '!'
    this.setState({name})
  }

  shouldComponentUpdate(props,curState,c) {
    console.log(props,curState,c);
    return true
  }

  /**
   * 
   * @param {object} props 组件接收到的参数对象
   * @param {object} nextState 最新的状态
   */
  UNSAFE_componentWillUpdate(props,nextState) {
    console.log('--UNSAFE_componentWillUpdate--');
    console.log(props,nextState);
  }

  /**
   * 
   * @param {object} props 组件接收到的参数
   * @param {object} preState 上一次更新的状态
   */
  componentDidUpdate(props,preState) {
    console.log('--componentDidUpdate--');
    console.log(props,preState);

  }

  // 父组件传入参数
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('接收父组件参数：UNSAFE_componentWillReceiveProps');
    console.log(nextProps);
  }


  render() {
    console.log('--render--');
    return (
      <div>
        <h2>生命周期函数</h2>
        <br />
        <h3 onClick={this.changeName}>{this.state.name}</h3>
      </div>
    )
  }
  componentDidMount() {
    console.log('--componentDidMount--');
  }
}
