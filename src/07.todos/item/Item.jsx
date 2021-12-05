import React, { Component } from 'react';
import { commentContext } from '../ctx/commentsContext';
import './style.css';

export default class Item extends Component {


  static contextType = commentContext

  render() {
    const comments = this.context
    return (
      // <li className="list-group-item">
      //   <div className="handle">
      //     <a href="javascript:;">删除</a>
      //   </div>
      //   <p className="user"><span >xxx</span><span>说:</span></p>
      //   <p className="centence">React不错!</p>
      // </li>
      <>
        {
          comments.map((comment) => {
            return (
              <li className="list-group-item" key={comment.id}>
                <div className="handle">
                  <a href="#">删除</a>
                </div>
                <p className="user"><span >{comment.name}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
              </li>
            )
          })
        }
      </>
    )
  }
}
