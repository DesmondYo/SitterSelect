import React, {useRef, useState} from 'react';
import {Text, TouchableOpacity, TextInput} from 'react-native';
import {styles} from './styles/tipping-overlay-style.js';
import {AwesomeModal} from 'react-native-awesome-modal';
import {Navigation} from 'react-native-navigation';
import {PrimaryButton} from './primary-button.js';

export function TippingOverlay({componentId, onChange}) {
  const [number, setNumber] = useState(0);
  const awesomeModalRef = useRef(null);
  return (
    <AwesomeModal
      ref={awesomeModalRef}
      onClose={() => Navigation.dismissOverlay(componentId)}
      onPressOutside={() => console.log('outside')}
      modalBottomMargin={0}
      modalContainerStyle={styles.containerStyle}
      modalOverlayStyle={styles.modalOverlayStyle}
      modalInnerContainerStyle={styles.modalInnerContainerStyle}>
      <Text style={styles.inputText}>Input Tip</Text>
      <TextInput
        style={styles.input}
        placeholder="Tip Amount"
        value={number}
        onChangeText={setNumber}
        keyboardType="number-pad"
      />
      <PrimaryButton
        label="Confirm"
        fill={true}
        containerStyle={{width: '60%'}}
        align={{alignSelf: 'center'}}
        onPress={() => {
          Navigation.dismissOverlay(componentId);
          onChange(number);
        }}
        TextStyle={styles.TipButtonText}
      />
      <TouchableOpacity onPress={() => awesomeModalRef.current.close()}>
        <Text style={styles.close}>Close</Text>
      </TouchableOpacity>
    </AwesomeModal>
  );
}
