import React from 'react';
import {View} from 'react-native';
import {styles} from './styles/booking-sucess-style.js';
import { PrimaryButton } from "../components/primary-button";

export function BookingSucess() {
  return (
    <View>
      <PrimaryButton
          label="OK"
          onPress={setbutton}
      />
    </View>
  );
}
