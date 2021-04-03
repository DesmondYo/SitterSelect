import React from 'react'
import {TouchableOpacity, View, Text} from 'react-native'
import {styles} from './styles/primary-button-style.js'
  
export function PrimaryButton({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}
