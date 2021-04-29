import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {BackButton} from '../components/back-button.js';
import {styles} from './styles/sitter-clock-in-clock-out-submit-time-page-style.js';

export function SitterClockInClockOutSubmitTimePage({componentId}) {
  return (
    <ScrollView
      style={{backgroundColor: '#fcf0f2'}}
      contentInset={{bottom: 20, top: 20}}>
      <View style={styles.SitterClockInClockOutSubmitTimePageContainer}>
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
          <Text style={styles.Accepted}> Accepted date </Text>
          <Text style={styles.BookingDate}>Wed, 12 Oct 2021</Text>
        </View>
        <View style={styles.LineSeperatorBelowBookingInfo} />
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
              <Text style={styles.Address}>
                4172 W. Tierra Buena Dr.{'\n'}
                Phoenix, AZ 85394
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.LineSeperator} />
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
        <View style={styles.LineSeperator} />
      </View>
      <View style={{flexDirection: 'row', alignItems: "center", justifyContent: "space-between", paddingHorizontal: 18, marginTop: 8}}>

          <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", justifyContent: "flex-start", backgroundColor: "blue", paddingVertical: 14  }}>
            <Image
              source={require('../img/CalenderImage.png')}
              style={{width: 24, height: 24}}
            />

            <View style={{marginLeft: 3}}>
              <Text style={[styles.BookedLength, {marginLeft: 8}]}>
                Clock In
              </Text>
              <View style={{marginTop: 4}}>
                <Text style={styles.days}>NA</Text>
              </View>
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", justifyContent: "flex-start", backgroundColor: "red", paddingVertical: 14  }}>
            <Image
              source={require('../img/Clock.png')}
              style={{width: 24, height: 24}}
            />

            <View style={{marginLeft: 3}}>
              <Text style={[styles.BookedLength, { marginLeft: 8}]}>
                Clock Out
              </Text>
              <View style={{marginTop: 4}}>
                <Text style={styles.days}>NA</Text>
              </View>
            </View>
          </View>

        </View>
    </ScrollView>
  );
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
