import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {StatusBadge} from './status-badge';
import {styles} from './styles/pending-status-style';

export function PendingStatus({
  label,
  text,
  date,
  time,
  purpledot,
  status,
  PendingPress,
}) {
  return (
    <TouchableOpacity onPress={PendingPress} style={styles.OutsideContainer}>
      <View style={styles.InnerContainer}>
        <View style={styles.Container}>
          <Text style={styles.NameText}>{label}</Text>
          <View style={styles.ServiceRow}>
            <Image
              style={styles.ServiceImage}
              source={require('../img/DropInForSittersNoPinkBackground.png')}
            />
            <Text style={styles.ServiceText}>{text}</Text>
          </View>

          <View style={styles.DateContainer}>
            <Text style={styles.Date}>{date}</Text>
            <Image style={styles.PurpleDot} source={purpledot} />
            <Text style={styles.Time}>{time}</Text>
          </View>
        </View>

        <StatusBadge status={status} />
      </View>
    </TouchableOpacity>
  );
}
