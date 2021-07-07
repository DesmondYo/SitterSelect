import React, {useRef} from 'react';
import {View, Text, ScrollView, Linking, Platform} from 'react-native';
import {styles} from './styles/client-booking-details-style.js';
import {BackButton} from '../components/back-button';
import {Navigation} from 'react-native-navigation';
import {PrimaryButton} from '../components/primary-button';
import ActionSheet from '@alessiocancian/react-native-actionsheet';
import {BookingDetailRow} from '../components/booking-detail-row';
import {SitterProfile} from '../components/sitter-profile';
import {BookingProperty} from '../components/booking-property';
import {BookingDetailStatus} from '../components/booking-detail-status.js';
import firestore from '@react-native-firebase/firestore';
const phoneNumber = '(602) 803-4851';

export function ClientBookingDetails({componentId}) {
  const actionSheetRef = useRef(null);
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
        <BookingDetailStatus
          label={'Status'}
          value={'Approved'}
          status="approved"
        />
        <BookingDetailRow label={'Invoice'} value={'#GF20190928125'} />
        <BookingDetailRow label={'Booking Date'} value={'Wed, 12 Oct 2021'} />
        <View style={styles.LineSeperator} />
        <View style={styles.BookingInfoView}>
          <SitterProfile
            image={require('../img/LadyInPic.png')}
            name={'Josie Emch'}
            serviceImage={require('../img/DropInForSittersNoPinkBackground.png')}
            service={'Drop-In For Pets'}
            SitterDescription={
              'Education major and Sitters Select founder who is passionate about working with kids. She also loves all animals & spending time with toddlers! In her spare time, she offers tutoring services. If you book after my service, we will be friends for life.'
            }
          />
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
            bookedLength={'8 am - 5 pm'}
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
          style={styles.MakeFinalPaymentButton}
          TextStyle={styles.MakeFinalPaymentButtonText}
          onPress={CheckoutPayment}
        />
        <PrimaryButton
          label="Contact Admin"
          style={styles.ContactJosieButton}
          TextStyle={styles.ContactJosieButtonText}
          onPress={onPressCallJosie}
        />
      </View>
    </>
  );

  function onPress() {
    Navigation.popToRoot(componentId, {
      component: {
        name: 'ClientBookingPage',
      },
    });
  }

  function CheckoutPayment() {
    Navigation.push(componentId, {
      component: {
        name: 'CheckoutPaymentPage',
      },
    });
  }

  function onPressCallJosie() {
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
