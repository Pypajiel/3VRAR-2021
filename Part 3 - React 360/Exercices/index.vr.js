import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-vr';
import App from './src/App'

export default class Exercices extends React.Component {
  render() {
    return (
      <View>
        <App />
      </View>
    );
  }
};

AppRegistry.registerComponent('Exercices', () => Exercices);
