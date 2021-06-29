import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles/service-item-style.js';

export function ServiceItem({type}) {
  const image = getImage(type);
  return (
    <View>
      <Image style={styles.DropInForPetsIcon} source={image} />
      <Text style={styles.DropInForPetsText}> {type} </Text>
    </View>
  );
  function getImage() {
    switch (type) {
      case 'Kids-Portation':
        return require('../img/Kids-Portation.png');
      case 'Drop-In For Pets':
        return require('../img/DropInForPets.png');
      case 'Pet Sitting':
        return require('../img/PetSitting.png');
      case 'Drop-in for House Sitting':
        return require('../img/Drop-inForHouseSitting.png');
      case 'Babysitting':
        return require('../img/BabySitting.png');
      default:
        return type;
    }
  }
}
