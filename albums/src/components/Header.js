import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Header extends Component {
  render() {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>
          Dont know anymore but it is working wtf
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
export default Header;