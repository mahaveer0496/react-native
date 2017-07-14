import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Buttons';

class AlbumDetails extends Component {
  render() {
    const { album } = this.props;
    const { header, image, bodyImage } = styles;
    return (
      <Card>
        <CardSection>
        <View>
          <Image style={image} source={{uri: album.thumbnail_image}}/>
        </View>
        <View style={header}>
          <Text>{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
        </CardSection>
        <CardSection>
          <Image style={bodyImage} source={{uri: album.image}}/>
        </CardSection>
        <CardSection>
          <Button onPress={() => Linking.openURL(album.url)}/>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  header: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  image:{
    height: 50,
    width: 50,
    marginRight : 10,
    marginLeft: 10
  },
  bodyImage:{
    height: 300,
    flex: 1,
    width: null
  }
}
export default AlbumDetails;