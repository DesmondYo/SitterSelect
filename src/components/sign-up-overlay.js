import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles/sign-up-overlay-style.js';
import {AwesomeModal} from 'react-native-awesome-modal';
import {Navigation} from 'react-native-navigation';

export function SignUpOverlay({componentId}) {
  return (
    <AwesomeModal
      onClose={() => Navigation.dismissOverlay(componentId)}
      onPressOutside={() => console.log('outside')}
      modalBottomMargin={0}
      modalContainerStyle={styles.containerStyle}
      modalOverlayStyle={styles.modalOverlayStyle}
      modalInnerContainerStyle={styles.modalInnerContainerStyle}>
      <Text style={styles.text}>What do you need?</Text>

      <TouchableOpacity style={styles.rectangle}>
        <Text style={styles.buttonTextStyle}>I’m looking for a sitter.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={(styles.buttonTextStyle, styles.rectangletwo)}>
        <Text style={styles.buttonTextStyle}>I’d like to become a sitter.</Text>
      </TouchableOpacity>
    </AwesomeModal>
  );
}
