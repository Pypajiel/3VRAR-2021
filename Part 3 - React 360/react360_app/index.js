import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import Trucmoche from "./models/Trucmoche";

export default class react360_app extends React.Component {
  render() {
    return (
      <View>

      </View>
    );
  }
};



AppRegistry.registerComponent('react360_app', () => react360_app);
AppRegistry.registerComponent('trucmoche', () => Trucmoche);
