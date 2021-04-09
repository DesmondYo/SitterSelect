import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles/sign-up-overlay-style.js';

export function SignUpOverlay() {
  return (
    <View>
      <TouchableOpacity
        onPress={() => SignUpOverlay.current.scrollToTop()}
        style={styles.buttonStyle}>
        <Text style={styles.text}>What do you need?</Text>
        <View style={styles.rectangle}>
          <Text style={styles.buttonTextStyle}>I’m looking for a sitter</Text>
        </View>
        <View style={(styles.buttonTextStyle, styles.rectangletwo)}>
          <Text style={styles.buttonTextStyle}>
            I’d like to become a sitter
          </Text>
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => SignUpOverlay.current.close()}
        style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>I’d like to become a sitter</Text>
      </TouchableOpacity> */}
    </View>
  );
}
