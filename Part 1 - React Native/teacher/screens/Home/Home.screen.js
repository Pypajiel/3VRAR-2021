import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';

import styles from './styles';
import TouchableCharacter from "../../components/Character/touchable.character";

export default class HomeScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/rooms/home.png')}
          style={styles.roomBackground}
          resizeMode="contain"
        >
          <TouchableCharacter />
        </ImageBackground>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};