import React, {useEffect, useState} from 'react';
import {View, Text, SectionList, SafeAreaView, FlatList} from 'react-native';
import {styles} from './styles/sitter-booking-page-style.js';
import MaterialTabs from 'react-native-material-tabs';
import {Navigation} from 'react-native-navigation';
import {ClientSitterBookings} from '../components/client-sitter-bookings';
import Firestore from '@react-native-firebase/firestore';
import Auth from '@react-native-firebase/auth';

export function SitterBookingPage({ componentId }) {
  const [selectedTab, setSelectedTab] = useState(null);
  const [newRequestsDocs, setNewRequestsDocs] = useState([]);
  const [sitterBookingDocs, setSitterBookingDocs] = useState([]);
  useEffect(onFetchBookings, []);
  return (
    <SafeAreaView style={styles.PageContainer}>
      <SectionList
        sections={[
          {title: 'New Requests', data: newRequestsDocs},
          {title: null, data: sitterBookingDocs},
        ]}
        renderSectionHeader={({ section }) => {
          if (section.title !== null) {
            return (
              <Text style={styles.NewRequests}>{section.title}</Text>
            );
          }
        }}
        renderSectionFooter={({ section }) => {
          if (section.title !== null) {
            return (
              <View style={styles.LineSeperator} />
            );
          }
        }}
        renderItem={({item}) => {
          const booking = item.data();
          // source, label, date, type, time
          return (
            <ClientSitterBookings
              label={booking.client_first_name}
              serviceType={booking.service_type}
              date={booking.date}
              time={[booking.start_date, ' - ', booking.end_date]}
              status={booking.status}
              approvedPress={() => navigateToBookingDetailsPage(item.id)}
            />
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
    const unsubscibeNewRequests = Firestore()
      .collection('bookings')
      .where('status', '==', 'pending')
      .onSnapshot(snapshot => setNewRequestsDocs(snapshot.docs));
    const unsubscibeSitterBookings = Firestore()
      .collection('bookings')
      .where('sitter_id', '==', Auth().currentUser.uid)
      .onSnapshot(snapshot => setSitterBookingDocs(snapshot.docs));

    return () => {
      unsubscibeNewRequests();
      unsubscibeSitterBookings();
    };
  }

  /**
   * Navigates to sitter booking details page
   */
  function navigateToBookingDetailsPage(id) {
    Navigation.push(componentId, {
      component: {
        name: 'SitterBookingDetailsPage',
        passProps: {
          id
        }
      },
    });
  }
}
SitterBookingPage.options = {
  topBar: {
    visible: false,
  },
};
