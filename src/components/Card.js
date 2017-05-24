/* @flow */

import React from 'react';
import {View} from 'react-native';

class Card extends React.Component {
  props : {
    children?: React.Children,
  };

  static styles = {
    conteinerStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10
    }
  };

  constructor() {
    super();
  }

  render() {
    return (
      <View style={Card.styles.conteinerStyle}>
        {this.props.children}
      </View>
    );
  }
}

export default Card;
