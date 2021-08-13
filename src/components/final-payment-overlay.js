import dayjs from 'dayjs';
import React, {useEffect, useState} from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';
import {AwesomeModal} from 'react-native-awesome-modal';
import {Navigation} from 'react-native-navigation';
import {styles} from './styles/final-payment-overlay-style.js';
import Firestore from '@react-native-firebase/firestore';
import Functions from '@react-native-firebase/functions';
import { useStripe } from '@stripe/stripe-react-native';

export function FinalPaymentOverlay({componentId, parentComponentId, id}) {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [bookingData, setBookingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [clientSecret, setClientSecret] = useState(null);

  const hoursBetweenStartAndEndTime = Math.abs(
    dayjs(bookingData?.start_time, 'h:m A').diff(
      dayjs(bookingData?.end_time, 'h:m A'),
      'h',
    ),
  );

  var customParseFormat = require('dayjs/plugin/customParseFormat');
  dayjs.extend(customParseFormat);
  dayjs('4:15 PM', 'h:m A').isValid();

  useEffect(FetchClientBooking, []);
  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <AwesomeModal
      onClose={() => Navigation.dismissOverlay(componentId)}
      onPressOutside={() => console.log('outside')}
      modalBottomMargin={0}
      modalContainerStyle={styles.containerStyle}
      modalOverlayStyle={styles.modalOverlayStyle}
      modalInnerContainerStyle={styles.modalInnerContainerStyle}>
      <Text style={styles.text}>
        Are you sure the sitter worked {hoursBetweenStartAndEndTime} hours?
      </Text>

      <TouchableOpacity style={styles.rectangle} onPress={onAccept}>
        <Text style={styles.buttonTextStyle}>Yes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={(styles.buttonTextStyle, styles.rectangletwo)}
        onPress={onDecline}>
        <Text style={styles.buttonTextStyleRectangleTwo}>No</Text>
      </TouchableOpacity>
    </AwesomeModal>
  );

  async function fetchPaymentSheetParams() {
    const result = await Functions().httpsCallable('createPaymentIntent')({ amount: 30000 });
    console.log("Result: ", result);
    const { paymentIntent, ephemeralKey, customer } = result.data.data;

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  async function initializePaymentSheet() {
    const {
      paymentIntent,
      ephemeralKey,
      customer,
    } = await fetchPaymentSheetParams();
    console.log({
      paymentIntent,
      ephemeralKey,
      customer
    });
    const { error } = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
    });
    if (!error) {
      setClientSecret(paymentIntent);
      setLoading(false);
    }
  };

  async function openPaymentSheet() {
    const { error } = await presentPaymentSheet({ clientSecret });
    
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      // You have the naviagtion method here
      
      // Updates booking to 'completed' status
      await Firestore().collection('bookings').doc(id).update({
        status: 'completed',
      });
    }
  };

  function FetchClientBooking() {
    const unsubscribe = Firestore()
      .collection('bookings')
      .doc(id)
      .onSnapshot(document => setBookingData(document.data()));
    return () => unsubscribe();
  }

  /**
   * After you click the confirm and Pay button
   * It pops the overlay and when you press Yes
   * It will lead you to the Stripe Page
   */
  async function onAccept() {
    await Navigation.dismissOverlay(componentId);

    setTimeout(() => {
      openPaymentSheet();
    }, 1000);
    
  }

  /**
   * After you click the confirm and Pay button
   * It pops the overlay and when you press No
   * It will lead you to another overlay
   * ton contact Josie to call her
   */
  async function onDecline() {
    await Navigation.dismissOverlay(componentId);
    Navigation.showOverlay({
      component: {
        name: 'ContactJosieOverlay',
        options: {
          layout: {
            backgroundColor: 'transparent',
            componentBackgroundColor: 'transparent',
          },
        },
      },
    });
  }
}
