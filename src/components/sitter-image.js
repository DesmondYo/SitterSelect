import React from 'react';
import {View} from 'react-native';
import {styles} from './styles/sitter-image-style.js';
import {Marker} from 'react-native-maps';

export function SitterImage() {
  return (
    <View>
      <Marker
        coordinate={{latitude: 37.78825, longitude: -122.4324}}
        image={require('../img/LadyInPic.png')}
      />
    </View>
  );
}
