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

export function SitterDetailsPage({componentId}) {
  const [startTime, setStartTime] = useState(dayjs().toDate());
  const [endTime, setEndTime] = useState(dayjs().add(2, 'hour').toDate());
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const formattedStartTime = dayjs(startTime).format('h:mm A');
  const formattedEndTime = dayjs(endTime).format('h:mm A');
  const [type, settype] = useState('Drop-In For Pets');
  return (
    <>
      <ScrollView style={styles.SitterDetailsContainer}>
        <Text style={styles.TypeOfService}>Type of Service</Text>
        <ServiceItem type={type} />
        <Text onPress={onOpenOverlay} style={styles.ChangeText}>
          Change
        </Text>
        <View style={styles.LineSeperator} />
        <Text style={styles.TypeOfService}>Choose the Booking date</Text>
        <Text style={styles.BookingdateParagraphText}>
          Add your booking date to see the price.
        </Text>
        <Calendar
          markingType={'custom'}
          markedDates={{
            '2021-06-09': {
              customStyles: {
                container: {
                  width: 40,
                  height: 40,
                  backgroundColor: '#c4c4c4',
                  paddingTop: 5,
                },
              },
            },
            '2021-06-10': {
              customStyles: {
                container: {
                  width: 40,
                  height: 40,
                  backgroundColor: '#c4c4c4',
                  paddingTop: 5,
                },
              },
            },
            '2021-06-11': {
              customStyles: {
                container: {
                  width: 40,
                  height: 40,
                  backgroundColor: '#c4c4c4',
                  paddingTop: 5,
                },
              },
            },
            '2021-06-12': {
              customStyles: {
                container: {
                  width: 40,
                  height: 40,
                  backgroundColor: '#c4c4c4',
                  paddingTop: 5,
                },
              },
            },
            '2021-06-13': {
              customStyles: {
                container: {
                  width: 40,
                  height: 40,
                  backgroundColor: '#8cf2ce',
                  paddingTop: 5,
                },
              },
            },
            '2021-06-14': {
              customStyles: {
                container: {
                  width: 40,
                  height: 40,
                  backgroundColor: '#c4c4c4',
                  paddingTop: 5,
                },
              },
            },
            '2021-06-15': {
              customStyles: {
                container: {
                  width: 40,
                  height: 40,
                  backgroundColor: '#8cf2ce',
                  paddingTop: 5,
                },
              },
            },
            '2021-06-16': {
              customStyles: {
                container: {
                  width: 40,
                  height: 40,
                  backgroundColor: '#8cf2ce',
                  paddingTop: 5,
                },
              },
            },
            '2021-06-17': {
              customStyles: {
                container: {
                  width: 40,
                  height: 40,
                  backgroundColor: '#c4c4c4',
                  paddingTop: 5,
                },
              },
            },
            '2021-06-18': {
              customStyles: {
                container: {
                  width: 40,
                  height: 40,
                  backgroundColor: '#c4c4c4',
                  paddingTop: 5,
                },
              },
            },
            '2021-06-19': {
              customStyles: {
                container: {
                  width: 40,
                  height: 40,
                  backgroundColor: '#c4c4c4',
                  paddingTop: 5,
                },
              },
            },
            '2021-06-20': {
              customStyles: {
                container: {
                  width: 40,
                  height: 40,
                  backgroundColor: '#c4c4c4',
                  paddingTop: 5,
                },
              },
            },
            '2021-06-21': {
              customStyles: {
                container: {
                  width: 40,
                  height: 40,
                  backgroundColor: '#c4c4c4',
                  paddingTop: 5,
                },
              },
            },
            '2021-06-22': {
              customStyles: {
                container: {
                  width: 40,
                  height: 40,
                  backgroundColor: '#c4c4c4',
                  paddingTop: 5,
                },
              },
            },
            '2021-06-23': {
              customStyles: {
                container: {
                  width: 40,
                  height: 40,
                  backgroundColor: '#8cf2ce',
                  paddingTop: 5,
                },
              },
            },
            '2021-06-24': {
              customStyles: {
                container: {
                  width: 40,
                  height: 40,
                  backgroundColor: '#8cf2ce',
                  paddingTop: 5,
                },
              },
            },
            '2021-06-25': {
              customStyles: {
                container: {
                  width: 40,
                  height: 40,
                  backgroundColor: '#8cf2ce',
                  paddingTop: 5,
                },
              },
            },
            '2021-06-26': {
              customStyles: {
                container: {
                  width: 40,
                  height: 40,
                  backgroundColor: '#8cf2ce',
                  paddingTop: 5,
                },
              },
            },
            '2021-06-27': {
              customStyles: {
                container: {
                  width: 40,
                  height: 40,
                  backgroundColor: '#8cf2ce',
                  paddingTop: 5,
                },
              },
            },
            '2021-06-28': {
              customStyles: {
                container: {
                  width: 40,
                  height: 40,
                  backgroundColor: '#e09095',
                  paddingTop: 5,
                },
              },
            },
            '2021-06-29': {
              customStyles: {
                container: {
                  width: 40,
                  height: 40,
                  backgroundColor: '#8cf2ce',
                  paddingTop: 5,
                },
              },
            },
            '2021-06-30': {
              customStyles: {
                container: {
                  width: 40,
                  height: 40,
                  backgroundColor: '#c4c4c4',
                  paddingTop: 5,
                },
              },
            },
          }}
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
          }}
        />
        <View style={styles.SquareView}>
          <View style={styles.SquareShapeView} />
          <Text style={styles.Avalible}>Avalible</Text>
          <View style={styles.SquareShapeViewBooked} />
          <Text style={styles.Booked}>Booked</Text>
        </View>
        <Text style={styles.BookingDate}>Selected: 28 June 2021</Text>
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

  async function BookingSuccessPage() {
    // TODO: Test code
    // await Firestore().collection('bookings').add({
    //    "name": "Luke",
    // });

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
          onChange: settype,
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
