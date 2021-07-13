import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {styles} from './styles/sitter-booking-details-page-style.js';
import {BackButton} from '../components/back-button';
import {Navigation} from 'react-native-navigation';
import {PrimaryButton} from '../components/primary-button.js';
import {BookingProperty} from '../components/booking-property';
import {StatusBadge} from '../components/status-badge';
import Firestore from '@react-native-firebase/firestore';
import Auth from '@react-native-firebase/auth';
import {useCurrentUser} from '../utils/use-current-user.js';
import dayjs from 'dayjs';

export function SitterBookingDetailsPage({componentId, id}) {
  const user = useCurrentUser();
  const [bookingData, setBookingData] = useState(null);
  const formattedDate = dayjs(bookingData?.booking_date).format(
    'ddd, D MMM YYYY',
  );
  console.log(bookingData);
  useEffect(onLoadData, []);

  // Add rest of data from {bookingData}

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
          <StatusBadge status={bookingData?.status} />
        </View>
        <View style={styles.BookingDateStyle}>
          <Text style={styles.Booking}> Booking date </Text>
          <Text style={styles.BookingDate}>{formattedDate}</Text>
        </View>
        <View style={styles.LineSeperator} />
        <View style={styles.BookingInfoView}>
          <View>
            <Text style={styles.NameText}>
              {bookingData?.client_first_name}
            </Text>
            <Text style={styles.DropInForPets}>
              {'\n'}
              {bookingData?.address}
            </Text>
          </View>
        </View>
        <View style={styles.LineSeperatorBelowBookingInfo} />
        <View style={styles.ViewStyleInformation}>
          <BookingProperty
            image={require('../img/Clock.png')}
            name={'Shift Length'}
            bookedLength={'9 hours'}
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
      </ScrollView>

      <View style={styles.PrimaryButtonStyle}>
        <PrimaryButton
          label="Accept"
          style={styles.MakeFinalPaymentButton}
          TextStyle={styles.MakeFinalPaymentButtonText}
          onPress={AcceptPress}
        />
        <PrimaryButton
          label="Back to my bookings"
          style={styles.ContactJosieButton}
          TextStyle={styles.ContactJosieButtonText}
          onPress={onPress}
        />
      </View>
    </>
  );

  function onLoadData() {
    const unsubscribe = Firestore()
      .collection('bookings')
      .doc(id)
      .onSnapshot(document => setBookingData(document.data()));
    return () => unsubscribe();
  }

  async function AcceptPress() {
    await Firestore().collection('bookings').doc(id).update({
      status: 'approved',
      sitter_id: Auth().currentUser.uid,
      sitter_first_name: user.name,
    });

    Navigation.pop(componentId);
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
