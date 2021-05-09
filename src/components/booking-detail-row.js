import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles/booking-detail-row-style.js';

export function BookingDetailRow({label, value, price}) {
  return (
    <View style={styles.BookingDetails}>
      <Text style={styles.label}> {label}</Text>
      <View style={styles.value}>
        <Text style={styles.valueText}>{value}</Text>
      </View>
    </View>
  );
}
