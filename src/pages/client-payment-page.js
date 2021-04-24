import React, { useState } from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {styles} from './styles/client-payment-page-style.js';
import {BackButton} from '../components/back-button';
import {Navigation} from 'react-native-navigation';
import {PrimaryButton} from '../components/primary-button';
import StarRating from 'react-native-star-rating';

export function CheckoutPaymentPage({componentId}) {
  const [onstarRatingPress, setOnStarRatingPress] = useState(null);
  return (
    // <ScrollView>
    <View style={styles.CheckoutPaymentPageContainer}>
      <BackButton
        onPress={onPress}
        backButtonImage={require('../img/backarrow.png')}
        imageWidth={30}
        imageHeight={30}
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
        <PrimaryButton
          label="$3"
          style={styles.Tip}
          TextStyle={styles.TipText}
        />
        <PrimaryButton
          label="$5"
          style={styles.Tip}
          TextStyle={styles.TipText}
        />
        <PrimaryButton
          label="$7"
          style={styles.Tip}
          TextStyle={styles.TipText}
        />
        <PrimaryButton
          label="Other"
          style={styles.Tip}
          TextStyle={styles.TipText}
          onPress={TippingOverlay}
        />
      </View>
      <View style={styles.LineSeperator} />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={styles.BookingInfoText}> Rate your sitter </Text>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={setOnStarRatingPress}
          selectedStar={setOnStarRatingPress}
        />
      </View>
    </View>
    // </ScrollView>
  );
  function onPress() {
    Navigation.push(componentId, {
      component: {
        name: 'ClientBookingPage',
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
