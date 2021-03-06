import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { postMessage } from '../store'

class AddMessage extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt){
    evt.preventDefault();
    let message = {
      content: evt.target.content.value,
      senderId: this.props.currentUser.id,
      threadId: +this.props.currentThread
    }
    this.props.postNewMessage(message)
    document.getElementById("messageContent").value = "";
  }

  render() {
    return (
      <div className="avenir bg-light-gray pv3">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="messageContent" className="avenir f6 b db mb2">New Message</label>
          <textarea
            id="messageContent"
            name="content"
            type="text"
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
          />
          <button className="f4 link dim br-pill mb2 dib white bg-dark-pink inline-flex items-center ma2 pv2 pw4">Submit</button>
        </form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    currentUser: state.currentUser,
    currentThread: state.currentThread
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    postNewMessage: function(message) {
      dispatch(postMessage(message, ownProps))
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(AddMessage))
