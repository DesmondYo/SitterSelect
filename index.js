/**
 * @format
 */

import {LoginPage} from './src/pages/login-page';
import {MapPage} from './src/pages/map-page';
import {Navigation} from 'react-native-navigation';
import SplashScreen from 'react-native-splash-screen';
import {SignUpOverlay} from './src/components/sign-up-overlay';

SplashScreen.hide();

Navigation.registerComponent('LoginPage', () => LoginPage);
Navigation.registerComponent('MapPage', () => MapPage);
Navigation.registerComponent('SignUpOverlay', () => SignUpOverlay);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'LoginPage',
            },
          },
        ],
      },
    },
  });
});
