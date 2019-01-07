import { Navigation } from 'navi'
import React, { Component } from 'react'
import { NavProvider, NavContent } from 'react-navi'

interface AppProps {
  navigation: Navigation
}

class App extends Component<AppProps> {
  render() {
    return (
      <NavProvider navigation={this.props.navigation}>
        <NavContent />
      </NavProvider>
    )
  }
}

export default App
