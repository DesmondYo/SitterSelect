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
export function SitterDetailsPage({componentId}) {
  const [startTime, setStartTime] = useState(dayjs());
  const [endTime, setEndTime] = useState(dayjs().add(2, 'hour'));
  const [startSelectedDate, setStartSelectedDate] = useState(null);
  const [endSelectedDate, setEndSelectedDate] = useState(null);
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const formattedStartTime = dayjs(startTime).format('h:mm A');
  const formattedEndTime = dayjs(endTime).format('h:mm A');
  const [serviceType, setServiceType] = useState('Kids-Portation');
  const user = useCurrentUser();
  const formattedStartDate = dayjs(startSelectedDate).format('D MMM YYYY');
  const formattedEndDate = dayjs(endSelectedDate).format('D MMM YYYY');
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
    [`${dayjs(startSelectedDate).format('YYYY-MM-DD')}`]: {
      customStyles: {
        container: {
          width: 40,
          height: 40,
          backgroundColor: '#e09095',
          paddingTop: 5,
        },
      },
    },
    [`${dayjs(endSelectedDate).format('YYYY-MM-DD')}`]: {
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
  // hoursBetweenStartAndEndDate * 14 (14 dollars per hour)
  const price = hoursBetweenStartAndEndDate * 14;

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
          onDayPress={onDatePress}
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
        <Text style={styles.BookingDate}>Selected: {formattedStartDate} - {formattedEndDate}</Text>
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
            date={startTime}
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
            date={endTime}
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
          <Text style={styles.Money}>${price}</Text>
          <Text style={styles.Rates}>
            Rate for {hoursBetweenStartAndEndDate} hours
          </Text>
        </View>
        <PrimaryButton
          label="Book Now"
          onPress={BookingSuccessPage}
          style={styles.BookNowButton}
          TextStyle={styles.BookNowButtonText}
        />
      </View>
    </>
  );

  function onDatePress({ dateString }) {
    if(!startSelectedDate) {
      setStartSelectedDate(dateString);
    } else {
      setEndSelectedDate(dateString);
    }
  }

  async function BookingSuccessPage() {
    await Firestore().collection('bookings').add({
      date: startSelectedDate,
      start_date: formattedStartTime,
      end_date: formattedEndTime,
      booking_date: startSelectedDate,
      service_type: serviceType,
      client_id: Auth().currentUser.uid,
      created_at: dayjs().format(),
      status: 'pending',
      client_first_name: user.name,
      sitter_id: null,
      booked_length: hoursBetweenStartAndEndDate,
      client_address: user.client_address,
      invoice_number: uuid.DNS,
      phone_number: user.phone_number,
      sitter_image: user.image_url,
      description: user.description,
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
