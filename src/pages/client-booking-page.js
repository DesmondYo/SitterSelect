import React, { useState } from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles/client-booking-page-style.js';
import {Navigation} from 'react-native-navigation';
import {BackButton} from '../components/back-button';
import {SitterStatusInformation} from '../components/sitter-status-information';
import MaterialTabs from 'react-native-material-tabs';

export function ClientBookingPage({componentId}) {
  const [selectedTab, setSelectedTab] = useState(null);

  return (
    <View style={styles.PageContainer}>
      <BackButton
        onPress={onPress}
        backButtonImage={require('../img/backarrow.png')}
        imageWidth={50}
        imageHeight={50}
      />
      <Text style={styles.Text}> My Bookings </Text>

      <MaterialTabs
        items={['Current', 'Past']}
        selectedIndex={selectedTab}
        onChange={setSelectedTab}
        barColor="#1fbcd2"
        indicatorColor="#fffe94"
        activeTextColor="white"
      />
      <SitterStatusInformation
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
