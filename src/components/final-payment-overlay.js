import dayjs from 'dayjs';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {AwesomeModal} from 'react-native-awesome-modal';
import {Navigation} from 'react-native-navigation';
import {styles} from './styles/final-payment-overlay-style.js';
import Firestore from '@react-native-firebase/firestore';

export function FinalPaymentOverlay({componentId, parentComponentId, id}) {
  const [bookingData, setBookingData] = useState(null);

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
    Navigation.push(parentComponentId, {
      component: {
        name: 'LoginPage',
      },
    });
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
