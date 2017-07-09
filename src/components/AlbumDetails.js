import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

class AlbumDetails extends Component {
  render() {
    let { album } = this.props;
    return (
      <Card>
        <CardSection>
          <Text>{album.title}</Text>
        </CardSection>
      </Card>
    );
  }
}

export default AlbumDetails;