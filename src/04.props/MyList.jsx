import React, { Component } from 'react'

export default class MyList extends Component {
  render() {
    const {name,age,gender} = this.props
    return (
      <div>
        <h2>从父组件接收到参数</h2>
        <li>姓名：{name}</li>
        <li>年龄：{age}</li>
        <li>性别：{gender}</li>
      </div>
    )
  }
}
