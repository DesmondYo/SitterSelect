import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles/booking-success-page-style.js';
import {PrimaryButton} from '../components/primary-button';
import {Navigation} from 'react-native-navigation';
import {SafeAreaView} from 'react-native';

export function BookingSuccessPage({componentId}) {
  return (
    <>
      <SafeAreaView style={styles.PageContainer}>
        <Image
          source={require('../img/WaitIcon.png')}
          style={styles.CheckmarkLogo}
        />
        <Text style={styles.Text}>Your booking request is pending!</Text>
        <Text style={styles.ParagraphText}>
          You will be notified once a sitter accepts your booking.
        </Text>
        <View style={styles.PrimaryButtonStyle}>
          <PrimaryButton
            label="OK"
            style={styles.MakeFinalPaymentButton}
            TextStyle={styles.MakeFinalPaymentButtonText}
            onPress={onLogin}
          />
          <PrimaryButton
            label="Edit booking request"
            style={styles.ContactJosieButton}
            TextStyle={styles.ContactJosieButtonText}
            onPress={EditBookingRequest}
          />
        </View>
      </SafeAreaView>
    </>
  );

  function onLogin() {
    Navigation.push(componentId, {
      component: {
        name: 'ClientBookingPage',
      },
    });
  }

  function EditBookingRequest() {
    Navigation.push(componentId, {
      component: {
        name: 'SitterDetailsPage',
      },
    });
  }
}

BookingSuccessPage.options = {
  topBar: {
    visible: false,
  },
};
