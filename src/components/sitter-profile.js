import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles/sitter-profile-style.js';

export function SitterProfile({image, name, service, serviceImage}) {
  return (
    <>
      <Image source={image} style={styles.ImageStyle} />
      <View style={styles.ViewStyle}>
        <Text style={[styles.NameText, styles.TextMargin]}>{name}</Text>

        <View style={styles.ViewStyleText}>
          <Image style={styles.ServiceImage} source={serviceImage} />
          <Text style={styles.service}>{service}</Text>
        </View>
      </View>
    </>
  );
}
