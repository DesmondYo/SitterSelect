import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {styles} from './styles/sitter-booking-page-style.js';
import MaterialTabs from 'react-native-material-tabs';
import {Navigation} from 'react-native-navigation';
import {ClientSitterBookings} from '../components/client-sitter-bookings';

export function SitterBookingPage({componentId}) {
  const [selectedTab, setSelectedTab] = useState(null);
  return (
    <ScrollView style={styles.PageContainer}>
      <Text style={styles.Text}> My Bookings </Text>
      <MaterialTabs
        items={['Current', 'Past']}
        selectedIndex={selectedTab}
        onChange={setSelectedTab}
        barColor="#f9ede1"
        indicatorColor="#92465a"
        activeTextColor="#92465a"
        inactiveTextColor="rgba(30, 47, 68, 0.48)"
      />
      <ClientSitterBookings
        label="Josie Emch"
        text="Drop-In For Pets"
        date="12 Oct 2021"
        purpledot={require('../img/PurpleDot.png')}
        time="07:00 - 10:00"
        imageOfLogo={require('../img/DropInForSittersNoPinkBackground.png')}
        status="approved"
        ApprovedPress={SitterBookingDetails}
      />
      <ClientSitterBookings
        label="Josie Emch"
        text="Drop-In For Pets"
        date="12 Oct 2021"
        purpledot={require('../img/PurpleDot.png')}
        time="07:00 - 10:00"
        imageOfLogo={require('../img/DropInForSittersNoPinkBackground.png')}
        status="approved"
        ApprovedPress={SitterBookingDetails}
      />
      <View style={styles.LineSeperator} />
      <Text style={styles.NewRequests}> New Requests </Text>
      <ClientSitterBookings
        label="Josie Emch"
        text="Drop-In For Pets"
        date="12 Oct 2021"
        purpledot={require('../img/PurpleDot.png')}
        time="07:00 - 10:00"
        ApprovedPress={SitterBookingDetails}
        imageOfLogo={require('../img/DropInForSittersNoPinkBackground.png')}
        status="pending"
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

  function onPress() {
    Navigation.push(componentId, {
      component: {
        name: 'LoginPage',
      },
    });
  }
}
SitterBookingPage.options = {
  topBar: {
    visible: false,
  },
};
