import React, { Component } from 'react'

export default class MyInput extends Component {
  myRef = React.createRef()
  handleClick = () => {
    // 获取节点
    // console.log(this.refs.txt); // 通过给标签打标记的方法将要废弃
    // console.log(this.input); // 通过在标签给实例身上添加一个属性，用来存放节点的方法
    console.log(this.myRef); // 通过给实例身上添加一个myRef(不同于回调形式，是由react创建的)，属性的current值就是当前节点

  }
  render() {
    return (
      <div>
        <input type="text" ref={this.myRef}/>
        <input type="submit" value="获取输入框的值" onClick={this.handleClick}/>
      </div>
    )
  }
}
