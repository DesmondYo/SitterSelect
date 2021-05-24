import React from 'react';
import {Image, Text} from 'react-native';
import {styles} from './styles/booking-success-page-style.js';
import {PrimaryButton} from '../components/primary-button';
import {Navigation} from 'react-native-navigation';
import {SafeAreaView} from 'react-native';

export function BookingSuccessPage({componentId}) {
  return (
    <SafeAreaView style={styles.PageContainer}>
      <Image
        source={require('../img/CheckmarkLogo.png')}
        style={styles.CheckmarkLogo}
      />
      <Text style={styles.Text}>Your booking request was succesfull!</Text>
      <Text style={styles.ParagraphText}>
        You can continue to the payment if the sitter has approved your booking
      </Text>
      <PrimaryButton
        label="OK"
        onPress={onLogin}
        style={styles.OkButton}
        TextStyle={styles.OkButtonText}
      />
    </SafeAreaView>
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
