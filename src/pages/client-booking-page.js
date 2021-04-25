import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './styles/client-booking-page-style.js';
import {Navigation} from 'react-native-navigation';
import {BackButton} from '../components/back-button';
import {SitterStatusApproved} from '../components/sitter-status-information';
import {SitterStatusDeclined} from '../components/sitter-status-information';
import {SitterStatusPending} from '../components/sitter-status-information';
import MaterialTabs from 'react-native-material-tabs';

export function ClientBookingPage({componentId}) {
  const [selectedTab, setSelectedTab] = useState(null);

  return (
    <ScrollView style={styles.PageContainer}>
      <BackButton
        onPress={onPress}
        backButtonImage={require('../img/backarrow.png')}
        imageWidth={30}
        imageHeight={30}
      />
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
        ApprovedPress={ApprovedPress}
        imageOfLogo={require('../img/DropInForSittersNoPinkBackground.png')}
      />
      <SitterStatusDeclined
        source={require('../img/LadyInPic.png')}
        label="Josie Emch"
        text="Drop-In For Pets"
        date="12 Oct 2021"
        purpledot={require('../img/PurpleDot.png')}
        time="07:00 - 10:00"
        declined="Declined"
        DeclinedPress={DeclinedPress}
        image={require('../img/DropInForSittersNoPinkBackground.png')}
      />
      <SitterStatusPending
        source={require('../img/LadyInPic.png')}
        label="Josie Emch"
        text="Drop-In For Pets"
        date="12 Oct 2021"
        purpledot={require('../img/PurpleDot.png')}
        time="07:00 - 10:00"
        pending="Pending"
        PendingPress={PendingPress}
      />
    </ScrollView>
  );

  function onPress() {
    Navigation.push(componentId, {
      component: {
        name: 'MapPage',
      },
    });
  }
  function ApprovedPress() {
    Navigation.push(componentId, {
      component: {
        name: 'ClientBookingDetails',
      },
    });
  }
  function DeclinedPress() {
    Navigation.push(componentId, {
      component: {
        name: 'ClientBookingDetails',
      },
    });
  }
  function PendingPress() {
    Navigation.push(componentId, {
      component: {
        name: 'ClientBookingDetails',
      },
    });
  }
}

ClientBookingPage.options = {
  topBar: {
    visible: false,
  },
};
