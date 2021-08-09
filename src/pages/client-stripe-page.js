import React from 'react';
import {View} from 'react-native';
import {styles} from './styles/client-stripe-page-style.js';
import {StripeProvider} from '@stripe/stripe-react-native';

export function ClientStripePage() {
  return (
    <StripeProvider
      publishableKey="pk_test_51JHxXCDwlTwB7vnCA9qhNqB3voKU2u0sKhIglzxPl
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.{{Sittersselect}}"  // required for Apple Pay
    >
      // Your app code here
    </StripeProvider>
  );
}
