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
          Please check your device periodically see if a sitter has accepted your booking.
        </Text>
        <View style={styles.PrimaryButtonStyle}>
          <PrimaryButton
            label="OK"
            onPress={onLogin}
            fill={true}
            containerStyle={{width: 343}}
          />
          <PrimaryButton
            label="Edit booking request"
            onPress={EditBookingRequest}
            fill={false}
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
