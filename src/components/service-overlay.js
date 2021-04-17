import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles/service-overlay-style.js';
import {AwesomeModal} from 'react-native-awesome-modal';
import {Navigation} from 'react-native-navigation';

export function ServiceOverlay({componentId}) {
  return (
    <AwesomeModal
      onClose={() => Navigation.dismissOverlay(componentId)}
      onPressOutside={() => console.log('outside')}
      modalBottomMargin={0}
      modalContainerStyle={styles.containerStyle}
      modalOverlayStyle={{
        backgroundColor: 'black',
      }}
      modalInnerContainerStyle={{backgroundColor: '#fcf0f2'}}>
      <TouchableOpacity style={styles.rectangle}>
        <Image
          source={require('../img/ChildTutoring.png')}
          style={styles.DropInForPetsIcon}
        />
        <Text style={styles.ChildTutoringTextStyle}>Child Tutoring</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rectangle}>
        <Image
          source={require('../img/Kids-Portation.png')}
          style={styles.DropInForPetsIcon}
        />
        <Text style={styles.ChildTutoringTextStyle}>Kids-Portation</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rectangle}>
        <Image
          source={require('../img/PetSitting.png')}
          style={styles.DropInForPetsIcon}
        />
        <Text style={styles.ChildTutoringTextStyle}>Pet Sitting</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rectangle}>
        <Image
          source={require('../img/Drop-inForHouseSitting.png')}
          style={styles.DropInForPetsIcon}
        />
        <Text style={styles.ChildTutoringTextStyle}>
          Drop-in for House Sitting
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rectangle}>
        <Image
          source={require('../img/OvernightHouseSitting.png')}
          style={styles.DropInForPetsIcon}
        />
        <Text style={styles.ChildTutoringTextStyle}>
          Overnight House Sitting
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rectangle}>
        <Image
          source={require('../img/BabySitting.png')}
          style={styles.DropInForPetsIcon}
        />
        <Text style={styles.ChildTutoringTextStyle}>Babysitting</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rectangle}>
        <Image
          source={require('../img/EventSitting.png')}
          style={styles.DropInForPetsIcon}
        />
        <Text style={styles.ChildTutoringTextStyle}>Event-Sitting</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.close}>Close</Text>
      </TouchableOpacity>
    </AwesomeModal>
  );
}
