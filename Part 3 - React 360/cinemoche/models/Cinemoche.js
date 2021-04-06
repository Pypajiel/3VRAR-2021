import React from 'react';
import { View, AmbientLight, Model, asset } from 'react-360';

export default class Cinemoche extends React.Component {
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
              { rotateX: 0 },
              { rotateY: 90 },
              { scaleX: 5 },
              { scaleY: 5 },
              { scaleZ: 5 },
            ]
          }}
        />
      </View>
    );
  }
}