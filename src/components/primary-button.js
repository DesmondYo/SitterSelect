import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
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
  isLoading,
}) {
  const indicatorColor = fill ? "#ffffff" : '#e09095';
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
      {
        isLoading ? (
          <ActivityIndicator style={{ padding: 14 }} color={indicatorColor} />
        ) : (
          <Text style={textStyle}>{label}</Text>
        )
      }
    </TouchableOpacity>
  );
}
