/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {LoginPage} from './src/pages/login-page';
import {MapPage} from './src/pages/map-page';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LoginPage);
AppRegistry.registerComponent(appName, () => MapPage);
