import React from 'react';
import { View, AmbientLight, Model, asset } from 'react-360';

export default class Cine extends React.Component {
  render() {
    return (
      <View>
        <AmbientLight intensity={5} />
        <Model
          source={{
            obj: asset('../../static_assets/untitled.obj'),
            mtl: asset('../../static_assets/untitled.mtl')
          }}
          style={{
            transform:[
              { rotateX: 0 },
              { rotateY: 90 },
              { scaleX: 10 },
              { scaleY: 10 },
              { scaleZ: 10 },
            ]
          }}
        />
      </View>
    );
  }
}