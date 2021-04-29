import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AwesomeModal} from 'react-native-awesome-modal';
import {Navigation} from 'react-native-navigation';
import {styles} from './styles/final-payment-overlay-style.js';

export function FinalPaymentOverlay({componentId}) {
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
      <Text style={styles.text}>Are you sure the sitter worked 5 hours?</Text>

      <TouchableOpacity style={styles.rectangle}>
        <Text style={styles.buttonTextStyle}>Yes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={(styles.buttonTextStyle, styles.rectangletwo)}>
        <Text style={styles.buttonTextStyleRectangleTwo}>No</Text>
      </TouchableOpacity>
    </AwesomeModal>
  );
}
