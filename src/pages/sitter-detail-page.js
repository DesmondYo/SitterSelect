import React from 'react';
import {View} from 'react-native';
import {styles} from './styles/sitter-detail-page-style.js';
import {BackButton} from '../components/back-button';
import {Navigation} from 'react-native-navigation';

export function SitterDetailsPage({componentId}) {
  return (
    <View styles={styles.SitterDetailContainer}>
      <BackButton
        onPress={onPress}
        backButtonImage={require('../img/backarrow.png')}
        imageWidth={50}
        imageHeight={50}
      />
    </View>
  );
  function onPress() {
    Navigation.push(componentId, {
      component: {
        name: 'MapPage',
      },
    });
  }
}

SitterDetailsPage.options = {
  topBar: {
    visible: false,
  },
};
