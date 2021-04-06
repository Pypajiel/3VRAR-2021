import React from 'react';
import { AppRegistry, StyleSheet, View } from 'react-360';
import Cinemoche from './models/Cinemoche';

export default class cinemoche extends React.Component {
  render() {
    return (
      <View>
      </View>
    );
  }
};

AppRegistry.registerComponent('cinemoche', () => cinemoche);
AppRegistry.registerComponent('cinemocheModel', () => Cinemoche);