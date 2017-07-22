import React, { Component } from 'react';
import { Text, View } from 'react-native';

class CardSection extends Component {
  render() {
    const { containerStyle } = styles;
    const { children, style } = this.props;
    return (
      <View style={{ ...containerStyle, ...style }}>
        {children}
      </View>
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
    position: 'relative',
  },
};

export { CardSection };
