/**
 * @format
 */

import {LoginPage} from './src/pages/login-page';
import {Navigation} from 'react-native-navigation';
import {SignUpOverlay} from './src/components/sign-up-overlay';
import {SitterDetailsPage} from './src/pages/sitter-detail-page';
import {ServiceOverlay} from './src/components/service-overlay';
import {BookingSuccessPage} from './src/pages/client-booking-success-page';
import {ClientBookingPage} from './src/pages/client-booking-page';
import {ClientBookingDetails} from './src/pages/client-booking-details-page';
import {CheckoutPaymentPage} from './src/pages/client-payment-page';
import {TippingOverlay} from './src/components/tipping-overlay';
import {FinalPaymentOverlay} from './src/components/final-payment-overlay';
import {SitterBookingPage} from './src/pages/sitter-booking-page';
import {SitterBookingDetailsPage} from './src/pages/sitter-booking-details-page';
import {SitterClockInClockOutSubmitTimePage} from './src/pages/sitter-clock-in-clock-out-submit-time-page';
import {ContactJosieOverlay} from './src/components/contact-josie-overlay';
import {SitterSubmitTimeSuccessPage} from './src/pages/sitter-submit-time-success-page';
import Auth from '@react-native-firebase/auth';

Navigation.registerComponent('LoginPage', () => LoginPage);
Navigation.registerComponent('SignUpOverlay', () => SignUpOverlay);
Navigation.registerComponent('SitterDetailsPage', () => SitterDetailsPage);
Navigation.registerComponent('ServiceOverlay', () => ServiceOverlay);
Navigation.registerComponent('BookingSuccessPage', () => BookingSuccessPage);
Navigation.registerComponent('ClientBookingPage', () => ClientBookingPage);
Navigation.registerComponent(
  'ClientBookingDetails',
  () => ClientBookingDetails,
);
Navigation.registerComponent('CheckoutPaymentPage', () => CheckoutPaymentPage);
Navigation.registerComponent('TippingOverlay', () => TippingOverlay);
Navigation.registerComponent('FinalPaymentOverlay', () => FinalPaymentOverlay);
Navigation.registerComponent('SitterBookingPage', () => SitterBookingPage);
Navigation.registerComponent(
  'SitterBookingDetailsPage',
  () => SitterBookingDetailsPage,
);
Navigation.registerComponent(
  'SitterClockInClockOutSubmitTimePage',
  () => SitterClockInClockOutSubmitTimePage,
);
Navigation.registerComponent('ContactJosieOverlay', () => ContactJosieOverlay);
Navigation.registerComponent(
  'SitterSubmitTimeSuccessPage',
  () => SitterSubmitTimeSuccessPage,
);

Navigation.setDefaultOptions({
  animations: {
    setRoot: {
      waitForRender: true,
    },
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  const userId = Auth().onAuthStateChanged.uid;

  if (userId) {
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
  } else {
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
  }
});
