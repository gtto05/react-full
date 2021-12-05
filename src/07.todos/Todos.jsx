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


  // 添加评论(直接props传递给子组件)
  addComment = (comment) => {
    let comments = [comment, ...this.state.comments]
    this.setState({ comments })
  }

  // 删除评论(放入context对象中供子孙组件使用)
  deleteComment = (id) => {
    let comments = [...this.state.comments]
    comments = comments.filter((item) => {
      return item.id !== id
    })
    console.log(id);
    console.log(comments);
    this.setState({comments})
  }

  render() {
    
    // 给context对象上value赋的对象
    const commentsObj = {
      comments:this.state.comments,
      deleteComment:this.deleteComment
    }

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
          <Provider value={commentsObj}>
            <Add addComment={this.addComment} />
            <List />
          </Provider>
        </div>
      </div>
    )
  }
}
