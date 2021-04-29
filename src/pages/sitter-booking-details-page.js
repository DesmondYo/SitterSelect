import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {styles} from './styles/sitter-booking-details-page-style.js';
import {BackButton} from '../components/back-button';
import {Navigation} from 'react-native-navigation';
import {PrimaryButton} from '../components/primary-button.js';

export function SitterBookingDetailsPage({componentId}) {
  return (
    <>
    <ScrollView
      style={{backgroundColor: '#fcf0f2'}}
      contentInset={{bottom: 20, top: 20}}
      contentContainerStyle={styles.ClientBookingDetailsContainer}
    >
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
          marginTop: 32,
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={styles.Booking}> Booking date </Text>
        <Text style={styles.BookingDate}>Wed, 12 Oct 2021</Text>
      </View>
      <View style={styles.LineSeperator} />
      <Text style={styles.BookingInfo}> Booking Info </Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 22,
          width: '100%',
          marginLeft: 50,
        }}>
        <Image
          source={require('../img/LadyInPic.png')}
          style={{width: 51, height: 51}}
        />
        <View style={{marginLeft: 16}}>
          <Text style={[styles.NameText, {marginTop: 5}]}>Josie Emch</Text>
          <View style={{marginTop: 1}}>
            <Text style={styles.DropInForPets}>
              4172 W. Tierra Buena Dr.{'\n'}
              Phoenix, AZ 85394
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.LineSeperatorBelowBookingInfo} />
      <View style={{flexDirection: 'row', width: '100%'}}>
        <Image
          source={require('../img/CalenderImage.png')}
          style={{width: 24, height: 24, marginTop: 34, marginLeft: 20.6}}
        />
        <View style={{marginLeft: 3}}>
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
        <View style={{marginLeft: 3}}>
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
        <View style={{marginLeft: 3}}>
          <Text style={[styles.BookedLength, {marginTop: 24, marginLeft: 8}]}>
            Shift Length
          </Text>
          <View style={{marginTop: 4}}>
            <Text style={styles.days}>9 hours</Text>
          </View>
        </View>
      </View>

      <View style={{ position: "absolute", bottom: 20, alignSelf: "center" }}>
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
    </ScrollView>
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
    Navigation.push(componentId, {
      component: {
        name: 'SitterBookingPage',
      },
    });
  }
}
SitterBookingDetailsPage.options = {
  topBar: {
    visible: false,
  },
};
