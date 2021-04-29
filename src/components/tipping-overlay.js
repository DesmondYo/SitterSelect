import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {styles} from './styles/tipping-overlay-style.js';
import {AwesomeModal} from 'react-native-awesome-modal';
import {Navigation} from 'react-native-navigation';
import {PrimaryButton} from './primary-button.js';

export function TippingOverlay({componentId}) {
  const [number, onChangeNumber] = useState(null);
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
      <Text style={styles.inputText}>Input Tip</Text>
      <TextInput
        style={styles.input}
        placeholder="Tip Amount"
        value={number}
        keyboardType="number-pad"
      />
      <PrimaryButton
        label="Confirm"
        style={styles.TipButton}
        TextStyle={styles.TipButtonText}
      />
      <TouchableOpacity onPress={() => awesomeModalRef.current.close()}>
        <Text style={styles.close}>Close</Text>
      </TouchableOpacity>
    </AwesomeModal>
  );

  function onPressOther() {
    awesomeModalRef.current.close();
  }
}
