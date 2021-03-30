import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';

import styles from './styles';
import TouchableCharacter from "../../components/Character/touchable.character";

export default class GardenScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/rooms/garden.png')}
          style={styles.roomBackground}
          resizeMode="contain"
        >
          <TouchableCharacter />
        </ImageBackground>
      </View>
    );
  }
}

GardenScreen.navigationOptions = {
  header: null,
};
