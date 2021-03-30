import React, { Component } from 'react';
import { Image, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { CharactersStateContext, characters } from './../../store/character.store';

import styles from './styles';
import CharacterSelector from '../../components/CharacterSelector/index';

export default class CharacterScreen extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.content}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={styles.characterLogo}
              />
            </View>

            <View style={styles.content}>
                <CharacterSelector entries={characters} />
            </View>

            <View style={styles.content}>
              <Button
                title="Play"
                onPress={() => this.props.navigation.navigate('Home')}
              />
            </View>
          </ScrollView>
      </View>
    );
  }
}

CharacterScreen.navigationOptions = {
  header: null,
};

CharacterScreen.contextType = CharactersStateContext;