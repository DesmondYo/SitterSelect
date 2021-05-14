import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {styles} from './styles/sitter-booking-page-style.js';
import MaterialTabs from 'react-native-material-tabs';
import {Navigation} from 'react-native-navigation';
import {ClientBookingStatus} from '../components/client-booking-status';
import {BackButton} from '../components/back-button.js';

export function SitterBookingPage({componentId}) {
  const [selectedTab, setSelectedTab] = useState(null);
  return (
    <ScrollView style={styles.PageContainer}>
      <Text style={styles.Text}> My Bookings </Text>
      <BackButton
        onPress={onPress}
        backButtonImage={require('../img/backarrow.png')}
        imageWidth={30}
        imageHeight={30}
        top={50}
      />
      <MaterialTabs
        items={['Current', 'Past']}
        selectedIndex={selectedTab}
        onChange={setSelectedTab}
        barColor="#FCF0F2"
        indicatorColor="#92465a"
        activeTextColor="#92465a"
        inactiveTextColor="rgba(30, 47, 68, 0.48)"
      />
      <ClientBookingStatus
        source={require('../img/LadyInPic.png')}
        label="Josie Emch"
        text="Drop-In For Pets"
        date="12 Oct 2021"
        purpledot={require('../img/PurpleDot.png')}
        time="07:00 - 10:00"
        imageOfLogo={require('../img/DropInForSittersNoPinkBackground.png')}
        value={'Approved'}
        status="approved"
        ApprovedPress={SitterBookingDetails}
      />
      <View style={styles.LineSeperator} />
      <Text style={styles.NewRequests}> New Requests </Text>
      <ClientBookingStatus
        source={require('../img/LadyInPic.png')}
        label="Josie Emch"
        text="Drop-In For Pets"
        date="12 Oct 2021"
        purpledot={require('../img/PurpleDot.png')}
        time="07:00 - 10:00"
        ApprovedPress={SitterBookingDetails}
      />
      <ClientBookingStatus
        source={require('../img/LadyInPic.png')}
        label="Josie Emch"
        text="Drop-In For Pets"
        date="12 Oct 2021"
        purpledot={require('../img/PurpleDot.png')}
        time="07:00 - 10:00"
        ApprovedPress={SitterBookingDetails}
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
