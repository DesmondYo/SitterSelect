/**
 * @format
 */

import React from 'react';
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
import Firestore from '@react-native-firebase/firestore';
import {StripeProvider} from '@stripe/stripe-react-native';
import {ClientThankYouPage} from './src/pages/client-thank-you-page';

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
Navigation.registerComponent('FinalPaymentOverlay', () => StripeHOC(FinalPaymentOverlay));
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
Navigation.registerComponent('ClientThankYouPage', () => ClientThankYouPage);

Navigation.setDefaultOptions({
  animations: {
    setRoot: {
      waitForRender: true,
    },
  },
});

Navigation.events().registerAppLaunchedListener(async () => {
  const userId = Auth().currentUser?.uid;

  if (userId) {
    // Gets a collection of users (will only ever be one in the collection)
    const userQuery = await Firestore()
      .collection('users')
      .where('user_id', '==', userId)
      .get();
    // [Documents] -> Document
    const userDoc = userQuery.docs[0];
    // Returns the data associated with a user
    const userData = userDoc?.data();
    const initialRoute =
      userData?.type === 'client' ? 'SitterDetailsPage' : 'SitterBookingPage';

    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: initialRoute,
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

function StripeHOC(Component) {
  return ({...props}) => {
    return (
      <StripeProvider
        publishableKey="pk_test_51JHxXCDwlTwB7vnCA9qhNqB3voKU2u0sKhIglzxPltty6JWiqOkvBroyPSyyid4xXxMnUvioz00BTHPru6onoq4H00HBHMxRIN"
        urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
        merchantIdentifier="merchant.com.{{Sittersselect}}" // required for Apple Pay
      >
        <Component {...props} />
      </StripeProvider>
    );
  }
}