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
const phoneNumber = '(602) 803-4851';

export function SitterClockInClockOutSubmitTimePage({componentId, id}) {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [buttonState, setButtonState] = useState("Clock In");
  const actionSheetRef = useRef(null);
  const awesomeModalRef = useRef(null);
  const isActionSheetOpen = useRef(false);
  const formattedStartTime = startTime ? dayjs(startTime).format() : "NA";
  const formattedEndTime = endTime ? dayjs(endTime).format() : "NA";

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
          <Text style={styles.BookingDate}>Wed, 12 Oct 2021</Text>
        </View>
        <View style={styles.LineSeperatorBelowBookingInfo} />
        <View style={styles.BookingInfoView}>
          <Text style={styles.BookingInfoText}> Booking Info </Text>
        </View>
        <View style={styles.BookingInfoStats}>
          <View>
            <Text style={[styles.NameText, styles.TextMargin]}>Josie Emch</Text>
            <Text style={styles.Address}>
              4172 W. Tierra Buena Dr.{'\n'}
              Phoenix, AZ 85394
            </Text>
          </View>
        </View>
        <View style={styles.LineSeperator} />
        <View style={styles.BookingInfoView}>
          <Text style={styles.BookingInfoText}>
            {' '}
            15 Oct 2021 - 16 Oct 2021{' '}
          </Text>
        </View>
        <View style={styles.ViewStyleInformation}>
          <BookingProperty
            image={require('../img/Clock.png')}
            name={'Shift Length'}
            bookedLength={'9 hours'}
          />
          <BookingProperty
            image={require('../img/Service.png')}
            name={'Service'}
            bookedLength={'Drop-In for Pets'}
          />
        </View>

        <View style={styles.ViewStyleInformation}>
          <BookingProperty
            image={require('../img/PhoneIcon.png')}
            name={'Call time'}
            bookedLength={'8 am - 5 pm'}
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
          title={'Please Contact Josie Emch'}
          options={[phoneNumber, 'cancel']}
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
          style={styles.MakeFinalPaymentButton}
          TextStyle={styles.MakeFinalPaymentButtonText}
          onPress={onSubmitTime}
        />
        <PrimaryButton
          label="Contact Josie"
          style={styles.ContactJosieButton}
          TextStyle={styles.ContactJosieButtonText}
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
        status: 'awaiting_payment',
      });

      Navigation.push(componentId, { component: {
        name: "SitterSubmitTimeSuccessPage",
      }});
    }
  }

  function onSetClockInTime(val) {
    if (!startTime) {
      setStartTime(val);
      setButtonState("Clock Out")
    } else {
      setEndTime(val);
      setButtonState("Submit Time")
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
        Linking.openURL('tel:${' + phoneNumber + '}');
      } else {
        Linking.openURL('telprompt:${' + phoneNumber + '}');
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
