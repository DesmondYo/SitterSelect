import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles/sitter-profile-style.js';

export function SitterProfile({
  image,
  name,
  service,
  serviceImage,
  date,
  time,
  SitterDescription,
}) {
  return (
    <View style={styles.SitterProfileView}>
      <Image source={image} style={styles.ImageStyle} />
      <View style={styles.ViewStyle}>
        <Text style={[styles.NameText, styles.TextMargin]}>{name}</Text>

        <View style={styles.ViewStyleText}>
          <Image style={styles.ServiceImage} source={serviceImage} />
          <Text style={styles.service}>{service}</Text>
        </View>
        {SitterDescription ? (
          <Text style={styles.SitterDescription}>{SitterDescription}</Text>
        ) : null}
        {date && time ? (
          <View style={styles.ServiceView}>
            <Text style={styles.date}>{date}</Text>
            <Image
              style={styles.PurpleDot}
              source={require('../img/PurpleDot.png')}
            />
            <Text style={styles.time}>{time}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}
