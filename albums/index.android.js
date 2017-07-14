import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './src/App';

class Index extends Component {
  render() {
    return (
      <App />
    )
  }
};

AppRegistry.registerComponent('albums', () => Index)