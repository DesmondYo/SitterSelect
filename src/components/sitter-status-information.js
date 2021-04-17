import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles/sitter-status-information-style.js';

export function SitterStatusInformation({style, source, TextStyle, label}) {
  return (
    <View style={style}>
      <Image
        source={source}
        style={{width: 51, height: 51, marginTop: 17, marginLeft: 16}}
      />
      <Text style={TextStyle}>{label}</Text>
    </View>
  );
}
