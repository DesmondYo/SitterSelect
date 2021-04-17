import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles/client-booking-page-style.js';
import {Navigation} from 'react-native-navigation';
import {BackButton} from '../components/back-button';
import {SitterStatusInformation} from '../components/sitter-status-information';

export function ClientBookingPage({componentId}) {
  return (
    <View style={styles.PageContainer}>
      <BackButton
        onPress={onPress}
        backButtonImage={require('../img/backarrow.png')}
        imageWidth={50}
        imageHeight={50}
      />
      <Text style={styles.Text}> My Bookings </Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.Current}> Current </Text>
        <Text style={styles.Past}> Past </Text>
      </View>
      <View style={styles.LineSeperator} />
      <SitterStatusInformation
        style={styles.rectangle}
        source={require('../img/LadyInPic.png')}
        label= "Josie Emch"
        TextStyle={styles.SitterName}
      />
    </View>
  );

  function onPress() {
    Navigation.push(componentId, {
      component: {
        name: 'MapPage',
      },
    });
  }
}

ClientBookingPage.options = {
  topBar: {
    visible: false,
  },
};
