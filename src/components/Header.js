// @flow

import React from 'react';
import {Text, View} from 'react-native';

class Header extends React.Component {
  props : {
    headerText: string,
  };

  static styles = {
    viewStyle: {
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
    },
    textStyle: {
      fontSize: 20
    }
  };

  render() {
    const {textStyle, viewStyle} = Header.styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{this.props.headerText}</Text>
      </View>
    );
  }
}

export default Header;
