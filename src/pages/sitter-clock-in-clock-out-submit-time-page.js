import React, {useEffect, useRef, useState} from 'react';
import {View, ScrollView, Text, Platform, Linking} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {BackButton} from '../components/back-button.js';
import {PrimaryButton} from '../components/primary-button.js';
import {styles} from './styles/sitter-clock-in-clock-out-submit-time-page-style.js';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import dayjs from 'dayjs';
import ActionSheet from '@alessiocancian/react-native-actionsheet';
import {BookingProperty} from '../components/booking-property.js';
import Firestore from '@react-native-firebase/firestore';
export function SitterClockInClockOutSubmitTimePage({componentId, id}) {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [buttonState, setButtonState] = useState('Clock In');
  const actionSheetRef = useRef(null);
  const awesomeModalRef = useRef(null);
  const isActionSheetOpen = useRef(false);
  const formattedStartTime = startTime
    ? dayjs(startTime).format('h:mm A')
    : 'NA';
  const formattedEndTime = endTime ? dayjs(endTime).format('h:mm A') : 'NA';
  const [bookingData, setBookingData] = useState(null);
  const formattedDate = dayjs(bookingData?.booking_date).format(
    'ddd, D MMM YYYY',
  );
  const clientFirstName = bookingData?.client_first_name;
  const clientPhoneNumber = bookingData?.client_phone_number;

  console.log(bookingData);
  useEffect(onFetchClientBooking, []);

  return (
    <>
      <ScrollView
        ref={awesomeModalRef}
        style={styles.BackgroundStyle}
        contentInset={{bottom: 20, top: 20}}
        contentContainerStyle={
          styles.SitterClockInClockOutSubmitTimePageContainer
        }>
        <BackButton
          onPress={onPress}
          backButtonImage={require('../img/backarrow.png')}
          imageWidth={30}
          imageHeight={30}
          top={17}
        />
        <View style={styles.ViewFlex}>
          <Text style={styles.Text}> Booking Details </Text>
        </View>
        <View style={styles.BookingDateStyle}>
          <Text style={styles.Accepted}> Accepted date </Text>
          <Text style={styles.BookingDate}>{formattedDate}</Text>
        </View>
        <View style={styles.LineSeperatorBelowBookingInfo} />
        <View style={styles.BookingInfoView}>
          <Text style={styles.BookingInfoText}> Booking Info </Text>
        </View>
        <View style={styles.BookingInfoStats}>
          <View>
            <Text style={[styles.NameText, styles.TextMargin]}>
              {bookingData?.client_first_name}
            </Text>
            <Text style={styles.Address}>{bookingData?.client_address}</Text>
          </View>
        </View>
        <View style={styles.LineSeperator} />
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
        <View style={styles.LineSeperator} />
        <View style={styles.BookingInfoView}>
          <Text style={styles.BookingInfoText}> Clocked Hours</Text>
        </View>
        <View style={styles.ViewStyleInformation}>
          <BookingProperty
            image={require('../img/CalenderImage.png')}
            name={'Clock In'}
            bookedLength={formattedStartTime}
          />

          <BookingProperty
            image={require('../img/Clock.png')}
            name={'Clock Out'}
            bookedLength={formattedEndTime}
          />
        </View>

        <ActionSheet
          ref={actionSheetRef}
          title={`Please Contact ${clientFirstName}`}
          options={[clientPhoneNumber, 'cancel']}
          cancelButtonIndex={1}
          onPress={onSelectOption}
        />
        <DateTimePickerModal
          isVisible={showTimePicker}
          mode="time"
          value={startTime}
          onConfirm={onSetClockInTime}
          onCancel={() => setShowTimePicker(false)}
          headerTextIOS={buttonState}
        />
      </ScrollView>
      <View style={styles.PrimaryButtonStyle}>
        <PrimaryButton
          label={buttonState}
          fill={true}
          containerStyle={{width: 343}}
          onPress={onSubmitTime}
        />
        <PrimaryButton
          label={`Contact ${clientFirstName}`}
          fill={false}
          containerStyle={{width: 343}}
          onPress={onPressContactJosie}
        />
      </View>
    </>
  );

  async function onSubmitTime() {
    if (!startTime || !endTime) {
      setShowTimePicker(true);
    } else {
      await Firestore().collection('bookings').doc(id).update({
        start_time: formattedStartTime,
        end_time: formattedEndTime,
        status: 'awaiting payment',
      });

      Navigation.push(componentId, {
        component: {
          name: 'SitterSubmitTimeSuccessPage',
        },
      });
    }
  }

  function onFetchClientBooking() {
    const unsubscribe = Firestore()
      .collection('bookings')
      .doc(id)
      .onSnapshot(document => setBookingData(document.data()));
    return () => unsubscribe();
  }

  function onSetClockInTime(val) {
    if (!startTime) {
      setStartTime(val);
      setButtonState('Clock Out');
    } else {
      setEndTime(val);
      setButtonState('Submit Time');
    }

    setShowTimePicker(false);
  }

  /**
   * This closes the modal with an animation,
   * then it shows the action sheet and
   * sets isActionSheetOpen to true, so
   * we don't dismiss the modal when actionsheet
   * is open
   */
  function onPressContactJosie() {
    isActionSheetOpen.current = true;
    actionSheetRef.current.show();
  }

  /**
   * This closes the ActionSheet Phonenumber
   * When you press cancel
   */
  function onSelectOption(index) {
    Navigation.dismissOverlay(componentId);
    isActionSheetOpen.current = false;

    if (index === 0) {
      if (Platform.OS === 'android') {
        Linking.openURL('tel:${' + clientPhoneNumber + '}');
      } else {
        Linking.openURL('telprompt:${' + clientPhoneNumber + '}');
      }
    }
  }
  function onPress() {
    Navigation.popToRoot(componentId, {
      component: {
        name: 'SitterBookingDetailsPage',
      },
    });
  }
}

SitterClockInClockOutSubmitTimePage.options = {
  topBar: {
    visible: false,
  },
};
