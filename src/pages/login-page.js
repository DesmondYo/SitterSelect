import React, {useState} from 'react';
import {Navigation} from 'react-native-navigation';
import {
  View,
  Image,
  Text,
} from 'react-native';
import {GmailInput} from '../components/gmail-input';
import {styles} from './styles/login-page-style';
import {PrimaryButton} from '../components/primary-button';

const LoginPage = ({componentId}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [button, setbutton] = useState(null);
  return (
    <View style={styles.loginPageContainer}>
        <Image
          source={require('../img/SitterSelectLogo.png')}
          style={styles.SitterSelectLogo}
        />

      <View style={{ paddingHorizontal: 16 }}>
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
          label="Login"
          onPress={onLogin}
          style={styles.button}
          TextStyle={styles.buttonText}
        />
        <Text onPress={onOpenOverlay} style={styles.signUp}>
          Don't have an account? Sign Up
        </Text>
      </View>
    </View>
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

  function onLogin() {
    Navigation.push(componentId, {
      component: {
        name: 'MapPage',
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
