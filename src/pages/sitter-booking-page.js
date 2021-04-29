import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {styles} from './styles/sitter-booking-page-style.js';
import MaterialTabs from 'react-native-material-tabs';
import {SitterInformation} from '../components/sitter-status-information';
import {Navigation} from 'react-native-navigation';
import {SitterStatusApproved} from '../components/sitter-status-information';

export function SitterBookingPage({componentId}) {
  const [selectedTab, setSelectedTab] = useState(null);
  return (
    <ScrollView style={styles.PageContainer}>
      <Text style={styles.Text}> My Bookings </Text>
      <MaterialTabs
        items={['Current', 'Past']}
        selectedIndex={selectedTab}
        onChange={setSelectedTab}
        barColor="#FCF0F2"
        indicatorColor="#92465a"
        activeTextColor="#92465a"
        inactiveTextColor="rgba(30, 47, 68, 0.48)"
      />
      <SitterStatusApproved
        source={require('../img/LadyInPic.png')}
        label="Josie Emch"
        text="Drop-In For Pets"
        date="12 Oct 2021"
        purpledot={require('../img/PurpleDot.png')}
        time="07:00 - 10:00"
        approved="Approved"
        imageOfLogo={require('../img/DropInForSittersNoPinkBackground.png')}
      />
      <View style={styles.LineSeperator} />
      <Text style={styles.NewRequests}> New Requests </Text>
      <SitterInformation
        source={require('../img/LadyInPic.png')}
        label="Josie Emch"
        text="Drop-In For Pets"
        date="12 Oct 2021"
        purpledot={require('../img/PurpleDot.png')}
        time="07:00 - 10:00"
        SitterBookingDetails={SitterBookingDetails}
        imageOfLogo={require('../img/DropInForSittersNoPinkBackground.png')}
      />
      <SitterInformation
        source={require('../img/LadyInPic.png')}
        label="Josie Emch"
        text="Drop-In For Pets"
        date="12 Oct 2021"
        purpledot={require('../img/PurpleDot.png')}
        time="07:00 - 10:00"
        SitterBookingDetails={SitterBookingDetails}
        imageOfLogo={require('../img/DropInForSittersNoPinkBackground.png')}
      />
    </ScrollView>
  );
  function SitterBookingDetails() {
    Navigation.push(componentId, {
      component: {
        name: 'SitterBookingDetailsPage',
      },
    });
  }
}
SitterBookingPage.options = {
  topBar: {
    visible: false,
  },
};
