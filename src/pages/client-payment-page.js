import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {styles} from './styles/client-payment-page-style.js';
import {BackButton} from '../components/back-button';
import {Navigation} from 'react-native-navigation';
import {AirbnbRating} from 'react-native-ratings';
import {TipButton} from '../components/tip-button.js';
import {PrimaryButton} from '../components/primary-button.js';
import {SitterProfile} from '../components/sitter-profile';
import {BookingDetailRow} from '../components/booking-detail-row';
import CheckBox from '@react-native-community/checkbox';

export function CheckoutPaymentPage({componentId}) {
  const [selectedTip, setSelectedTip] = useState(null);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <>
      <ScrollView
        style={styles.backgroundStyleColor}
        contentContainerStyle={styles.CheckoutPaymentPageContainer}
        contentInset={{top: 0, bottom: 160}}>
        <BackButton
          onPress={onPress}
          backButtonImage={require('../img/backarrow.png')}
          imageWidth={30}
          imageHeight={30}
          top={10}
        />
        <View style={styles.ViewStyleRow}>
          <Text style={styles.Text}> Confirm & Pay </Text>
        </View>
        <View style={styles.ViewStylePricingDetails}>
          <Text style={styles.BookingInfoText}> Booking Info </Text>
        </View>
        <View style={styles.ViewStylePricingDetails}>
          <SitterProfile
            image={require('../img/LadyInPic.png')}
            name={'Josie Emch'}
            serviceImage={require('../img/DropInForSittersNoPinkBackground.png')}
            service={'Drop-In For Pets'}
            date={'12 Oct 2021'}
            time={'07:00 - 10:00'}
          />
        </View>
        <View style={styles.MainRectangle}>
          <Text style={styles.TotalHoursWorked}>
            Total hours Josie Emch worked : 9 hours
          </Text>
        </View>
        <View style={styles.LineSeperator} />
        <View style={styles.GiveTipForServiceStyle}>
          <Text style={styles.GiveTipForService}> Give tip for service </Text>
          <Text style={styles.Optional}>(Optional)</Text>
        </View>
        <View style={styles.GiveTipForServiceStyle}>
          <TipButton
            label="$3"
            selected={selectedTip === 3}
            onPress={() => setSelectedTip(3)}
          />
          <TipButton
            label="$5"
            selected={selectedTip === 5}
            onPress={() => setSelectedTip(5)}
          />
          <TipButton
            label="$7"
            selected={selectedTip === 7}
            onPress={() => setSelectedTip(7)}
          />
          <TipButton label="Other" onPress={TippingOverlay} />
        </View>
        <View style={styles.LineSeperator} />
        <View style={styles.RateYourSitterStyle}>
          <Text style={styles.BookingInfoText}> Rate your sitter </Text>
          <AirbnbRating
            count={5}
            defaultRating={4}
            size={25}
            reviews={[]}
            starContainerStyle={styles.starContainerStyle}
          />
        </View>
        <View style={[styles.LineSeperator, styles.NameMarginStyle]} />
        <View style={styles.ViewStyleBookingInfo}>
          <Text style={styles.BookingInfoText}> Price details </Text>
        </View>
        <BookingDetailRow label={'Booking fee'} value={'$8/day'} />
        <BookingDetailRow label={'Booking price'} value={'$500/hour'} />
        <BookingDetailRow label={'Duration'} value={'3 hours'} />
        <BookingDetailRow label={'Tax'} value={'0'} />
        <View style={styles.ViewStyleBookingInfo}>
          <Text style={styles.Total}>Total</Text>
          <View style={styles.PriceDetailsStyle}>
            <Text style={styles.TotalText}>$1,500</Text>
          </View>
        </View>
        <View style={styles.TermsStyle}>
          <CheckBox
            style={styles.checkbox}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={styles.CheckMarkText}>
            I agree to cancellation policy, terms & conditions{'\n'}and privacy
            policy
          </Text>
        </View>
      </ScrollView>

      <View style={styles.PrimaryButtonStyle}>
        <PrimaryButton
          label="Confirm & Pay"
          style={styles.Button}
          TextStyle={styles.ButtonText}
          onPress={onOpenOverlay}
        />
      </View>
    </>
  );
  function onPress() {
    Navigation.push(componentId, {
      component: {
        name: 'ClientBookingPage',
      },
    });
  }
  function onOpenOverlay() {
    Navigation.showOverlay({
      component: {
        name: 'FinalPaymentOverlay',
        passProps: {
          parentComponentId: componentId,
        },
        options: {
          layout: {
            backgroundColor: 'transparent',
            componentBackgroundColor: 'transparent',
          },
        },
      },
    });
  }
  function TippingOverlay() {
    Navigation.showOverlay({
      component: {
        name: 'TippingOverlay',
        options: {
          layout: {
            backgroundColor: 'transparent',
            componentBackgroundColor: 'transparent',
          },
        },
      },
    });
  }
}
CheckoutPaymentPage.options = {
  topBar: {
    visible: false,
  },
};
