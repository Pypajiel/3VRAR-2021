import React from 'react'
import {  AppRegistry,
    StyleSheet,asset, VrButton, Text, View} from 'react-360'
import Entity from 'Entity'

export default class Cafe extends React.Component{
    render(){
        return(
            <View>
            <Entity 
                source={{
                    obj: asset('cafe.obj'),
                    mtl: asset('cafe.mtl')
                }}
                
                style={{transform:[
                    {scaleX: 0.05 },
                    { scaleY: 0.05 },
                    { scaleZ: 0.05 },

                ]}}
                />
            </View>
        )
    }
}