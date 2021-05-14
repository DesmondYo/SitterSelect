import React, {useState} from 'react';
import {Navigation} from 'react-native-navigation';
import {View, Image, Text, ScrollView} from 'react-native';
import {GmailInput} from '../components/gmail-input';
import {styles} from './styles/login-page-style';
import {PrimaryButton} from '../components/primary-button';

const LoginPage = ({componentId}) => {
  const [setEmail] = useState(null);
  const [setPassword] = useState(null);
  return (
    <ScrollView
      style={styles.backgroundStyleColor}
      contentContainerStyle={styles.CheckoutPaymentPageContainer}
      contentInset={{top: 0, bottom: 150}}>
      <Image
        source={require('../img/SitterSelectLogo.png')}
        style={styles.SitterSelectLogo}
      />

      <View>
        <Text style={styles.Text}> Hi There!</Text>
        <GmailInput label="Email" onChangeText={setEmail} hideLabel={true} />
        <GmailInput
          label="Password"
          onChangeText={setPassword}
          hideLabel={true}
          secureTextEntry={setPassword}
        />
        <Text style={styles.password}> I forgot my password</Text>
        <PrimaryButton
          label="Client Login"
          onPress={onClientLogin}
          style={styles.button}
          TextStyle={styles.buttonText}
        />
        <PrimaryButton
          label=" Sitter Login"
          onPress={onSitterLogin}
          style={styles.button}
          TextStyle={styles.buttonText}
        />
        <Text onPress={onOpenOverlay} style={styles.signUp}>
          Don't have an account? Sign Up
        </Text>
      </View>
    </ScrollView>
  );

  function onOpenOverlay() {
    Navigation.showOverlay({
      component: {
        name: 'SignUpOverlay',
        options: {
          layout: {
            backgroundColor: 'transparent',
            componentBackgroundColor: 'transparent',
          },
        },
      },
    });
  }

  function onClientLogin() {
    Navigation.push(componentId, {
      component: {
        name: 'MapPage',
      },
    });
  }

  function onSitterLogin() {
    Navigation.push(componentId, {
      component: {
        name: 'SitterBookingPage',
      },
    });
  }
};

LoginPage.options = {
  topBar: {
    visible: false,
  },
};

export {LoginPage};
