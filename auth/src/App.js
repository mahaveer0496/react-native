import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './common/index.common';


class App extends Component {
  render() {
    return (
      <View>
        <Header text="Authentication"/>
      </View>
    );
  }
};

export default App;