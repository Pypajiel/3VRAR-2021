import React, { Component } from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';

import { CharactersStateContext } from './../../store/character.store';

import styles from './styles';

export default class TouchableCharacter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characterPos: {
        top: 50,
        left: 50
      },
      highlight: false
    }
  }

  get charX () {
    return { left: `${this.state.characterPos.left || 50}%` };
  }

  get charY () {
    return { top: `${this.state.characterPos.top || 50}%` };
  }

  get highlightStyle () {
    if (!this.state.highlight) return {};

    return styles.characterHighlight;
  }

  handlePressInEvent () {
    this.setState({ highlight: true });
    this.context.dispatch({ accLove: this.context.state.accLove+1 })
  }

  handlePressOutEvent () {
    this.setState({ highlight: false });
  }

  render () {
    return (
      <TouchableWithoutFeedback
        onPressIn={() => this.handlePressInEvent()}
        onPressOut={() => this.handlePressOutEvent()}
      >
        <Image
          source={this.context.state.selected.image}
          style={[styles.characterImg, this.charX, this.charY, this.highlightStyle]}
        />
      </TouchableWithoutFeedback>
    );
  }
}

TouchableCharacter.contextType = CharactersStateContext;