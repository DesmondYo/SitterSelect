import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {styles} from './styles/map-page-style';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Navigation} from 'react-native-navigation';
import {SitterMapMarker} from '../components/sitter-map-marker';
import {BackButton} from '../components/back-button';
import {Marker} from 'react-native-maps';
import Firestore from '@react-native-firebase/firestore';

const MapPage = ({componentId}) => {
  const [setcurrentlocation] = useState(null);
  const [mapMarkers, setMapMarkers] = useState([]);
  /** Effects */
  useEffect(onSyncMarkers, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 33.648776,
          longitude: -112.0216586,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{latitude: 33.648776, longitude: -112.0216586}}
          icon={require('../img/CurrentLocationPin.png')}
          style={styles.CurrentLocationPin}
        />
        {mapMarkers.map((item) => (
          <SitterMapMarker
            item={item}
            onPress={SitterDetailsPage}
          />
        ))}
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

  function onSyncMarkers() {
    const unsubscribe = Firestore()
      .collection('users')
      .onSnapshot({
        next: (collection) => {
          const collectionDocuments = collection.docs;
          setMapMarkers(collectionDocuments);
        },
      });

      return unsubscribe;
  }

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

  function SitterDetailsPage(id) {
    Navigation.push(componentId, {
      component: {
        name: 'SitterDetails',
        passProps: {
          id,
        }
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
