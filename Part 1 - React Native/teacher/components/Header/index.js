import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

import styles from './styles';

import { CharactersStateContext } from './../../store/character.store';

export class HeaderLeft extends Component {
  render () {
    return (
      <View style={styles.headerContent}>
        <Image
          source={require('../../assets/images/heart.png')}
          style={styles.headerLogo}
        />
        <Text style={styles.headerText}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

export class HeaderRight extends Component {
  render () {
    return (
      <View style={styles.headerContent}>
        <Text style={styles.headerText}>
          {this.context.state.accLove}
        </Text>
        <Image
          source={require('../../assets/images/heart.png')}
          style={styles.headerLogo}
        />
      </View>
    );
  }
}


HeaderRight.contextType = CharactersStateContext;


