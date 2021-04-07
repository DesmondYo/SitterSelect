import React, {useState} from 'react';
import {Navigation} from 'react-native-navigation';
import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  secureTextEntry,
  Button,
  title,
  TouchableOpacity,
} from 'react-native';
import GmailInput from 'react-native-gmailtype-textinput';
import {styles} from './styles/login-page-style';
import {PrimaryButton} from '../components/primary-button';

const LoginPage = ({componentId}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [button, setbutton] = useState(null);
  return (
    <View style={styles.loginPageContainer}>
      <View>
        <Image
          source={require('../img/SitterSelectLogo.png')}
          style={styles.SitterSelectLogo}
        />
        <Text style={styles.Text}> Hi There!</Text>
        <GmailInput label="Email" onChangeText={setEmail} hideLabel={true} />
        <GmailInput
          label="Password"
          onChangeText={setPassword}
          hideLabel={true}
          secureTextEntry={setPassword}
        />
        <Text style={styles.password}> I forgot my password</Text>

        <PrimaryButton label="Login" onPress={onLogin} />

        {/* Navigation.showOverlay("SignUpOverlay") */}
        <Text style={styles.signUp}> Don’t have an account? Sign Up</Text>
      </View>
    </View>
  );

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
