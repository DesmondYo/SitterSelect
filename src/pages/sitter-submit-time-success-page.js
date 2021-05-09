import React from 'react';
import {Image, SafeAreaView, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {PrimaryButton} from '../components/primary-button.js';
import {styles} from './styles/sitter-submit-time-success-page-style.js';

export function SitterSubmitTimeSuccessPage({componentId}) {
  return (
    <SafeAreaView style={styles.PageContainer}>
      <Image
        source={require('../img/CheckmarkLogo.png')}
        style={styles.CheckmarkLogo}
      />
      <Text style={styles.Text}>Your time submitted was succesful!</Text>
      <PrimaryButton
        label="Back To My Bookings"
        onPress={onLogin}
        style={styles.OkButton}
        TextStyle={styles.OkButtonText}
      />
    </SafeAreaView>
  );
  function onLogin() {
    Navigation.push(componentId, {
      component: {
        name: 'SitterBookingPage',
      },
    });
  }
}

SitterSubmitTimeSuccessPage.options = {
  topBar: {
    visible: false,
  },
};
