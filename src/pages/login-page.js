import React, {useState} from 'react';
import {Navigation} from 'react-native-navigation';
import {View, Image, Text, ScrollView, Alert} from 'react-native';
import {Login} from '../components/login';
import {styles} from './styles/login-page-style';
import {PrimaryButton} from '../components/primary-button';
import auth from '@react-native-firebase/auth';

const LoginPage = ({componentId}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

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
          label="Client Login"
          onPress={createUser}
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

  function createUser() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // .then(({ user }) => {
        // firestore().collection('Users').where('user_id', '==', user.uid).get()
        // .then(userData => {
        //   if userData.type === "sitter" {

        //   }
        // });

        Navigation.push(componentId, {
          component: {
            name: 'MapPage',
          },
        });
      })
      .catch(error => {
        if (error) {
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
      });
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
