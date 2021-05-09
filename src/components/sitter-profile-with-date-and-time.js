import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles/sitter-profile-with-date-and-time-style.js';

export function SitterProfileWithDateAndTime({
  image,
  name,
  service,
  serviceImage,
  date,
  PurpleDot,
  time,
}) {
  return (
    <>
      <Image source={image} style={styles.ImageStyle} />
      <View style={styles.BookingInfoMargin}>
        <Text style={[styles.NameText, styles.NameMarginStyle]}>{name} </Text>

        <View style={styles.ServiceView}>
          <Image style={styles.ServiceImage} source={serviceImage} />
          <Text style={styles.DropInForPets}>{service}</Text>
        </View>
        <View style={styles.ServiceView}>
          <Text style={styles.date}>{date}</Text>
          <Image style={styles.PurpleDot} source={PurpleDot} />
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    </>
  );
}
