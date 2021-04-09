import React from 'react';
import {View} from 'react-native';
import {styles} from './styles/booking-success-page-style.js';
import {PrimaryButton} from '../components/primary-button';

export function BookingSuccessPage() {
  return (
    <View>
      <PrimaryButton label="OK" onPress={onLogin} />
    </View>
  );
}
