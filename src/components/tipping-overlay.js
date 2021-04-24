import React, {useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles/tipping-overlay-style.js';
import {AwesomeModal} from 'react-native-awesome-modal';
import {Navigation} from 'react-native-navigation';

export function TippingOverlay({componentId}) {
  const awesomeModalRef = useRef(null);
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
      <TouchableOpacity style={styles.rectangle10} onPress={onPressOther}>
        <Text style={styles.buttonTextStyle10}>10</Text>
      </TouchableOpacity>

      <TouchableOpacity style={(styles.buttonTextStyle20, styles.rectangle20)}>
        <Text style={styles.buttonTextStyle20}>20</Text>
      </TouchableOpacity>

      <TouchableOpacity style={(styles.buttonTextStyle30, styles.rectangle30)}>
        <Text style={styles.buttonTextStyle30}>30</Text>
      </TouchableOpacity>

      <TouchableOpacity style={(styles.buttonTextStyle40, styles.rectangle40)}>
        <Text style={styles.buttonTextStyle40}>40</Text>
      </TouchableOpacity>

      <TouchableOpacity style={(styles.buttonTextStyle50, styles.rectangle50)}>
        <Text style={styles.buttonTextStyle50}>50</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => awesomeModalRef.current.close()}>
        <Text style={styles.close}>Close</Text>
      </TouchableOpacity>
    </AwesomeModal>
  );
  function onPressOther() {
    awesomeModalRef.current.close();
  }
}
