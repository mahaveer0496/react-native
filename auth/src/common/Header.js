import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Header extends Component {
  render() {
    const { textStyle, viewStyle } = styles;
    const { text } = this.props;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>
          { text }
        </Text>
      </View>
    )
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#E81E62',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
  }
}
export { Header };