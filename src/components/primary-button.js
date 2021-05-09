import React from 'react';
import {TouchableOpacity, Text, Pressable} from 'react-native';

export function PrimaryButton({label, onPress, style, TextStyle, colorPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={TextStyle}>{label}</Text>
      <Pressable onPressIn={colorPress} />
    </TouchableOpacity>
  );
}
