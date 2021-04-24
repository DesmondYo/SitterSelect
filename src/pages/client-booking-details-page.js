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
    <ScrollView>
      <View style={styles.ClientBookingDetailsContainer}>
        <BackButton
          onPress={onPress}
          backButtonImage={require('../img/backarrow.png')}
          imageWidth={30}
          imageHeight={30}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.Text}> Booking Details </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 29,
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={styles.Status}> Status </Text>
          <View style={styles.approved}>
            <Text style={styles.approvedText}>Approved</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 29,
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={styles.Invoice}> Invoice </Text>
          <Text style={styles.InvoiceNumber}>#GF20190928125</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 29,
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={styles.Booking}> Booking date </Text>
          <Text style={styles.BookingDate}>Wed, 12 Oct 2021</Text>
        </View>
        <View style={styles.LineSeperator} />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={styles.BookingInfoText}> Booking Info </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            width: '100%',
            marginLeft: 50,
          }}>
          <Image
            source={require('../img/LadyInPic.png')}
            style={{width: 51, height: 51}}
          />

          <View style={{marginLeft: 16}}>
            <Text style={[styles.NameText, {marginTop: 5}]}>Josie Emch</Text>

            <View style={{flexDirection: 'row', marginTop: 1}}>
              <Image
                style={styles.ServiceImage}
                source={require('../img/DropInForSittersNoPinkBackground.png')}
              />
              <Text style={styles.DropInForPets}>Drop-In For Pets</Text>
            </View>
          </View>
        </View>
        <View style={styles.LineSeperatorBelowBookingInfo} />
        <View style={{flexDirection: 'row', width: '100%'}}>
          <Image
            source={require('../img/CalenderImage.png')}
            style={{width: 24, height: 24, marginTop: 34, marginLeft: 20.6}}
          />
          <View style={{marginLeft: 12.6}}>
            <Text style={[styles.BookedLength, {marginTop: 24, marginLeft: 8}]}>
              Booked Length
            </Text>
            <View style={{marginTop: 4}}>
              <Text style={styles.days}>2 days</Text>
            </View>
          </View>
          <Image
            source={require('../img/Service.png')}
            style={{width: 24, height: 24, marginTop: 34, marginLeft: 50}}
          />
          <View style={{marginLeft: 12.6}}>
            <Text style={[styles.BookedLength, {marginTop: 24, marginLeft: 8}]}>
              Service
            </Text>
            <View style={{marginTop: 4}}>
              <Text style={styles.days}>Drop-In for Pets</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <Image
            source={require('../img/Clock.png')}
            style={{width: 24, height: 24, marginTop: 34, marginLeft: 20.6}}
          />
          <View style={{marginLeft: 12.6}}>
            <Text style={[styles.BookedLength, {marginTop: 24, marginLeft: 8}]}>
              Shift Length
            </Text>
            <View style={{marginTop: 4}}>
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
