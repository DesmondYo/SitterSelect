import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles/tip-button-style.js';

export function TipButton({label, onPress, selected = false}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[styles.Tip, {backgroundColor: selected ? '#e09095' : null}]}>
        <Text style={[styles.TipText, {color: selected ? 'white' : '#e09095'}]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
