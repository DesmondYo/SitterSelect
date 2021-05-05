import React, {useRef} from 'react';
import {View, Text, Image, ScrollView, Linking, Platform} from 'react-native';
import {styles} from './styles/client-booking-details-style.js';
import {BackButton} from '../components/back-button';
import {Navigation} from 'react-native-navigation';
import {PrimaryButton} from '../components/primary-button';
import ActionSheet from '@alessiocancian/react-native-actionsheet';
const phoneNumber = 'Call (602) 803-4851';

export function ClientBookingDetails({componentId}) {
  const actionSheetRef = useRef(null);
  return (
    <ScrollView
      style={styles.BackgroundStyle}
      contentInset={{bottom: 20, top: 20}}>
      <View style={styles.ClientBookingDetailsContainer}>
        <BackButton
          onPress={onPress}
          backButtonImage={require('../img/backarrow.png')}
          imageWidth={30}
          imageHeight={30}
        />
        <View style={styles.ViewFlex}>
          <Text style={styles.Text}> Booking Details </Text>
        </View>
        <View style={styles.ViewStatus}>
          <Text style={styles.Status}> Status </Text>
          <View style={styles.approved}>
            <Text style={styles.approvedText}>Approved</Text>
          </View>
        </View>
        <View style={styles.ViewStatus}>
          <Text style={styles.Invoice}> Invoice </Text>
          <Text style={styles.InvoiceNumber}>#GF20190928125</Text>
        </View>
        <View style={styles.ViewStatus}>
          <Text style={styles.Booking}> Booking date </Text>
          <Text style={styles.BookingDate}>Wed, 12 Oct 2021</Text>
        </View>
        <View style={styles.LineSeperator} />
        <View style={styles.ViewStatus}>
          <Text style={styles.BookingInfoText}> Booking Info </Text>
        </View>
        <View style={styles.BookingInfoView}>
          <Image
            source={require('../img/LadyInPic.png')}
            style={styles.ImageStyle}
          />

          <View style={styles.ViewStyle}>
            <Text style={[styles.NameText, styles.TextMargin]}>Josie Emch</Text>

            <View style={styles.ViewStyleText}>
              <Image
                style={styles.ServiceImage}
                source={require('../img/DropInForSittersNoPinkBackground.png')}
              />
              <Text style={styles.DropInForPets}>Drop-In For Pets</Text>
            </View>
          </View>
        </View>
        <View style={styles.LineSeperatorBelowBookingInfo} />
        <View style={styles.ViewStyleInformation}>
          <Image
            source={require('../img/CalenderImage.png')}
            style={styles.ImageCalenderStyle}
          />
          <View style={styles.BookedLengthView}>
            <Text style={[styles.BookedLength, styles.TextLengthView]}>
              Booked Length
            </Text>
            <View style={styles.ViewTwoDays}>
              <Text style={styles.days}>2 days</Text>
            </View>
          </View>
          <Image
            source={require('../img/Service.png')}
            style={styles.ImageServiceStyle}
          />
          <View style={styles.BookedLengthView}>
            <Text style={[styles.BookedLength, styles.TextLengthView]}>
              Service
            </Text>
            <View style={styles.ViewTwoDays}>
              <Text style={styles.days}>Drop-In for Pets</Text>
            </View>
          </View>
        </View>
        <View style={styles.ViewStyleInformation}>
          <Image
            source={require('../img/Clock.png')}
            style={styles.ImageCalenderStyle}
          />
          <View style={styles.BookedLengthView}>
            <Text style={[styles.BookedLength, styles.TextLengthView]}>
              Shift Length
            </Text>
            <View style={styles.ViewTwoDays}>
              <Text style={styles.days}>9 hours</Text>
            </View>
          </View>
        </View>
        <PrimaryButton
          label="Make final payment"
          style={styles.MakeFinalPaymentButton}
          TextStyle={styles.MakeFinalPaymentButtonText}
          onPress={CheckoutPayment}
        />
        <PrimaryButton
          label="Contact Josie"
          style={styles.ContactJosieButton}
          TextStyle={styles.ContactJosieButtonText}
          onPress={onPressCallJosie}
        />
        <ActionSheet
          ref={actionSheetRef}
          options={[phoneNumber, 'cancel']}
          cancelButtonIndex={1}
          onPress={onSelectOption}
        />
      </View>
    </ScrollView>
  );
  function onPress() {
    Navigation.push(componentId, {
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
