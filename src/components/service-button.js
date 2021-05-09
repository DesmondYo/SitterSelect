import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles/service-button-style.js';

export function ServiceButton({image, label, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.rectangle}>
      <Image source={image} style={styles.icon} />
      <Text style={styles.textStyle}>{label}</Text>
    </TouchableOpacity>
  );
}
