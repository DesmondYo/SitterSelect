import React, {useEffect, useState} from 'react';
import {View, Text, SectionList, SafeAreaView} from 'react-native';
import {styles} from './styles/sitter-booking-page-style.js';
import {Navigation} from 'react-native-navigation';
import {ClientSitterBookings} from '../components/client-sitter-bookings';
import Firestore from '@react-native-firebase/firestore';
import Auth from '@react-native-firebase/auth';

export function SitterBookingPage({componentId}) {
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
        renderSectionHeader={({section}) => {
          if (section.title !== null) {
            return <Text style={styles.NewRequests}>{section.title}</Text>;
          }
        }}
        renderSectionFooter={({section}) => {
          if (section.title !== null) {
            return <View style={styles.LineSeperator} />;
          }
        }}
        contentInset={{ bottom: 40 }}
        data={sitterBookingDocs}
        renderItem={({item}) => {
          const booking = item.data();
          const data = item.data();
          const status = data.status;
          // source, label, date, type, time
          return (
            <ClientSitterBookings
              label={booking.client_first_name}
              serviceType={booking.service_type}
              date={booking.date}
              time={[booking.start_date, ' - ', booking.end_date]}
              status={booking.status}
              approvedPress={() =>
                navigateToBookingDetailsPage(item.id, status)
              }
            />
          );
        }}
        ListHeaderComponent={
          <>
            <Text style={styles.Text}> My Bookings </Text>
            <View style={styles.LineSeperator} />
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
      .where('status', "!=", "completed")
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
  function navigateToBookingDetailsPage(id, status) {
    if (status === 'approved') {
      Navigation.push(componentId, {
        component: {
          name: 'SitterClockInClockOutSubmitTimePage',
          passProps: {
            id,
          },
        },
      });
    } else if (status === 'pending') {
      Navigation.push(componentId, {
        component: {
          name: 'SitterBookingDetailsPage',
          passProps: {
            id,
          },
        },
      });
    }
  }
}
SitterBookingPage.options = {
  topBar: {
    visible: false,
  },
};
