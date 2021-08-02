import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles/status-badge-style';
import _ from 'lodash';

export function StatusBadge({status}) {
  const textColor = getTextColor();
  const backgroundColor = getBackgroundColor();

  return (
    <View
      style={[
        status === 'awaiting payment'
          ? styles.StatusContainerWidth
          : styles.StatusContainer,
        {backgroundColor},
      ]}>
      <Text style={[styles.StatusText, {color: textColor}]}>
        {_.capitalize(status)}
      </Text>
    </View>
  );

  function getTextColor() {
    if (status === 'approved') {
      return '#009374';
    } else if (status === 'pending') {
      return '#c5b422';
    } else if (status === 'awaiting payment') {
      return '#ffffff';
    } else if (status === 'completed') {
      return '#009374';
    } else {
      return null;
    }
  }

  function getBackgroundColor() {
    if (status === 'approved') {
      return '#bde3db';
    } else if (status === 'pending') {
      return '#fbf7bb';
    } else if (status === 'awaiting payment') {
      return '#FD6A02';
    } else if (status === 'completed') {
      return '#bde3db';
    } else {
      return null;
    }
  }
}
