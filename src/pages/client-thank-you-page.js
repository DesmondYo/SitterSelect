import React from 'react';
import {Image, SafeAreaView, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {PrimaryButton} from '../components/primary-button.js';
import {styles} from './styles/client-thank-you-page-style.js';

export function ClientThankYouPage({componentId}) {
  return (
    <SafeAreaView style={styles.PageContainer}>
      <Image
        source={require('../img/CheckmarkLogo.png')}
        style={styles.CheckmarkLogo}
      />
      <Text style={styles.Text}>Your payment was succesful!</Text>
      <PrimaryButton
        label="Back To My Bookings"
        onPress={onPress}
        fill={true}
        containerStyle={{width: 343}}
        align={{alignSelf: 'center'}}
        styling={{bottom: 40}}
        bottom={{position: 'absolute'}}
      />
    </SafeAreaView>
  );
  function onPress() {
    Navigation.push(componentId, {
      component: {
        name: 'ClientBookingPage',
      },
    });
  }
}
ClientThankYouPage.options = {
  topBar: {
    visible: false,
  },
};
