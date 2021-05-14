import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles/booking-property-style.js';

export function BookingProperty({image, name, bookedLength}) {
  return (
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
      <Image source={image} style={styles.ImageStyle} />
      <View style={styles.TitleView}>
        <Text style={[styles.Title, styles.TextLengthView]}>{name}</Text>
        <View style={styles.ViewLengthOfTime}>
          <Text style={styles.LengthOfTime}>{bookedLength}</Text>
        </View>
      </View>
    </View>
  );
}
