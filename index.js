/**
 * @format
 */

import {LoginPage} from './src/pages/login-page';
import {MapPage} from './src/pages/map-page';
import { Navigation } from "react-native-navigation";

Navigation.registerComponent('LoginPage', () => LoginPage);
Navigation.registerComponent('MapPage', () => MapPage);
// Navigation.registerComponent('SignUpOverlay', () => SignUpOverlay);

Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
        children: [
           {
             component: {
               name: 'LoginPage'
             }
           }
         ]
       }
     }
  });
});
