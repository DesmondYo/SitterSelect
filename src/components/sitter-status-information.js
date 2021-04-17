import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles/sitter-status-information-style.js';

export function SitterStatusInformation({source, label}) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#ffffff", padding: 16, marginHorizontal: 16, marginTop: 12, borderRadius: 8 }}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={source}
          style={{width: 51, height: 51}}
        />

        <View style={{ marginLeft: 16 }}>
          <Text style={[styles.TextStyle, { marginBottom: 4 }]}>{label}</Text>

          <View style={{ flexDirection: "row", marginBottom: 4  }}>
            <Text style={styles.TextStyle}>ICON </Text>
            <Text style={styles.TextStyle}>Drop-In for Pets</Text>
          </View>

          <View style={{ flexDirection: "row"  }}>
            <Text style={styles.TextStyle}>date </Text>
            <Text style={styles.TextStyle}>time</Text>
          </View>
        </View>
      </View>
      
      <View>
        <Text style={styles.TextStyle}>Status</Text>
      </View>
    </View>
  );
}
