import React, {useEffect, useState} from 'react';
import {Text, FlatList} from 'react-native';
import {styles} from './styles/client-booking-page-style.js';
import {Navigation} from 'react-native-navigation';
import {BackButton} from '../components/back-button';
import MaterialTabs from 'react-native-material-tabs';
import {ClientSitterBookings} from '../components/client-sitter-bookings';
import {SitterBookingDetails} from './sitter-booking-details-page';
import Auth from '@react-native-firebase/auth';
import Firestore from '@react-native-firebase/firestore';
export function ClientBookingPage({componentId}) {
  const [selectedTab, setSelectedTab] = useState(null);
  const [bookingsDocs, setBookingsDocs] = useState([]);
  useEffect(onFetchBookings, []);

  return (
    <FlatList
      data={bookingsDocs}
      style={styles.PageContainer}
      renderItem={({ item }) => {
        const booking = item.data();
        console.log(booking); 

        // source, label, date, type, time
        return (
          <ClientSitterBookings
            source={require('../img/LadyInPic.png')}
            label={booking.first_name}
            serviceType="Drop-In For Pets"
            date="12 Oct 2021"
            time="07:00 - 10:00"
            status={booking.status}
            onPress={SitterBookingDetails}
          />
        );
      }}
      ListHeaderComponent={
        <>
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
        </>
      }
    />
  );

  /**
   * Fetches all the client bookings
   */
  function onFetchBookings() {
    Firestore()
      .collection('bookings')
      .where("client_id", "==", Auth().currentUser.uid)
      .onSnapshot(snapshot => {
        setBookingsDocs(snapshot.docs);
      });
  }

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
