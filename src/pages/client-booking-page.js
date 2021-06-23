import React, {useState} from 'react';
import {Text, ScrollView} from 'react-native';
import {styles} from './styles/client-booking-page-style.js';
import {Navigation} from 'react-native-navigation';
import {BackButton} from '../components/back-button';
import MaterialTabs from 'react-native-material-tabs';
import {ActiveBookingItem} from '../components/active-booking-item';
import {PendingStatus} from '../components/pending-status';

export function ClientBookingPage({componentId}) {
  const [selectedTab, setSelectedTab] = useState(null);

  return (
    <ScrollView style={styles.PageContainer}>
      <BackButton
        onPress={onPress}
        backButtonImage={require('../img/backarrow.png')}
        imageWidth={30}
        imageHeight={30}
        top={45}
      />
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
      <ActiveBookingItem
        source={require('../img/LadyInPic.png')}
        label="Josie Emch"
        text="Drop-In For Pets"
        date="12 Oct 2021"
        purpledot={require('../img/PurpleDot.png')}
        time="8am - 5pm"
        imageOfLogo={require('../img/DropInForSittersNoPinkBackground.png')}
        value={'Approved'}
        status="approved"
        ApprovedPress={ApprovedPress}
      />
      <PendingStatus
        text="Drop-In For Pets"
        date="14 Oct 2021"
        purpledot={require('../img/PurpleDot.png')}
        time="8am - 2pm"
        imageOfLogo={require('../img/DropInForSittersNoPinkBackground.png')}
        value={'Pending'}
        status="pending"
      />
    </ScrollView>
  );

  function onPress() {
    Navigation.push(componentId, {
      component: {
        name: 'SitterDetailsPage',
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
}

ClientBookingPage.options = {
  topBar: {
    visible: false,
  },
};
