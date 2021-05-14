import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles/sitter-status-information-style';

export function SitterStatusDetail({
  source,
  label,
  text,
  date,
  time,
  purpledot,
  value,
  hasBackground = false,
  textColor = '#5E4386',
  backgroundColor = '#F5EFFF',
  ApprovedPress,
}) {
  return (
    <TouchableOpacity onPress={ApprovedPress}>
      <View style={styles.MainRectangle}>
        <View style={styles.ViewStyle}>
          <Image source={source} style={styles.ImageStyling} />

          <View style={styles.ViewMarginStyle}>
            <Text style={[styles.TextStyle, styles.TextStyleMargin]}>
              {label}
            </Text>
            <View style={styles.ViewStyleLogo}>
              <Image
                style={styles.ServiceImage}
                source={require('../img/DropInForSittersNoPinkBackground.png')}
              />
              <Text style={styles.Text}>{text}</Text>
            </View>

            <View style={styles.ViewStyle}>
              <Text style={styles.date}>{date}</Text>
              <Image style={styles.PurpleDot} source={purpledot} />
              <Text style={styles.time}>{time}</Text>
              <View
                style={[
                  styles.value,
                  {
                    backgroundColor: hasBackground ? backgroundColor : null,
                    borderRadius: hasBackground ? 18 : null,
                    width: hasBackground ? 80 : null,
                  },
                ]}>
                <Text
                  style={[
                    styles.valueText,
                    {color: hasBackground ? textColor : '#92465a'},
                  ]}>
                  {value}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
