import React from 'react';
import {Marker} from 'react-native-maps';

export function SitterMapMarker({icon, onPress, latitude, longitude}) {
  return (
      <Marker
        coordinate={{latitude: latitude, longitude: longitude}}
        icon={icon}
        onPress={onPress}
      />
  );
}
