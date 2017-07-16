import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class Button extends Component {
  render() {
    const { onPress, children } = this.props;
    return (
      <TouchableOpacity
        style={styles.containerStyle} 
        onPress={onPress}        
      >
        <Text style={styles.textStyle}>
          {children}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    height: 40,
    flex: 1,  
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E81E62',
  }
}

export  { Button };