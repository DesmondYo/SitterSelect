import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from './styles/client-booking-page-style.js';
import {Navigation} from 'react-native-navigation';
import {BackButton} from '../components/back-button';
import {ClientSitterBookings} from '../components/client-sitter-bookings';
import Auth from '@react-native-firebase/auth';
import Firestore from '@react-native-firebase/firestore';

export function ClientBookingPage({componentId}) {
  const [bookingsDocs, setBookingsDocs] = useState([]);
  useEffect(onFetchBookings, []);
  console.log(Auth().currentUser.uid);
  return (
    <FlatList
      data={bookingsDocs}
      style={styles.PageContainer}
      renderItem={({item}) => {
        const booking = item.data();
        // source, label, date, type, time
        return (
          <ClientSitterBookings
            id={item.id}
            source={{uri: booking.sitter_image}}
            label={booking.first_name}
            serviceType={booking.service_type}
            date={booking.date}
            time={[booking.start_date, ' - ', booking.end_date]}
            status={booking.status}
            approvedPress={() => navigateToClientBookingDetailsPage(item.id)}
          />
        );
      }}
      ListHeaderComponent={
        <>
          <BackButton
            onPress={onNavigateBack}
            backButtonImage={require('../img/backarrow.png')}
            imageWidth={30}
            imageHeight={30}
            top={45}
          />
          <Text style={styles.Text}> My Bookings </Text>
          <View style={styles.LineSeperator} />
        </>
      }
    />
  );
  /**
   * Fetches all the client bookings
   */
  function onFetchBookings() {
    const unsubscribe = Firestore()
      .collection('bookings')
      .where('client_id', '==', Auth().currentUser.uid)
      .where('status', '!=', 'completed')
      .onSnapshot(snapshot => {
        setBookingsDocs(snapshot.docs);
      });
    return () => {
      unsubscribe();
    };
  }

  /**
   * Navigates to client booking details page
   */
  function navigateToClientBookingDetailsPage(id) {
    Navigation.push(componentId, {
      component: {
        name: 'ClientBookingDetails',
        passProps: {
          id,
        },
      },
    });
  }

  // async function approvedPress() {
  //   await Firestore().collection('bookings').add({
  //   });

  function onNavigateBack() {
    Navigation.popToRoot(componentId);
  }
}

ClientBookingPage.options = {
  topBar: {
    visible: false,
  },
};
