import React, {useState} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {styles} from './styles/map-page-style';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {Navigation} from 'react-native-navigation';
import {SitterImage} from '../components/sitter-image';
import {BackButton} from '../components/back-button';

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
        <SitterImage
          image={require('../img/LadyInPic.png')}
          onPress={SitterDetailsPage}
        />
      </MapView>
      <BackButton
        onPress={onPress}
        backButtonImage={require('../img/backarrow.png')}
        imageWidth={50}
        imageHeight={50}
      />
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

  function onPress() {
    Navigation.push(componentId, {
      component: {
        name: 'LoginPage',
      },
    });
  }

  function onBack() {
    Navigation.pop(componentId);
  }

  function SitterDetailsPage() {
    Navigation.push(componentId, {
      component: {
        name: 'SitterDetails',
      },
    });
  }
};

MapPage.options = {
  topBar: {
    visible: false,
  },
};

export {MapPage};
