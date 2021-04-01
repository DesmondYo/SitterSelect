import React, {useState} from 'react';
import {
  Platform,
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
import {styles} from './styles/login-style.js';

export function Login() {
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
        <TouchableOpacity onPress={setbutton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.signUp}> Don’t have an account? Sign Up</Text>
      </View>
    </View>
  );
}
