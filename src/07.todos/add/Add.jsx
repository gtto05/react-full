import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export default class Add extends Component {

  add= () => {
    const {addComment} = this.props
    let name = this.userNameInput.value
    let content = this.textareaInput.value
    const comment = {id:nanoid(),name,content}
    console.log(comment);
    addComment(comment);
    name = ''
    content = ''
  }


  render() {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" ref={(input) => {
              this.userNameInput = input
            }}/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" ref={(input) => {
              this.textareaInput = input
            }}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.add}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
