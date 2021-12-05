import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import Add from './add/Add'
import List from './list/List'

import {Provider} from './ctx/commentsContext'



export default class Todos extends Component {
  state = {
    comments: [
      { id: nanoid(), name: 'xander', content: 'React比Vue易懂' },
      { id: nanoid(), name: 'jacob', content: '确实如此！！！' }
    ]
  }


  // 添加评论
  addComment = (comment) => {
    let comments = [comment, ...this.state.comments]
    this.setState({ comments })
  }

  render() {
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Provider value={this.state.comments}>
            <Add addComment={this.addComment} />
            <List />
          </Provider>
        </div>
      </div>
    )
  }
}
