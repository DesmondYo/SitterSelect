import React, {useEffect, useRef, useState} from 'react';
import {View, Text, ScrollView, Linking, Platform} from 'react-native';
import {styles} from './styles/client-booking-details-style.js';
import {BackButton} from '../components/back-button';
import {Navigation} from 'react-native-navigation';
import {PrimaryButton} from '../components/primary-button';
import ActionSheet from '@alessiocancian/react-native-actionsheet';
import {BookingDetailRow} from '../components/booking-detail-row';
import {SitterProfile} from '../components/sitter-profile';
import {BookingProperty} from '../components/booking-property';
// import {ContactAdminButton} from '../components/contact-admin-button';
import {BookingDetailStatus} from '../components/booking-detail-status.js';
import Firestore from '@react-native-firebase/firestore';
import dayjs from 'dayjs';
export function ClientBookingDetails({componentId, id}) {
  const actionSheetRef = useRef(null);
  const [bookingData, setBookingData] = useState(null);
  const formattedDate = dayjs(bookingData?.booking_date).format(
    'ddd, D MMM YYYY',
  );
  const phoneNumber = bookingData?.sitter_phone_number;
  const isPending = bookingData?.status === 'pending';
  const isAwaitingPayment = bookingData?.status === 'awaiting payment';
  useEffect(FetchClientBooking, []);
  
  return (
    <>
      <ScrollView style={styles.ClientBookingDetailsContainer}>
        <BackButton
          onPress={onPress}
          backButtonImage={require('../img/backarrow.png')}
          imageWidth={30}
          imageHeight={30}
        />
        <View style={styles.ViewFlex}>
          <Text style={styles.Text}> Booking Details </Text>
        </View>
        <BookingDetailStatus label={'Status'} status={bookingData?.status} />
        <BookingDetailRow
          label={'Invoice'}
          value={bookingData?.invoice_number}
        />
        <BookingDetailRow label={'Booking Date'} value={formattedDate} />
        <View style={styles.LineSeperator} />
        {!isPending ? (
          <>
            <View style={styles.BookingInfoView}>
              <SitterProfile
                source={{uri: bookingData?.sitter_image}}
                name={bookingData?.sitter_first_name}
                serviceType={bookingData?.service_type}
                SitterDescription={bookingData?.sitter_description}
              />
            </View>
            <View style={styles.LineSeperatorBelowBookingInfo} />
          </>
        ) : null}

        <View style={styles.ViewStyleInformation}>
          <BookingProperty
            image={require('../img/Clock.png')}
            name={'Shift Length'}
            bookedLength={`${bookingData?.booked_length} hours`}
          />
          <BookingProperty
            image={require('../img/Service.png')}
            name={'Service'}
            bookedLength={bookingData?.service_type}
          />
        </View>
        <View style={styles.ViewStyleInformation}>
          <BookingProperty
            image={require('../img/PhoneIcon.png')}
            name={'Call time'}
            bookedLength={[
              bookingData?.start_date,
              ' - ',
              bookingData?.end_date,
            ]}
          />
        </View>

        <ActionSheet
          ref={actionSheetRef}
          options={[phoneNumber, 'cancel']}
          cancelButtonIndex={1}
          onPress={onSelectOption}
        />
      </ScrollView>

      <View style={styles.PrimaryButtonStyle}>
        <PrimaryButton
          label="Make final payment"
          onPress={CheckoutPayment}
          disabled={!isAwaitingPayment}
          fill={true}
          containerStyle={{width: 343}}
        />
        <PrimaryButton
          label={`Contact ${bookingData?.sitter_first_name} `}
          onPress={onContactSitter}
          fill={false}
        />
      </View>
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
      },
    });
  }

  function CheckoutPayment() {
    Navigation.push(componentId, {
      component: {
        name: 'CheckoutPaymentPage',
        passProps: {
          id,
        },
      },
    });
  }

  function onContactSitter() {
    actionSheetRef.current.show();
  }

  function onSelectOption(index) {
    if (index === 0) {
      if (Platform.OS === 'android') {
        Linking.openURL('tel:${' + phoneNumber + '}');
      } else {
        Linking.openURL('telprompt:${' + phoneNumber + '}');
      }
    }
  }
}

ClientBookingDetails.options = {
  topBar: {
    visible: false,
  },
};
