import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles/booking-detail-row-style.js';

export function BookingDetailRow({label, value, hasBackground = false, textColor = "#5E4386", backgroundColor = "#F5EFFF" }) {
  return (
    <View style={styles.BookingDetails}>
      <Text style={styles.label}> {label}</Text>
      <View style={[styles.value, { backgroundColor: hasBackground ? backgroundColor : null, borderRadius: hasBackground ? 5 : null }]}>
        <Text style={[styles.valueText, { color: hasBackground ? textColor : '#92465a' }]}>{value}</Text>
      </View>
    </View>
  );
}
