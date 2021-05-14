import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {styles} from './styles/back-button-style.js';

export function BackButton({
  onPress,
  backButtonImage,
  imageHeight,
  imageWidth,
  top,
  bottom,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.backbutton, {top}]}>
      <Image
        source={backButtonImage}
        style={{height: imageWidth, width: imageHeight}}
      />
    </TouchableOpacity>
  );
}
