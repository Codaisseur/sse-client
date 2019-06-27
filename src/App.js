/* global EventSource */

import React from 'react'

class App extends React.Component {
  componentDidMount () {
    const source = new EventSource('http://localhost:5000/stream')
    source.onmessage = (event) => {
      const { data } = event
      const json = JSON.parse(data)
      console.log('json test:', json)
    }
  }

  render () {
    return 'hello'
  }
}

export default App
