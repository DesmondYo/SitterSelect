import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {StatusBadge} from './status-badge';
import {styles} from './styles/client-sitter-bookings-style.js';
export function ClientSitterBookings({
  source,
  label,
  serviceType,
  date,
  time,
  status,
  onPress,
}) {
  const image = getServiceImage();
  
  return (
    <TouchableOpacity onPress={onPress} style={styles.OutsideContainer}>
      <View style={styles.InnerContainer}>
        <View style={styles.PhotoAndDetailsContainer}>
          {source && <Image source={source} style={styles.ImageStyling} />}

          <View style={styles.DetailsContainer}>
            {label && <Text style={styles.NameText}>{label}</Text>}
            <View style={styles.ServiceRow}>
              <Image
                style={styles.ServiceImage}
                source={image}
              />
              <Text style={styles.ServiceText}>{serviceType}</Text>
            </View>

            <View style={styles.DateContainer}>
              <Text style={styles.Date}>{date}</Text>
              <Image style={styles.PurpleDot} source={require('../img/PurpleDot.png')} />
              <Text style={styles.Time}>{time}</Text>
            </View>
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
        return require('../img/Kids-Portation.png');
      case 'Drop-In For Pets':
        return require('../img/DropInForSittersNoPinkBackground.png');
      case 'Pet Sitting':
        return require('../img/PetSitting.png');
      case 'Drop-in for House Sitting':
        return require('../img/Drop-inForHouseSitting.png');
      case 'Babysitting':
        return require('../img/BabySitting.png');
      default:
        return require('../img/Drop-inForHouseSitting.png');
    }
  }
}
