import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles/primary-button-style.js';

export function PrimaryButton({
  label,
  disabled,
  onPress,
  fill,
  containerStyle,
  align,
  styling,
  bottom,
}) {
  const buttonStyle = fill ? styles.FilledButton : styles.OutlinedStyle;
  const textStyle = fill ? styles.FilledButtonText : styles.OutlinedStyleText;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        bottom,
        styling,
        align,
        containerStyle,
        buttonStyle,
        disabled && {backgroundColor: '#B7B7B7'},
      ]}
      disabled={disabled}>
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
}
