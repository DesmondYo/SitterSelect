import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {styles} from './styles/back-button-style.js';

export function BackButton({
  onPress,
  backButtonImage,
  imageHeight,
  imageWidth,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.backbutton}>
      <Image
        source={backButtonImage}
        style={{height: imageWidth, width: imageHeight}}
      />
    </TouchableOpacity>
  );
}
