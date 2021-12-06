import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default class Message extends Component {
  state = {
    messageArr: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        messageArr: [
          { id: 1, title: 'messages1' },
          { id: 2, title: 'messages2' },
          { id: 3, title: 'messages3' },
          { id: 4, title: 'messages4' },
          { id: 5, title: 'messages5' },
        ]
      })
    }, 1000)
  }


  render() {
    let { messageArr } = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((item) => {
              return (
                <li key={item.id}>
                  <Link to={`/home/message/detail/${item.id}`}>{item.title}</Link>&nbsp;&nbsp;
                </li>
              )
            })
          }
        </ul>
        <hr />
        <Outlet />
      </div>
    )
  }
}
