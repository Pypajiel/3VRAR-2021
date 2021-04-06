import React from 'react';
import {
    asset,
    Model,
    StyleSheet,
    View,
} from 'react-vr';

export default class model extends React.Component {
    render() {
        return (
            <View>
                <Model
                    source={{
                        obj: asset('/model/Srad 750.obj'),
                        mtl: asset('/model/Srad 750.mtl')
                    }}
                    style={{
                        transform: [
                            { translate: [-4.2, -1.2, 9] },
                            { rotateX: -4 },
                            { rotateY: 12 },
                            { scale: 1.3 }
                        ]
                    }}
                />
            </View>
        );
    }
};
