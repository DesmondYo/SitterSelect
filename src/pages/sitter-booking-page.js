import React, {useEffect, useState} from 'react';
import {View, Text, SectionList, SafeAreaView, FlatList} from 'react-native';
import {styles} from './styles/sitter-booking-page-style.js';
import MaterialTabs from 'react-native-material-tabs';
import {Navigation} from 'react-native-navigation';
import {ClientSitterBookings} from '../components/client-sitter-bookings';
import Firestore from '@react-native-firebase/firestore';
import Auth from '@react-native-firebase/auth';

export function SitterBookingPage({componentId}) {
  const [selectedTab, setSelectedTab] = useState(null);
  const [bookingsDocs, setBookingsDocs] = useState([]);
  useEffect(onFetchBookings, []);
  return (
    <SafeAreaView style={styles.PageContainer}>
      <SectionList
        sections={[{title: 'New Requests', data: bookingsDocs}]}
        renderSectionHeader={section => (
          <>
            <Text style={styles.NewRequests}> {section.bookingsDocs} </Text>
          </>
        )}
        renderItem={({item}) => {
          const booking = item.data();

          // source, label, date, type, time
          return (
            <>
              <View style={styles.LineSeperator} />
              <Text style={styles.NewRequests}> New Requests </Text>
              <ClientSitterBookings
                showLabel={true}
                label={booking.first_name}
                serviceType={booking.service_type}
                date={booking.date}
                time={[booking.start_date, ' - ', booking.end_date]}
                status={booking.status}
                approvedPress={approvedPress}
              />
            </>
          );
        }}
        ListHeaderComponent={
          <>
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
    </SafeAreaView>
  );
  /**
   * Fetches all the client bookings
   */
  function onFetchBookings() {
    Firestore()
      .collection('bookings')
      .where('status', '==', 'pending')
      .onSnapshot(snapshot => {
        setBookingsDocs(snapshot.docs);
      });
  }
  function approvedPress() {
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
