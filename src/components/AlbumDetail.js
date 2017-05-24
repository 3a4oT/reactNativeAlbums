/* @flow */

import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

export type Album = {
  title?: string,
  artist?: string,
  thumbnail_image?: string,
  image?: string,
  url?: string,
};

class AlbumDetail extends React.Component {
  props : {
    album: Album
  };

  static styles = {
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 18
    },
    thumbnailStyle: {
      height: 50,
      width: 50
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    imageStyle: {
      height: 300,
      flex: 1,
      width: null
    }
  };

  constructor() {
    super();
  }

  render() {
    const {thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle} = AlbumDetail.styles;
    const {title, artist, thumbnail_image, image, url} = this.props.album;

    return (
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image source={{
              uri: thumbnail_image
            }} style={thumbnailStyle}/>
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Image source={{
            uri: image
          }} style={imageStyle}/>
        </CardSection>

        <CardSection>
          <Button onPress={() => Linking.openURL(url)}>
            Buy Now
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default AlbumDetail;
