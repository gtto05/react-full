import React, { Component } from 'react'

export default class ComponentLife extends Component {
  state = {
    name:'xander'
  }
  constructor() {
    super()
    console.log('--constructor');
  }
  // UNSAFE_componentWillMount() {
  //   console.log('--UNSAFE_componentWillMount'); // 即将废弃，改名UNSAFE__
  // }

  // 更新状态
  changeName = () => {
    console.log('@changeName');
    let {name} = this.state
    name += '!'
    this.setState({name})
  }

  shouldComponentUpdate(props,nextState) {
    console.log('^^shouldComponentUpdate');
    console.log(props,nextState);
    return true
  }

  /**
   * 
   * @param {object} props 组件接收到的参数对象
   * @param {object} nextState 最新的状态
   */
  // UNSAFE_componentWillUpdate(props,nextState) {
  //   console.log('^^UNSAFE_componentWillUpdate');
  //   console.log(props,nextState);
  // }

  /**
   * 
   * @param {object} props 组件接收到的参数
   * @param {object} preState 上一次更新的状态
   */
  componentDidUpdate(props,preState) {
    console.log('^^componentDidUpdate');
    console.log(props,preState);

  }

  // 父组件传入参数
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log('$$UNSAFE_componentWillReceiveProps');
  //   console.log(nextProps);
  // }
  // shouldComponentUpdate -> UNSAFE_componentWillUpdate -> componentDidUpdate

  /**
   * 
   * @param {Object} nextProps 
   * @param {Object} state 
   * @returns 
   */
  static getDerivedStateFromProps(nextProps,state) {
    console.log('$$getDerivedStateFromProps');
    console.log(nextProps,state);
    return nextProps
  }

  /**
   * 
   * @param {Object} nextProps 
   * @param {Object} preState 
   * @returns 
   */
  getSnapshotBeforeUpdate(nextProps,preState) {
    console.log('^^getSnapshotBeforeUpdate');
    console.log(nextProps,preState);
    // 比如在直播的时候弹幕需要记住上一次的位置，就需要用到此钩子
    return{}
  }

  render() {
    console.log('--render');
    return (
      <div>
        <h2>生命周期函数</h2>
        <br />
        <h3 onClick={this.changeName}>{this.state.name}</h3>
      </div>
    )
  }
  componentDidMount() {
    console.log('--componentDidMount');
  }
}
