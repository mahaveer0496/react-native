import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Card extends Component {
  render() {
    let { album, children } = this.props;
    const { containerStyle } = styles
    return (
      <View style={containerStyle}>
        {children}
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    elevation: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  }
}

export default Card;