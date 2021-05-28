import React from 'react';
import { Image } from 'react-native';
import {Marker} from 'react-native-maps';

export function SitterMapMarker({item, icon, onPress}) {
  const documentId = item.id;
  const data = item.data();
  const latitude = data?.location_longlat?._latitude;
  const longitude = data?.location_longlat?._longitude;

  if(latitude && longitude) {
    return (
      <Marker
        coordinate={{latitude: latitude, longitude: longitude}}
        onPress={() => onPress(documentId)}
      >
        <Image
          source={{ uri: data.image_url }}
          style={{width: 60, height: 60, borderRadius: 30}}
        />
      </Marker>
    );
  }

  return null;
}