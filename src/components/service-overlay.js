import React, {useRef} from 'react';
import {Text, TouchableOpacity, Image, Platform, Linking} from 'react-native';
import {styles} from './styles/service-overlay-style.js';
import {AwesomeModal} from 'react-native-awesome-modal';
import {Navigation} from 'react-native-navigation';
import ActionSheet from '@alessiocancian/react-native-actionsheet';
const phoneNumber = 'Call (602) 803-4851';

export function ServiceOverlay({componentId}) {
  const actionSheetRef = useRef(null);
  const awesomeModalRef = useRef(null);

  return (
    <AwesomeModal
      ref={awesomeModalRef}
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

      <TouchableOpacity style={styles.rectangle} onPress={onPressEventSitting}>
        <Image
          source={require('../img/EventSitting.png')}
          style={styles.DropInForPetsIcon}
        />
        <Text style={styles.ChildTutoringTextStyle}>Event-Sitting</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => awesomeModalRef.current.close()}>
        <Text style={styles.close}>Close</Text>
      </TouchableOpacity>

      <ActionSheet
        ref={actionSheetRef}
        title={'Please Contact Josie Emch for Further Booking'}
        options={[phoneNumber, 'cancel']}
        cancelButtonIndex={1}
        onPress={onSelectOption}
      />
    </AwesomeModal>
  );

  function onPressEventSitting() {
    //  awesomeModalRef.current.close();
    actionSheetRef.current.show();
  }

  function onSelectOption(index) {
    if (index === 0) {
      if (Platform.OS === 'android') {
        Linking.openURL('tel:${' + phoneNumber + '}');
      } else {
        Linking.openURL('telprompt:${' + phoneNumber + '}');
      }
    }
  }
}
