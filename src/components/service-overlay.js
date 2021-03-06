import React, {useRef} from 'react';
import {Text, TouchableOpacity, Platform, Linking} from 'react-native';
import {styles} from './styles/service-overlay-style.js';
import {AwesomeModal} from 'react-native-awesome-modal';
import {Navigation} from 'react-native-navigation';
import ActionSheet from '@alessiocancian/react-native-actionsheet';
import {ServiceButton} from './service-button';
import {ServiceTypes} from '../config/sitter-types.js';
const phoneNumber = '(602) 803-4851';

export function ServiceOverlay({componentId, onChange}) {
  const actionSheetRef = useRef(null);
  const awesomeModalRef = useRef(null);
  const isActionSheetOpen = useRef(false);

  return (
    <AwesomeModal
      ref={awesomeModalRef}
      onClose={onClose}
      modalBottomMargin={0}
      modalContainerStyle={styles.containerStyle}
      modalOverlayStyle={styles.modalOverlayStyle}
      modalInnerContainerStyle={styles.modalInnerContainerStyle}>
      <ServiceButton
        image={require('../img/ChildTutoring.png')}
        label="Child Tutoring"
        onPress={() => onChangeService(ServiceTypes.ChildTutoring)}
      />
      <ServiceButton
        image={require('../img/DropInForPets.png')}
        label="Pet / House Sitting Drop-in"
        onPress={() => onChangeService(ServiceTypes.PetsHouseSittingDropin)}
      />
      <ServiceButton
        image={require('../img/Kids-Portation.png')}
        label="Kids-Portation"
        onPress={onPressEventSitting}
      />
      <ServiceButton
        image={require('../img/BabySitting.png')}
        label="Babysitting"
        onPress={() => onChangeService(ServiceTypes.Babysitting)}
      />
      <ServiceButton
        image={require('../img/OvernightHouseSitting.png')}
        label="Pet / House Sitting Overnight"
        onPress={() => onChangeService(ServiceTypes.PetHouseSittingOvernight)}
      />
      <ServiceButton
        image={require('../img/EventSitting.png')}
        label="Event-Sitting"
        onPress={onPressEventSitting}
      />
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

  /**
   * Calls the onChnage callback and dismisses the overlay
   *
   * @param service - type of service
   */
  function onChangeService(service) {
    Navigation.dismissOverlay(componentId);
    if (onChange) onChange(service);
  }

  /**
   * Dismisses the overlay when the actionsheet
   * is not visible. AKA, the user did not select
   * event sitting, which opens an actionsheet
   * with a mobile number
   */
  function onClose() {
    if (!isActionSheetOpen.current) {
      Navigation.dismissOverlay(componentId);
    }
  }
  /**
   * This closes the modal with an animation,
   * then it shows the action sheet and
   * sets isActionSheetOpen to true, so
   * we don't dismiss the modal when actionsheet
   * is open
   */
  function onPressEventSitting() {
    isActionSheetOpen.current = true;
    awesomeModalRef.current.close();
    actionSheetRef.current.show();
  }

  /**
   * This closes the ActionSheet Phonenumber
   * When you press cancel
   */
  function onSelectOption(index) {
    Navigation.dismissOverlay(componentId);
    isActionSheetOpen.current = false;

    if (index === 0) {
      if (Platform.OS === 'android') {
        Linking.openURL('tel:${' + phoneNumber + '}');
      } else {
        Linking.openURL('telprompt:${' + phoneNumber + '}');
      }
    }
  }
}
