import React from 'react'
import { Text, View, Image, StyleSheet, Button, Alert } from 'react-native';

export default class Home extends React.Component {
    render () {
        return (
            <View style={styles.container}>
              <Image style={styles.logo} source={require('../assets/logo.png')}/>
              <Text style={{fontWeight: 'bold', marginTop:20,}}>Choisissez un personnage</Text>
              <View style={styles.choices}>
                <Image style={styles.character} source={require('../assets/berserk.png')}/>
                <Image style={styles.character} source={require('../assets/devin.png')}/>
                
              </View>
              <View style={styles.names}>
                    <Button 
                    title="Berserk"
                    onPress={() => Alert.alert('Vous avez choisi le Berserk')}
                    />
                    <Button
                    title="Devin"
                    onPress={() => Alert.alert('Vous avez choisi le Devin')}
                    />
              </View>
              
            </View>
            
          );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 70,
        alignItems: 'center'
        },
    logo: {
        width: 260,
        height: 150,
    },
    choices: {
        flexDirection: "row",
        marginTop: 60,
    },
    character: {
        width : 200,
        height: 150,
        resizeMode: 'contain'
    },
    names: {
        flexDirection: "row",
        justifyContent: 'space-between',
        
    },
    chosen:{
        borderColor: '#202020',
        borderWidth: 2,
        borderRadius: 6,
    }
})