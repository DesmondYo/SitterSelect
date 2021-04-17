import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles/booking-success-page-style.js';
import {PrimaryButton} from '../components/primary-button';
import {Navigation} from 'react-native-navigation';

export function BookingSuccessPage({componentId}) {
  return (
    <View style={styles.PageContainer}>
      <PrimaryButton
        label="OK"
        onPress={onLogin}
        style={styles.OkButton}
        TextStyle={styles.OkButtonText}
      />
      <Image
        source={require('../img/CheckmarkLogo.png')}
        style={styles.CheckmarkLogo}
      />
      <Text style={styles.Text}>Your booking request was succesfull!</Text>
      <Text style={styles.ParagraphText}>
        You can continue to the payment if the sitter has approved your booking
      </Text>
    </View>
  );

  function onLogin() {
    Navigation.push(componentId, {
      component: {
        name: 'ClientBookingPage',
      },
    });
  }
}

BookingSuccessPage.options = {
  topBar: {
    visible: false,
  },
};
