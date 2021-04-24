import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Pressable,
} from 'react-native';

export function PrimaryButton({label, onPress, style, TextStyle, colorPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style}>
        <Text style={TextStyle}>{label}</Text>
        <Pressable onPressIn={colorPress}></Pressable>
      </View>
    </TouchableOpacity>
  );
}
