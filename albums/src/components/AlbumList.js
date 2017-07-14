import React, { Component } from 'react';
import {ScrollView, Text } from 'react-native';

import AlbumDetails from './AlbumDetails';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.renderAlbums = this.renderAlbums.bind(this);
    this.state = {
      albums: []
    }
  }

  componentWillMount() {
    const url = 'http://rallycoding.herokuapp.com/api/music_albums'
    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          albums: json
        })
      })
      .catch(err => 'Error -_-')
  }

  renderAlbums() {
    const {albums} = this.state;
    return albums.map(album =>
      <AlbumDetails key={album.title} album={album} />
    )
  }
  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;