import React, {useState} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {styles} from './styles/map-page-style';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Navigation} from 'react-native-navigation';
import {SitterMapMarker} from '../components/sitter-map-marker';
import {BackButton} from '../components/back-button';
import {Marker} from 'react-native-maps';

const MapPage = ({componentId}) => {
  const [setcurrentlocation] = useState(null);

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
          coordinate={{latitude: 37.79825, longitude: -122.4424}}
          icon={require('../img/CurrentLocationPin.png')}
          style={styles.CurrentLocationPin}
        />
        <SitterMapMarker
          latitude={37.78825}
          longitude={-122.4324}
          onPress={SitterDetailsPage}
          icon={require('../img/LadyInPic.png')}
        />
      </MapView>
      <BackButton
        onPress={onPress}
        backButtonImage={require('../img/backarrow.png')}
        imageWidth={30}
        imageHeight={30}
        top={50}
      />
      <TouchableOpacity
        onPress={setcurrentlocation}
        style={styles.CurrentLocation}>
        <Image
          source={require('../img/CurrentLocation.png')}
          style={styles.imageStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressMyBooking} style={styles.button}>
        <Text style={styles.buttonText}>My Bookings</Text>
      </TouchableOpacity>
    </View>
  );

  function onPress() {
    Navigation.push(componentId, {
      component: {
        name: 'LoginPage',
      },
    });
  }

  function onPressMyBooking() {
    Navigation.push(componentId, {
      component: {
        name: 'ClientBookingPage',
      },
    });
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
