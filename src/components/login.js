import React from 'react';
import {View, Image, Text, KeyboardAvoidingView} from 'react-native';
import GmailInput from 'react-native-gmailtype-textinput';
import {styles} from './styles/login-style.js';

export function Login() {
  return (
    <View style={styles.loginPageContainer}>
      <View>
        <Image
          source={require('../img/SitterSelectLogo.png')}
          style={styles.SitterSelectLogo}
        />
        <Text style={styles.Text}> Hi There!</Text>
      </View>
    </View>
  );
}
