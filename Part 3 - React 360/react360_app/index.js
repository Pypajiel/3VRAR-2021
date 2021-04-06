import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import Trucmoche from "./models/Trucmoche";

export default class react360_app extends React.Component {
  state = {
    room: "salon"
  };

  setRoom(room) {
    this.setState({room: room || "salon"})
  }

  render() {
    switch (this.state.room){
      case "salon":
        return <Room setRoom={(room) => this.setRoom(room)} />
        break;
      case "sdb":
        return <Room setRoom={(room) => this.setRoom(room)} />
        break;
      default:
        return <Text>No Matching</Text>
    }
    return (
      <View>

      </View>
    );
  }
};



AppRegistry.registerComponent('react360_app', () => react360_app);
AppRegistry.registerComponent('trucmoche', () => Trucmoche);
