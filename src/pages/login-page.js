import React, {useState} from 'react';
import {Navigation} from 'react-native-navigation';
import {View, Image, Text, ScrollView, Alert} from 'react-native';
import {Login} from '../components/login';
import {styles} from './styles/login-page-style';
import {PrimaryButton} from '../components/primary-button';
import Auth from '@react-native-firebase/auth';
import Firestore from '@react-native-firebase/firestore';

const LoginPage = ({componentId}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <ScrollView
      style={styles.backgroundStyleColor}
      contentContainerStyle={styles.CheckoutPaymentPageContainer}
      contentInset={{top: 0, bottom: 150}}>
      <Image
        source={require('../img/icon3x.png')}
        style={styles.SitterSelectLogo}
      />

      <View>
        <Text style={styles.Text}> Welcome!</Text>
        <Login
          value={email}
          label="Email"
          onChangeText={setEmail}
          hideLabel={true}
        />
        <Login
          value={password}
          label="Password"
          onChangeText={setPassword}
          hideLabel={true}
          secureTextEntry={setPassword}
        />
        <Text style={styles.password}> I forgot my password</Text>
        <PrimaryButton
          label="Login"
          onPress={createUser}
          style={styles.button}
          TextStyle={styles.buttonText}
        />
        <Text onPress={onOpenOverlay} style={styles.signUp}>
          Don't have an account? Sign Up
        </Text>
      </View>
    </ScrollView>
  );

  async function createUser() {
    try {
      const {user} = await Auth().signInWithEmailAndPassword(email, password);
      const userDocs = await Firestore()
        .collection('users')
        .where('user_id', '==', user.uid)
        .get();
      const userType = userDocs.docs[0].data().type;

      if (userType === 'sitter') {
        Navigation.push(componentId, {
          component: {
            name: 'SitterBookingPage',
          },
        });
      } else if (userType === 'client') {
        Navigation.push(componentId, {
          component: {
            name: 'SitterDetails',
          },
        });
      }
    } catch (e) {
      Alert.alert(
        'Oops! Login failed',
        'There has been an issue with your login details. Please contact Josie Emch for further details.',
        [
          {
            text: 'Cancel',
          },
          {text: 'OK'},
        ],
      );
    }
  }

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
};

LoginPage.options = {
  topBar: {
    visible: false,
  },
};

export {LoginPage};
