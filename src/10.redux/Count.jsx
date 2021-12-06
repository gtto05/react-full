import React, { Component } from 'react'
import {connect} from 'react-redux'

import {createIncrementAction,createDecrementAction} from '../10.redux/redux/actions/countAction'

class Count extends Component {


  increment = () => {
    this.props.increment(1)
  }
  render() {
    console.log(this.props);


    return (
      <div>
        <h2>当前计数为</h2>
        <select ref="selectNumber">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
        <button onClick={this.incrementAsync}>increment async</button>&nbsp;
      </div>
    )
  }
}

export default connect(
  state => ({count:state.count}),
  {
    increment:createIncrementAction,
    decrement:createDecrementAction
  }
)(Count)
