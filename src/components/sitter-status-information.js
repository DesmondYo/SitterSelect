import React from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './styles/sitter-status-information-style.js';

export function SitterStatusApproved({
  source,
  label,
  text,
  date,
  time,
  purpledot,
  approved,
  ApprovedPress,
}) {
  return (
    <TouchableOpacity onPress={ApprovedPress}>
      <View style={styles.MainRectangle}>
        <View style={{flexDirection: 'row'}}>
          <Image source={source} style={{width: 51, height: 51}} />

          <View style={{marginLeft: 16}}>
            <Text style={[styles.TextStyle, {marginBottom: 5}]}>{label}</Text>

            <View style={{flexDirection: 'row', marginBottom: 5}}>
              <Image
                style={styles.ServiceImage}
                source={require('../img/DropInForSittersNoPinkBackground.png')}
              />
              <Text style={styles.Text}>{text}</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text style={styles.date}>{date}</Text>
              <Image style={styles.PurpleDot} source={purpledot} />
              <Text style={styles.time}>{time}</Text>
            </View>
          </View>
        </View>

        <View style={styles.approved}>
          <Text style={styles.approvedText}>{approved}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export function SitterStatusDeclined({
  source,
  label,
  text,
  date,
  time,
  purpledot,
  declined,
  DeclinedPress,
}) {
  return (
    <TouchableOpacity onPress={DeclinedPress}>
      <View style={styles.MainRectangle}>
        <View style={{flexDirection: 'row'}}>
          <Image source={source} style={{width: 51, height: 51}} />

          <View style={{marginLeft: 16}}>
            <Text style={[styles.TextStyle, {marginBottom: 5}]}>{label}</Text>

            <View style={{flexDirection: 'row', marginBottom: 5}}>
              <Image
                style={styles.ServiceImage}
                source={require('../img/DropInForSittersNoPinkBackground.png')}
              />
              <Text style={styles.Text}>{text}</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text style={styles.date}>{date}</Text>
              <Image style={styles.PurpleDot} source={purpledot} />
              <Text style={styles.time}>{time}</Text>
            </View>
          </View>
        </View>
        <View style={styles.declined}>
          <Text style={styles.declinedText}>{declined}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export function SitterStatusPending({
  source,
  label,
  text,
  date,
  time,
  purpledot,
  pending,
  PendingPress,
}) {
  return (
    <TouchableOpacity onPress={PendingPress}>
      <View style={styles.MainRectangle}>
        <View style={{flexDirection: 'row'}}>
          <Image source={source} style={{width: 51, height: 51}} />

          <View style={{marginLeft: 16}}>
            <Text style={[styles.TextStyle, {marginBottom: 5}]}>{label}</Text>

            <View style={{flexDirection: 'row', marginBottom: 5}}>
              <Image
                style={styles.ServiceImage}
                source={require('../img/DropInForSittersNoPinkBackground.png')}
              />
              <Text style={styles.Text}>{text}</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text style={styles.date}>{date}</Text>
              <Image style={styles.PurpleDot} source={purpledot} />
              <Text style={styles.time}>{time}</Text>
            </View>
          </View>
        </View>
        <View style={styles.pending}>
          <Text style={styles.pendingText}>{pending}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export function SitterInformation({
  source,
  label,
  text,
  date,
  time,
  purpledot,
  approved,
  SitterBookingDetails,
}) {
  return (
    <TouchableOpacity onPress={SitterBookingDetails}>
      <View style={styles.MainRectangle}>
        <View style={{flexDirection: 'row'}}>
          <Image source={source} style={{width: 51, height: 51}} />

          <View style={{marginLeft: 16}}>
            <Text style={[styles.TextStyle, {marginBottom: 5}]}>{label}</Text>

            <View style={{flexDirection: 'row', marginBottom: 5}}>
              <Image
                style={styles.ServiceImage}
                source={require('../img/DropInForSittersNoPinkBackground.png')}
              />
              <Text style={styles.Text}>{text}</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text style={styles.date}>{date}</Text>
              <Image style={styles.PurpleDot} source={purpledot} />
              <Text style={styles.time}>{time}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
