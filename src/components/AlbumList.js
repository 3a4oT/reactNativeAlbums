/* @flow */

import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import type {Album} from "./AlbumDetail";

class AlbumList extends Component {
  static hostURL : string = 'https://rallycoding.herokuapp.com/api/music_albums';

  state : {
    albums: ?Album[],
  };

  componentWillMount() {
    axios.get(AlbumList.hostURL).then(response => {
      this.setState({ albums : response.data});
    });
  }

  renderAlbums() {
    if (this.state.albums !== null && this.state.albums !== undefined) {
      return this.state.albums.map(album =>
         <AlbumDetail key={album.title} album={album}/>
       );
    }
  }

  constructor() {
    super();
    this.state = {albums: []};
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
