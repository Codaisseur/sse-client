/* global EventSource */

import React from 'react'

class App extends React.Component {
  state = { messages: [] }

  source = new EventSource('http://localhost:5000/stream')

  componentDidMount () {
    this.source.onmessage = (event) => {
      const { data } = event
      const messages = JSON.parse(data)
      console.log('messages test:', messages)
      this.setState({ messages })
    }
  }

  render () {
    return this
      .state
      .messages
      .map((message, index) => <p key={index}>
        {message}
      </p>)
  }
}

export default App
