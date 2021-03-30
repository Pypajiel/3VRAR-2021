import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Button } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import styles, { sliderWidth, itemWidth } from './styles';


import { CharactersStateContext } from './../../store/character.store';


export default class CharacterSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _carousel: null,
      activeSlide: 0,
      entries: props.entries || []
    };
  }

  get pagination () {
    const { entries, activeSlide, _carousel } = this.state;
    return (
      <Pagination
        tappableDots={!!_carousel}
        carouselRef={_carousel}
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(0, 0, 0, 0.75)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  _renderItem ({item, index}) {
    const even = (index + 1) % 2 === 0;

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
      >
        <View style={styles.shadow} />
        <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
          <Image
            source={ item.image }
            style={styles.image}
          />
          <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
        </View>
        <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
          <Text
            style={[styles.title, even ? styles.titleEven : {}]}
            numberOfLines={2}
          >
            { item.name.toUpperCase() }
          </Text>
          <Text
            style={[styles.subtitle, even ? styles.subtitleEven : {}]}
            numberOfLines={2}
          >
            { item.description }
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  setCarousel (obj) {
    if (!this.state._carousel) {
      this.setState({ _carousel: obj });
    }
    return this.state._carousel;
  }

  setActiveCharacter (index) {
    this.setState({ activeSlide: index });
    this.context.dispatch({ selected: this.props.entries[index] })
  }

  render () {
    return (
      <View>
        <Carousel
          ref={c => this.setCarousel(c)}
          data={this.props.entries}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          layout={'stack'}
          layoutCardOffset={18}
          onSnapToItem={(index) => this.setActiveCharacter(index) }
        />
        { this.pagination }
      </View>
    );
  }
}

CharacterSelector.contextType = CharactersStateContext;
