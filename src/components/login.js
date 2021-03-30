import React from 'react';
import {View, Image, Text, KeyboardAvoidingView} from 'react-native';
import GmailInput from 'react-native-gmailtype-textinput';
import {styles} from './styles/login-style.js';

export function Login() {
    constructor(props){
        super(props);
        this.state = {
            email_or_phone:'',
            password:''
        }
    }
    render() {

  return (
    <View style={styles.loginPageContainer}>
      <View>
        <Image
          source={require('../img/SitterSelectLogo.png')}
          style={styles.SitterSelectLogo}
        />
        <Text style={styles.Text}> Hi There!</Text>
      </View>
      <View>
      <Text>Gmail Type Input Field</Text>
      <GmailInput label='Email or Phone'
                                 onChangeText={(text) => {this.setState({email_or_phone:text})}}
                                 hideLabel={this.state.email_or_phone !== ''}
      />
      </View>
    </View>
  );
}
}
