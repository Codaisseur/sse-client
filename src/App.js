/* global EventSource */

import React from 'react'
import { connect } from 'react-redux'
import { onEvent } from './actions/messages'

class App extends React.Component {
  source = new EventSource('http://localhost:5000/stream')

  componentDidMount () {
    this.source.onmessage = this.props.onEvent
  }

  render () {
    return this
      .props
      .messages
      .map((message, index) => <p key={index}>
        {message}
      </p>)
  }
}

function mapStateToProps (state) {
  return {
    messages: state.messages
  }
}

const mapDispatchToProps = { onEvent }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
