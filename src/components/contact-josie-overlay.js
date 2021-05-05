import ActionSheet from '@alessiocancian/react-native-actionsheet';
import React, {useRef} from 'react';
import {Linking, Platform, Text, TouchableOpacity} from 'react-native';
import {AwesomeModal} from 'react-native-awesome-modal';
import {Navigation} from 'react-native-navigation';
import {styles} from './styles/contact-josie-overlay-style.js';
const phoneNumber = 'Call (602) 803-4851';

export function ContactJosieOverlay({componentId}) {
  const actionSheetRef = useRef(null);
  const isActionSheetOpen = useRef(false);
  const awesomeModalRef = useRef(null);
  return (
    <AwesomeModal
      ref={awesomeModalRef}
      onClose={onClose}
      onPressOutside={() => console.log('outside')}
      modalBottomMargin={0}
      modalContainerStyle={styles.containerStyle}
      modalOverlayStyle={styles.ModalOverlayStyle}
      modalInnerContainerStyle={styles.modalInnerContainerStyle}>
      <Text style={styles.text}>
        Please call SitterSelect’s owner, Josie Emch, for more details on this
        matter
      </Text>

      <TouchableOpacity style={styles.rectangle} onPress={onPressContactJosie}>
        <Text style={styles.buttonTextStyle}>Contact Josie Emch</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => awesomeModalRef.current.close()} />
      <ActionSheet
        ref={actionSheetRef}
        options={[phoneNumber, 'cancel']}
        cancelButtonIndex={1}
        onPress={onSelectOption}
      />
    </AwesomeModal>
  );

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
  function onPressContactJosie() {
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
