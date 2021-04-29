import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AwesomeModal} from 'react-native-awesome-modal';
import {Navigation} from 'react-native-navigation';
import {styles} from './styles/final-payment-overlay-style.js';

export function FinalPaymentOverlay({componentId, parentComponentId}) {
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

      <TouchableOpacity style={styles.rectangle} onPress={onAccept}>
        <Text style={styles.buttonTextStyle}>Yes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={(styles.buttonTextStyle, styles.rectangletwo)} onPress={onDecline}>
        <Text style={styles.buttonTextStyleRectangleTwo}>No</Text>
      </TouchableOpacity>
    </AwesomeModal>
  );

  async function onAccept() {
    await Navigation.dismissOverlay(componentId);
    Navigation.push(parentComponentId, {
      component: {
        name: 'LoginPage',
      },
    });
  }

  async function onDecline() {
    await Navigation.dismissOverlay(componentId);
    Navigation.showOverlay({
      component: {
        name: 'TippingOverlay',
        options: {
          layout: {
            backgroundColor: 'transparent',
            componentBackgroundColor: 'transparent',
          },
        },
      },
    })
  }
}
