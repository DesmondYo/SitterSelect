import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {styles} from './styles/sitter-booking-details-page-style.js';
import {BackButton} from '../components/back-button';
import {Navigation} from 'react-native-navigation';
import {PrimaryButton} from '../components/primary-button.js';
import {BookingProperty} from '../components/booking-property';
import {StatusBadge} from '../components/status-badge';

export function SitterBookingDetailsPage({componentId}) {
  return (
    <>
      <ScrollView
        style={styles.BackgroundStyle}
        contentInset={{bottom: 20, top: 50}}
        contentContainerStyle={styles.ClientBookingDetailsContainer}>
        <BackButton
          onPress={onPress}
          backButtonImage={require('../img/backarrow.png')}
          imageWidth={30}
          imageHeight={30}
          top={42}
        />
        <Text style={styles.Text}> Booking Details </Text>
        <View style={styles.BookingDateStyle}>
          <Text style={styles.Booking}> Status</Text>
          <StatusBadge value={'Pending'} status="pending" />
        </View>
        <View style={styles.BookingDateStyle}>
          <Text style={styles.Booking}> Booking date </Text>
          <Text style={styles.BookingDate}>Wed, 12 Oct 2021</Text>
        </View>
        <View style={styles.LineSeperator} />
        <View style={styles.BookingInfoView}>
          <View>
            <Text style={styles.NameText}>Josie Emch</Text>
            <Text style={styles.DropInForPets}>
              4172 W. Tierra Buena Dr.{'\n'}
              Phoenix, AZ 85394
            </Text>
          </View>
        </View>
        <View style={styles.LineSeperatorBelowBookingInfo} />
        <View style={styles.ViewStyleInformation}>
          <BookingProperty
            image={require('../img/CalenderImage.png')}
            name={'Booked Length'}
            bookedLength={'2 days'}
          />
          <BookingProperty
            image={require('../img/Service.png')}
            name={'Service'}
            bookedLength={'Drop-In for Pets'}
          />
        </View>
        <View style={styles.ViewStyleInformation}>
          <BookingProperty
            image={require('../img/Clock.png')}
            name={'Shift Length'}
            bookedLength={'9 hours'}
          />
          <BookingProperty
            image={require('../img/PhoneIcon.png')}
            name={'Call time'}
            bookedLength={'8 am - 5 pms'}
          />
        </View>
      </ScrollView>

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
    Navigation.pop(componentId);
  }
}
SitterBookingDetailsPage.options = {
  topBar: {
    visible: false,
  },
};
