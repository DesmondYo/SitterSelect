import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {styles} from './styles/sitter-booking-details-page-style.js';
import {BackButton} from '../components/back-button';
import {Navigation} from 'react-native-navigation';
import {PrimaryButton} from '../components/primary-button.js';

export function SitterBookingDetailsPage({componentId}) {
  return (
    <>
      <ScrollView
        style={styles.BackgroundStyle}
        contentInset={{bottom: 20, top: 20}}
        contentContainerStyle={styles.ClientBookingDetailsContainer}>
        <BackButton
          onPress={onPress}
          backButtonImage={require('../img/backarrow.png')}
          imageWidth={30}
          imageHeight={30}
        />
        <View style={styles.ViewFlex}>
          <Text style={styles.Text}> Booking Details </Text>
        </View>
        <View style={styles.BookingDateStyle}>
          <Text style={styles.Booking}> Booking date </Text>
          <Text style={styles.BookingDate}>Wed, 12 Oct 2021</Text>
        </View>
        <View style={styles.LineSeperator} />
        <Text style={styles.BookingInfo}> Booking Info </Text>
        <View style={styles.BookingInfoView}>
          <Image
            source={require('../img/LadyInPic.png')}
            style={styles.ImageStyle}
          />
          <View style={styles.ViewStyle}>
            <Text style={[styles.NameText, styles.TextMargin]}>Josie Emch</Text>
            <Text style={styles.DropInForPets}>
              4172 W. Tierra Buena Dr.{'\n'}
              Phoenix, AZ 85394
            </Text>
          </View>
        </View>
        <View style={styles.LineSeperatorBelowBookingInfo} />
        <View style={styles.ViewStyleInformation}>
          <Image
            source={require('../img/CalenderImage.png')}
            style={styles.ImageCalenderStyle}
          />
          <View style={styles.SitterTitleStyle}>
            <Text style={[styles.BookedLength, styles.BookedLengthStyle]}>
              Booked Length
            </Text>
            <View style={styles.SitterInformationStyle}>
              <Text style={styles.days}>2 days</Text>
            </View>
          </View>
          <Image
            source={require('../img/Service.png')}
            style={styles.ImageServiceStyle}
          />
          <View style={styles.SitterTitleStyle}>
            <Text style={[styles.BookedLength, styles.BookedLengthStyle]}>
              Service
            </Text>
            <View style={styles.SitterInformationStyle}>
              <Text style={styles.days}>Drop-In for Pets</Text>
            </View>
          </View>
        </View>
        <View style={styles.ViewStyleInformation}>
          <Image
            source={require('../img/Clock.png')}
            style={styles.ImageCalenderStyle}
          />
          <View style={styles.SitterTitleStyle}>
            <Text style={[styles.BookedLength, styles.BookedLengthStyle]}>
              Shift Length
            </Text>
            <View style={styles.SitterInformationStyle}>
              <Text style={styles.days}>9 hours</Text>
            </View>
          </View>
        </View>

        <View style={styles.PrimaryButtonStyle}>
          <PrimaryButton
            label="Accept"
            style={styles.MakeFinalPaymentButton}
            TextStyle={styles.MakeFinalPaymentButtonText}
            onPress={AcceptPress}
          />
          <PrimaryButton
            label="Decline"
            style={styles.ContactJosieButton}
            TextStyle={styles.ContactJosieButtonText}
            onPress={onPress}
          />
        </View>
      </ScrollView>
    </>
  );
  function AcceptPress() {
    Navigation.push(componentId, {
      component: {
        name: 'SitterClockInClockOutSubmitTimePage',
      },
    });
  }
  function onPress() {
    Navigation.push(componentId, {
      component: {
        name: 'SitterBookingPage',
      },
    });
  }
}
SitterBookingDetailsPage.options = {
  topBar: {
    visible: false,
  },
};
