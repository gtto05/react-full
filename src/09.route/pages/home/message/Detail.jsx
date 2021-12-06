import React, { Component } from 'react'
import { withRouter } from '../../../tools/withRouter'
class Detail extends Component {
  render() {
    console.log(this.props.params.id);
    return (
      <div>
        Details
      </div>
    )
  }
}

export default withRouter(Detail)
