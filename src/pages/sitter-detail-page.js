import React, {useState} from 'react';
import {View, Image, ScrollView, Text} from 'react-native';
import {GmailTouchable} from '../components/gmail-touchable';
import {styles} from './styles/sitter-detail-page-style.js';
import {Navigation} from 'react-native-navigation';
import {Calendar} from 'react-native-calendars';
import {PrimaryButton} from '../components/primary-button';
import dayjs from 'dayjs';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export function SitterDetailsPage({componentId}) {
  const [startTime, setStartTime] = useState(dayjs().toDate());
  const [endTime, setEndTime] = useState(dayjs().add(2, 'hour').toDate());
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const formattedStartTime = dayjs(startTime).format('h:mm A');
  const formattedEndTime = dayjs(endTime).format('h:mm A');

  return (
    <>
      <ScrollView style={styles.SitterDetailContainer}>
        <Text style={styles.TypeOfService}>Type of Service</Text>
        <Image
          source={require('../img/DropInForPets.png')}
          style={styles.DropInForPetsIcon}
        />
        <Text style={styles.DropInForPetsText}> Drop-In for Pets </Text>
        <Text onPress={onOpenOverlay} style={styles.ChangeText}>
          Change
        </Text>
        <View style={styles.LineSeperator} />
        <Text style={styles.TypeOfService}>Choose the Booking date</Text>
        <Text style={styles.BookingdateParagraphText}>
          Add your booking date to see the price.
        </Text>
        <Calendar
          theme={{
            backgroundColor: 'transparent',
            calendarBackground: 'transparent',
            textSectionTitleColor: '#92465a',
            textSectionTitleDisabledColor: '#92465a',
            selectedDayBackgroundColor: '#5e4386',
            selectedDayTextColor: '#5e4386',
            todayTextColor: '#5e4386',
            dayTextColor: '#92465a',
            textDisabledColor: '#848a90',
            dotColor: '#5e4386',
            selectedDotColor: '#ffffff',
            arrowColor: '#5e4386',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: '#92465a',
            indicatorColor: '#92465a',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 14,
            textMonthFontSize: 14,
            textDayHeaderFontSize: 14,
          }}
        />

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
            date={startTime}
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
          <Text style={styles.Money}>$1,000</Text>
          <Text style={styles.Rates}>Rate for 3 hours</Text>
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

  function BookingSuccessPage() {
    Navigation.push(componentId, {
      component: {
        name: 'BookingSuccessPage',
      },
    });
  }
}

function onOpenOverlay() {
  Navigation.showOverlay({
    component: {
      name: 'ServiceOverlay',
      options: {
        layout: {
          backgroundColor: 'transparent',
          componentBackgroundColor: 'transparent',
        },
      },
    },
  });
}

SitterDetailsPage.options = {
  topBar: {
    visible: false,
  },
};
