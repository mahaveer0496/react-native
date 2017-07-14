import React, { Component } from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';

class Button extends Component {
  render() {
    const { onPress } = this.props;
    return (
      <TouchableNativeFeedback 
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('blue', true)}
      >
        <Text>
          Click me
        </Text>
      </TouchableNativeFeedback>
    );
  }
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
}

export default Button;