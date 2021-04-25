import React, {useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  Platform,
  Button,
  TextInput,
} from 'react-native';
import {styles} from './styles/sitter-detail-page-style.js';
import {BackButton} from '../components/back-button';
import {Navigation} from 'react-native-navigation';
import {Calendar} from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';
import {PrimaryButton} from '../components/primary-button';
import dayjs from 'dayjs';

export function SitterDetailsPage({componentId}) {
  const [startTime, setStartTime] = useState(dayjs().toDate());
  const [endTime, setEndTime] = useState(dayjs().add(2, 'hour').toDate());

  return (
    <>
      <ScrollView style={styles.SitterDetailContainer}>
        <View style={styles.SitterBackgroundColor}>
          <BackButton
            onPress={onPress}
            backButtonImage={require('../img/backarrow.png')}
            imageWidth={25}
            imageHeight={25}
          />
          <Image
            source={require('../img/PhotoOfSitter.png')}
            style={styles.PhotoOfSitter}
          />
        </View>
        <Text style={styles.SitterName}>Josie Emch</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.StarRating}> 4.8 </Text>
        </View>
        <Image
          source={require('../img/StarIcon.png')}
          style={styles.StarIcon}
        />
        <Text style={styles.Location}>Phoenix, AZ</Text>
        <View style={styles.LineSeperator} />
        <Text style={styles.SitterDescription}>
          Description {'\n'} {'\n'}Education major and Sitters Select founder
          who is passionate about working with kids. She also loves all animals
          & spending time with toddlers! In her spare time, she offers tutoring
          services. If you look after my service, we will be friends for life.
        </Text>
        <View style={styles.LineSeperator} />
        <Text style={styles.TypeOfService}>Type of Service</Text>
        <View style={{flexDirection: 'row'}}></View>
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
          style={{
            height: 350,
            marginTop: 22,
          }}
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
        <Text style={styles.StartTime}>Start Time</Text>
        <Text style={styles.EndTime}>End Time</Text>

        <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 16}}>
          {/* <DateTimePicker
            value={startTime}
            mode={'time'}
            is24Hour={true}
            display="default"
            onChange={(_, val) => setStartTime(val)}
            style={[styles.LineWithText, {marginRight: 15}]}
          />

          <DateTimePicker
            value={endTime}
            mode={'time'}
            is24Hour={true}
            display="default"
            onChange={(_, val) => setEndTime(val)}
            style={styles.LineWithText}
          /> */}
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
  function onPress() {
    Navigation.push(componentId, {
      component: {
        name: 'MapPage',
      },
    });
  }

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
