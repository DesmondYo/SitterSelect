import React, {useState} from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {styles} from './styles/client-payment-page-style.js';
import {BackButton} from '../components/back-button';
import {Navigation} from 'react-native-navigation';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {TipButton} from '../components/tip-button.js';
import {PrimaryButton} from '../components/primary-button.js';
import CheckBox from '@react-native-community/checkbox';

export function CheckoutPaymentPage({componentId}) {
  const [selectedTip, setSelectedTip] = useState(null);
  const [onStarRatingPress, setOnStarRatingPress] = useState(null);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <>
    <ScrollView
      style={{  backgroundColor: '#fcf0f2', }}
      contentContainerStyle={styles.CheckoutPaymentPageContainer}
      contentInset={{top: 0, bottom: 160}}>
      <BackButton
        onPress={onPress}
        backButtonImage={require('../img/backarrow.png')}
        imageWidth={30}
        imageHeight={30}
        top={10}
      />
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.Text}> Confirm & Pay </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={styles.BookingInfoText}> Booking Info </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          width: '100%',
          marginLeft: 50,
        }}>
        <Image
          source={require('../img/LadyInPic.png')}
          style={{width: 51, height: 51}}
        />

        <View style={{marginLeft: 16}}>
          <Text style={[styles.NameText, {marginTop: 5}]}>Josie Emch</Text>

          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Image
              style={styles.ServiceImage}
              source={require('../img/DropInForSittersNoPinkBackground.png')}
            />
            <Text style={styles.DropInForPets}>Drop-In For Pets</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 8}}>
            <Text style={styles.date}>12 Oct 2021</Text>
            <Image
              style={styles.PurpleDot}
              source={require('../img/PurpleDot.png')}
            />
            <Text style={styles.time}>07:00 - 10:00</Text>
          </View>
        </View>
      </View>
      <View style={styles.MainRectangle}>
        <Text style={styles.TotalHoursWorked}>
          Total hours Josie Emch worked : 9 hours
        </Text>
      </View>
      <View style={styles.LineSeperator} />
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          marginTop: 24,
          marginLeft: 35,
        }}>
        <Text style={styles.GiveTipForService}> Give tip for service </Text>
        <Text style={styles.Optional}>(Optional)</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          marginTop: 24,
          marginLeft: 35,
        }}>
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
      <View
        style={{
          marginTop: 20,
          width: '100%',
        }}>
        <Text style={styles.BookingInfoText}> Rate your sitter </Text>
        <AirbnbRating
          count={5}
          defaultRating={4}
          size={25}
          reviews={[]}
          starContainerStyle={{position: 'absolute', left: 20}}
        />
      </View>
      <View style={[styles.LineSeperator, {marginTop: 8}]} />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={styles.BookingInfoText}> Price details </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 9,
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={styles.BookingFee}>Booking fee </Text>
        <View style={styles.PriceDetailsStyle}>
          <Text style={styles.PriceDetailsText}>$8/day</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 9,
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={styles.BookingFee}>Booking price </Text>
        <View style={styles.PriceDetailsStyle}>
          <Text style={styles.HourlyDetailsText}>$500/hour</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 9,
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={styles.BookingFee}>Duration</Text>
        <View style={styles.PriceDetailsStyle}>
          <Text style={styles.PriceDetailsText}>3 hours</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 9,
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={styles.BookingFee}>Tax</Text>
        <View style={styles.PriceDetailsStyle}>
          <Text style={styles.PriceDetailsText}>0</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 9,
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={styles.Total}>Total</Text>
        <View style={styles.PriceDetailsStyle}>
          <Text style={styles.TotalText}>$1,500</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 11,
          width: '96%',
          marginLeft: 20,
        }}>
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

    <View style={{ position: "absolute", bottom: 20, alignSelf: "center" }}>
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
