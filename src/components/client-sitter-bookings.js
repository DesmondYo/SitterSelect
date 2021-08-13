import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {StatusBadge} from './status-badge';
import {styles} from './styles/client-sitter-bookings-style.js';
export function ClientSitterBookings({
  id,
  source,
  label,
  serviceType,
  date,
  time,
  status,
  approvedPress,
}) {
  const image = getServiceImage();
  return (
    <TouchableOpacity
      onPress={approvedPress}
      style={styles.OutsideContainer}>
      <View style={styles.InnerContainer}>
        <View style={styles.PhotoAndDetailsContainer}>
          {source && status === 'approved' && (
            <Image source={source} style={styles.ImageStyling} />
          )}

          <View style={styles.DetailsContainer}>
            {label && <Text style={styles.NameText}>{label}</Text>}
            <View style={styles.ServiceRow}>
              <Image style={styles.ServiceImage} source={image} />
              <Text style={styles.ServiceText}>{serviceType}</Text>
            </View>

            <View style={styles.DateContainer}>
              <Text style={styles.Date}>{date}</Text>
              <Image
                style={styles.PurpleDot}
                source={require('../img/PurpleDot.png')}
              />
              <Text style={styles.Time}>{time}</Text>
            </View>
            {(id && __DEV__) && <Text style={styles.IdText}>ID: {id}</Text>}
          </View>
        </View>

        <StatusBadge status={status} />
      </View>
    </TouchableOpacity>
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
