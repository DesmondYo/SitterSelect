import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles/sitter-profile-style.js';
import {StatusBadge} from './status-badge';

export function SitterProfile({
  source,
  name,
  serviceType,
  date,
  time,
  status,
  SitterDescription,
}) {
  const image = getServiceImage();
  return (
    <View style={styles.SitterProfileView}>
      {source && <Image source={source} style={styles.ImageStyle} />}
      <View style={styles.ViewStyle}>
        {name && (
          <Text style={[styles.NameText, styles.TextMargin]}>{name}</Text>
        )}

        <View style={styles.ViewStyleText}>
          <Image style={styles.ServiceImage} source={image} />
          <Text style={styles.service}>{serviceType}</Text>
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
      <StatusBadge status={status} />
    </View>
  );
  /**
   * Gets the image of the service type
   *
   * @returns image of service type
   */
  function getServiceImage() {
    switch (serviceType) {
      case 'Kids-Portation':
        return require('../img/Kids-PortationNoBackground.png');
      case 'Drop-In For Pets':
        return require('../img/DropInForSittersNoPinkBackground.png');
      case 'Pet Sitting':
        return require('../img/PetSittingNoBackground.png');
      case 'Drop-in for House Sitting':
        return require('../img/DropinForHouseSittingNoBackground.png');
      case 'Babysitting':
        return require('../img/BabysittingNoBackground.png');
      case 'Child Tutoring':
        return require('../img/ChildTutoringNoBackground.png');
      default:
        return require('../img/DropInForSittersNoPinkBackground.png');
    }
  }
}
