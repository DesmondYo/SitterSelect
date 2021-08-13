import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {styles} from './styles/client-payment-page-style.js';
import {BackButton} from '../components/back-button';
import {Navigation} from 'react-native-navigation';
import {TipButton} from '../components/tip-button.js';
import {PrimaryButton} from '../components/primary-button.js';
import {SitterProfile} from '../components/sitter-profile';
import {BookingDetailRow} from '../components/booking-detail-row';
import Firestore from '@react-native-firebase/firestore';
import dayjs from 'dayjs';
import {getServicePrice} from '../utils/get-service-price';

export function CheckoutPaymentPage({componentId, id}) {
  const [selectedTip, setSelectedTip] = useState(0);
  const [bookingData, setBookingData] = useState(null);

  const hoursBetweenStartAndEndTime = Math.abs(
    dayjs(bookingData?.start_time, 'h:m A').diff(
      dayjs(bookingData?.end_time, 'h:m A'),
      'h',
    ),
  );
  const bookingPrice = getServicePrice(
    bookingData?.service_type,
    hoursBetweenStartAndEndTime,
  );
  const bookingFee = 8;
  const tip = parseFloat(selectedTip);

  var customParseFormat = require('dayjs/plugin/customParseFormat');
  dayjs.extend(customParseFormat);
  dayjs('4:15 PM', 'h:m A').isValid();

  console.log(bookingData);
  useEffect(FetchClientBooking, []);

  return (
    <>
      <ScrollView
        style={styles.backgroundStyleColor}
        contentContainerStyle={styles.CheckoutPaymentPageContainer}
        contentInset={{top: 0, bottom: 150}}>
        <BackButton
          onPress={onPress}
          backButtonImage={require('../img/backarrow.png')}
          imageWidth={30}
          imageHeight={30}
          top={10}
        />
        <Text style={styles.Text}> Confirm & Pay </Text>
        <View style={styles.ViewStylePricingDetails}>
          <Text style={styles.BookingInfoText}> Booking Details </Text>
        </View>
        <View style={styles.ViewStyleSitterInformation}>
          <SitterProfile
            source={{uri: bookingData?.sitter_image}}
            name={bookingData?.sitter_first_name}
            serviceType={bookingData?.service_type}
            date={bookingData?.date}
            time={[bookingData?.start_time, ' - ', bookingData?.end_time]}
          />
        </View>
        <View style={styles.MainRectangle}>
          <Text style={styles.TotalHoursWorked}>
            Total hours {bookingData?.sitter_first_name} worked :{' '}
            {hoursBetweenStartAndEndTime} hours
          </Text>
        </View>
        <View style={styles.LineSeperator} />
        <View style={styles.GiveTipForServiceStyle}>
          <Text style={styles.GiveTipForService}> Give tip for service </Text>
          <Text style={styles.Optional}>(Optional)</Text>
        </View>
        <View style={styles.GiveTipForServiceStyle}>
          <TipButton
            label="$3"
            selected={selectedTip === 3}
            onPress={() => setSelectedTip(3)}
          />
          <TipButton
            label="$5"
            selected={selectedTip === 5}
            onPress={() => setSelectedTip(5)}
          />
          <TipButton
            label="$7"
            selected={selectedTip === 7}
            onPress={() => setSelectedTip(7)}
          />
          <TipButton label="Other" onPress={TippingOverlay} />
        </View>
        <View style={[styles.LineSeperator, styles.NameMarginStyle]} />
        <View style={styles.ViewStyleBookingInfo}>
          <Text style={styles.BookingInfoText}> Price details </Text>
        </View>
        <BookingDetailRow label={'Booking fee'} value={'$8/day'} />
        <BookingDetailRow label={'Booking price'} value={`$${bookingPrice}`} />
        <View style={styles.ViewStyleBookingInfo}>
          <Text style={styles.Total}>Total</Text>
          <View style={styles.PriceDetailsStyle}>
            <Text style={styles.TotalText}>{`$${
              bookingPrice + bookingFee + parseFloat(selectedTip)
            }`}</Text>
          </View>
        </View>
        <View style={styles.PrimaryButtonStyle}>
          <PrimaryButton
            label="Confirm & Pay"
            fill={true}
            containerStyle={{width: 343}}
            onPress={onOpenOverlay}
          />
        </View>
      </ScrollView>
    </>
  );

  function FetchClientBooking() {
    const unsubscribe = Firestore()
      .collection('bookings')
      .doc(id)
      .onSnapshot(document => setBookingData(document.data()));
    return () => unsubscribe();
  }

  function onPress() {
    Navigation.pop(componentId, {
      component: {
        name: 'ClientBookingPage',
        passProps: {
          id,
        },
      },
    });
  }
  function onOpenOverlay() {
    Navigation.showOverlay({
      component: {
        name: 'FinalPaymentOverlay',
        passProps: {
          parentComponentId: componentId,
          id,
          bookingPrice,
          bookingFee,
          tip,
        },
        options: {
          layout: {
            backgroundColor: 'transparent',
            componentBackgroundColor: 'transparent',
          },
        },
      },
    });
  }
  function TippingOverlay() {
    Navigation.showOverlay({
      component: {
        name: 'TippingOverlay',
        passProps: {
          onChange: setSelectedTip,
        },
        options: {
          layout: {
            backgroundColor: 'transparent',
            componentBackgroundColor: 'transparent',
          },
        },
      },
    });
  }
}
CheckoutPaymentPage.options = {
  topBar: {
    visible: false,
  },
};
