import React, {useState} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {styles} from './styles/map-page-style';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {Navigation} from 'react-native-navigation';

const MapPage = ({componentId}) => {
  const [backButton, setbackButton] = useState(null);
  const [currentlocation, setcurrentlocation] = useState(null);
  const [button, setbutton] = useState(null);
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          image={require('../img/LadyInPic.png')}
        />
      </MapView>
      <TouchableOpacity onPress={onBack} style={styles.backbutton}>
        <Image
          source={require('../img/backarrow.png')}
          style={{width: 50, height: 50}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={setcurrentlocation}
        style={styles.CurrentLocation}>
        <Image
          source={require('../img/CurrentLocation.png')}
          style={{width: 100, height: 100}}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={setbutton} style={styles.button}>
        <Text style={styles.buttonText}>My Bookings</Text>
      </TouchableOpacity>
      <Image
        source={require('../img/CurrentLocationPin.png')}
        style={styles.CurrentLocationPin}
      />
    </View>
  );

  function onBack() {
    Navigation.pop(componentId);
  }
};

MapPage.options = {
  topBar: {
    visible: false,
  },
};

export {MapPage};
