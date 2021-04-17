import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {styles} from './styles/primary-button-style.js';

export function PrimaryButton({label, onPress, style, TextStyle}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style}>
        <Text style={TextStyle}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
