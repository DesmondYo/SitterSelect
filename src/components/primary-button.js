import React from 'react';
import {TouchableOpacity, Text, Pressable} from 'react-native';

export function PrimaryButton({label, disabled, onPress, style, TextStyle, colorPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={style} disabled={disabled}>
      <Text style={TextStyle}>{label}</Text>
      <Pressable onPressIn={colorPress} />
    </TouchableOpacity>
  );
}
