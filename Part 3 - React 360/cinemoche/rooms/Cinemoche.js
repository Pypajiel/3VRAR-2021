import React from 'react';
import { View, AmbientLight, Model, asset, VrButton, StyleSheet, AppRegistry } from 'react-360';

export default class Cinemoche extends React.Component {
  changeScene = () => {
    console.log(this.props)
    this.props.onClick("Mars");
  }

  render() {
    return (
      <View>
        <AmbientLight intensity={5} />
        <Model
          source={{
            obj: asset('./cinemoche/cinemoche.obj'),
            mtl: asset('./cinemoche/cinemoche.mtl')
          }}
          style={{
            transform: [
              { translate: [0, 0, 0] },
              { rotateX: 0 },
              { rotateY: 90 },
              { scaleX: 5 },
              { scaleY: 5 },
              { scaleZ: 5 },
            ]
          }}
        />
        <VrButton style={styles.button} onClick={this.changeScene}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    transform: [ { translate: [-70, 70, 1] } ],
    width: 1000,
    height: 350,
    backgroundColor: "#ec0ed5",
    opacity: 0.2
  },
  buttonHover: {
    backgroundColor: "#a70d95"
  }
});

AppRegistry.registerComponent('Cinemoche', () => Cinemoche);