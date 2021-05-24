import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles/status-badge-style';
import _ from 'lodash';

export function StatusBadge({status}) {
  const textColor = getTextColor();
  const backgroundColor = getBackgroundColor();

  return (
    <View style={[styles.StatusContainer, {backgroundColor}]}>
      <Text style={[styles.StatusText, {color: textColor}]}>
        {_.capitalize(status)}
      </Text>
    </View>
  );

  function getTextColor() {
    if (status === 'approved') {
      return '#5E4386';
    } else if (status === 'declined') {
      return '#c52222';
    } else if (status === 'pending') {
      return '#c5b422';
    } else {
      return null;
    }
  }

  function getBackgroundColor() {
    if (status === 'approved') {
      return '#F5EFFF';
    } else if (status === 'declined') {
      return '#fde7e7';
    } else if (status === 'pending') {
      return '#fdfbe7';
    } else {
      return null;
    }
  }
}
