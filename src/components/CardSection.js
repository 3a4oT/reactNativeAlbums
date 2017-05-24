// @flow

import React from 'react';
import { View } from 'react-native';

class CardSection extends React.Component {
  static styles = {
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

  render() {
    return (
      <View style={CardSection.styles.containerStyle}>
        {this.props.children}
      </View>
    );
  }

}

export default CardSection;
