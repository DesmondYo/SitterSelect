import React from 'react';
import {View} from 'react-native';
import {styles} from './styles/map-page-style.js';
import {Map} from '../components/map';

const MapPage = ({ componentId }) => {
  return <Map componentId={componentId} />;
};

MapPage.options = {
  topBar: {
    visible: false,
  },
};

export {MapPage};
