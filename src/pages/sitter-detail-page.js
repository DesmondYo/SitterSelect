import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {GmailTouchable} from '../components/gmail-touchable';
import {styles} from './styles/sitter-detail-page-style.js';
import {Navigation} from 'react-native-navigation';
import {Calendar} from 'react-native-calendars';
import {PrimaryButton} from '../components/primary-button';
import dayjs from 'dayjs';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {ServiceItem} from '../components/service-item';
import {useCurrentUser} from '../utils/use-current-user';
import Auth from '@react-native-firebase/auth';
import Firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
import _ from 'lodash';
import {ServiceTypes} from '../config/sitter-types';
import {getServicePrice} from '../utils/get-service-price';

export function SitterDetailsPage({componentId}) {
  const [startTime, setStartTime] = useState(dayjs());
  const [endTime, setEndTime] = useState(dayjs().add(2, 'hour'));
  const [selectedDate, setSelectedDate] = useState(null);
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const formattedStartTime = dayjs(startTime).format('h:mm A');
  const formattedEndTime = dayjs(endTime).format('h:mm A');
  const [serviceType, setServiceType] = useState(ServiceTypes.ChildTutoring);
  const user = useCurrentUser();
  const formattedDate = dayjs(selectedDate).format('D MMM YYYY');
  const markedDates = {
    // Current Date
    [`${dayjs().format('YYYY-MM-DD')}`]: {
      customStyles: {
        container: {
          width: 40,
          height: 40,
          backgroundColor: '#c4c4c4',
          paddingTop: 5,
        },
      },
    },
    // Selected Date
    [`${dayjs(selectedDate).format('YYYY-MM-DD')}`]: {
      customStyles: {
        container: {
          width: 40,
          height: 40,
          backgroundColor: '#e09095',
          paddingTop: 5,
        },
      },
    },
  };
  // Calculation to work out price
  const hoursBetweenStartAndEndDate = Math.abs(
    dayjs(startTime).diff(endTime, 'hours'),
  );
  const price = getServicePrice(serviceType, hoursBetweenStartAndEndDate);

  return (
    <>
      <ScrollView style={styles.SitterDetailsContainer}>
        <Text style={styles.TypeOfService}>Type of Service</Text>
        <ServiceItem type={serviceType} />
        <Text onPress={onOpenOverlay} style={styles.ChangeText}>
          Change
        </Text>
        <View style={styles.LineSeperator} />
        <Text style={styles.TypeOfService}>Choose the Booking date</Text>
        <Text style={styles.BookingdateParagraphText}>
          Add your booking date to see the price.
        </Text>
        <Calendar
          markingType="custom"
          markedDates={markedDates}
          onDayPress={({dateString}) => setSelectedDate(dateString)}
          theme={{
            backgroundColor: 'transparent',
            calendarBackground: 'transparent',
            textSectionTitleColor: '#92465a',
            todayTextColor: '#ffffff',
            dayTextColor: '#92465a',
            textDisabledColor: '#848a90',
            arrowColor: '#5e4386',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: '#92465a',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 14,
            textMonthFontSize: 14,
            textDayHeaderFontSize: 14,
            selectedDayBackgroundColor: '#000000',
            selectedDayTextColor: '#000000',
          }}
        />
        <Text style={styles.BookingDate}>Selected: {formattedDate}</Text>
        <View style={styles.TimePicker}>
          <GmailTouchable
            label="Start Time"
            isRow={true}
            containerStyle={styles.GmailStartTimeStyle}
            value={formattedStartTime}
            onPress={() => setShowStartTimePicker(true)}
            editable={false}
          />

          <GmailTouchable
            label="End Time"
            isRow={true}
            value={formattedEndTime}
            onPress={() => setShowEndTimePicker(true)}
            editable={false}
          />

          <DateTimePickerModal
            isVisible={showStartTimePicker}
            mode="time"
            Date={startTime}
            onConfirm={val => {
              setStartTime(val);
              setShowStartTimePicker(false);
            }}
            onCancel={() => setShowStartTimePicker(false)}
            headerTextIOS={'Pick a Start time'}
          />

          <DateTimePickerModal
            isVisible={showEndTimePicker}
            mode="time"
            Date={endTime}
            onConfirm={val => {
              setEndTime(val);
              setShowEndTimePicker(false);
            }}
            onCancel={() => setShowEndTimePicker(false)}
            headerTextIOS={'Pick a End time'}
          />
        </View>
      </ScrollView>

      <View style={styles.BookNowBackground}>
        <View>
          <Text style={styles.Money}>
            {price ? `$${price}` : 'Contact Admin'}
          </Text>
          <Text style={styles.Rates}>
            Rate for {hoursBetweenStartAndEndDate} hours
          </Text>
        </View>
        <PrimaryButton
          label="Book Now"
          fill={true}
          containerStyle={{width: 159}}
          TextStyle={styles.BookNowButtonText}
          onPress={BookingSuccessPage}
        />
      </View>
    </>
  );

  async function BookingSuccessPage() {
    await Firestore()
      .collection('bookings')
      .add({
        date: selectedDate,
        start_date: formattedStartTime,
        end_date: formattedEndTime,
        booking_date: selectedDate,
        service_type: serviceType,
        client_id: Auth().currentUser.uid,
        created_at: dayjs().format(),
        status: 'pending',
        client_first_name: user.name,
        sitter_id: null,
        booked_length: hoursBetweenStartAndEndDate,
        client_address: user.client_address ?? null,
        invoice_number: uuid.v4().substr(0, 13),
        client_phone_number: user.phone_number ?? null,
        price: price,
      });

    Navigation.push(componentId, {
      component: {
        name: 'BookingSuccessPage',
      },
    });
  }

  function onOpenOverlay() {
    Navigation.showOverlay({
      component: {
        name: 'ServiceOverlay',
        passProps: {
          onChange: setServiceType,
        },
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

SitterDetailsPage.options = {
  topBar: {
    visible: false,
  },
};
