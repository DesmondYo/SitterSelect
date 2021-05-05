import React, {useRef, useState} from 'react';
import {View, ScrollView, Text, Image, Platform, Linking} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {BackButton} from '../components/back-button.js';
import {PrimaryButton} from '../components/primary-button.js';
import {styles} from './styles/sitter-clock-in-clock-out-submit-time-page-style.js';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import dayjs from 'dayjs';
import ActionSheet from '@alessiocancian/react-native-actionsheet';
const phoneNumber = 'Call (602) 803-4851';

export function SitterClockInClockOutSubmitTimePage({componentId}) {
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [startTime, setStartTime] = useState(dayjs().toDate());
  const actionSheetRef = useRef(null);
  const awesomeModalRef = useRef(null);
  const isActionSheetOpen = useRef(false);
  return (
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
        <Image
          source={require('../img/LadyInPic.png')}
          style={styles.ImageStyle}
        />
        <View style={styles.ViewStyle}>
          <Text style={[styles.NameText, styles.TextMargin]}>Josie Emch</Text>
          <Text style={styles.Address}>
            4172 W. Tierra Buena Dr.{'\n'}
            Phoenix, AZ 85394
          </Text>
        </View>
      </View>
      <View style={styles.LineSeperator} />
      <View style={styles.ViewStyleInformation}>
        <Image
          source={require('../img/CalenderImage.png')}
          style={styles.ImageCalenderStyle}
        />
        <View style={styles.SitterStyleTitle}>
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
        <View style={styles.SitterStyleTitle}>
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
        <View style={styles.SitterStyleTitle}>
          <Text style={[styles.BookedLength, styles.BookedLengthStyle]}>
            Shift Length
          </Text>
          <View style={styles.SitterInformationStyle}>
            <Text style={styles.days}>9 hours</Text>
          </View>
        </View>
      </View>
      <View style={styles.LineSeperator} />
      <View style={styles.ClockedInStyle}>
        <View style={styles.ClockedInStyleNaText}>
          <Image
            source={require('../img/CalenderImage.png')}
            style={styles.ImageStyleCalender}
          />

          <View style={styles.SitterTitleStyle}>
            <Text style={[styles.BookedLength, styles.ClockInStyle]}>
              Clock In
            </Text>
            <View style={styles.SitterInformationStyle}>
              <Text style={styles.days}>NA</Text>
            </View>
          </View>
        </View>

        <View style={styles.ClockedInStyleNaText}>
          <Image
            source={require('../img/Clock.png')}
            style={styles.ImageStyleCalender}
          />

          <View style={styles.SitterTitleStyle}>
            <Text style={[styles.BookedLength, styles.ClockInStyle]}>
              Clock Out
            </Text>
            <View style={styles.SitterInformationStyle}>
              <Text style={styles.days}>NA</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.PrimaryButtonStyle}>
        <PrimaryButton
          label="Clock In"
          style={styles.MakeFinalPaymentButton}
          TextStyle={styles.MakeFinalPaymentButtonText}
          onPress={() => setShowStartTimePicker(true)}
        />
        <PrimaryButton
          label="Contact Josie"
          style={styles.ContactJosieButton}
          TextStyle={styles.ContactJosieButtonText}
          onPress={onPressContactJosie}
        />
        <ActionSheet
          ref={actionSheetRef}
          title={'Please Contact '}
          options={[phoneNumber, 'cancel']}
          cancelButtonIndex={1}
          onPress={onSelectOption}
        />
        <DateTimePickerModal
          isVisible={showStartTimePicker}
          mode="time"
          date={startTime}
          onConfirm={val => {
            setStartTime(val);
            setShowStartTimePicker(false);
          }}
          onCancel={() => setShowStartTimePicker(false)}
          headerTextIOS={'Clock In'}
        />
      </View>
    </ScrollView>
  );
  function onPressContactJosie() {
    isActionSheetOpen.current = true;
    actionSheetRef.current.show();
  }
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
    Navigation.push(componentId, {
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
