import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  CheckoutPaymentPageContainer: {
    alignItems: 'center',
    paddingTop: 15,
  },
  Text: {
    fontSize: 16,
    color: '#92465a',
    fontFamily: 'arial',
    fontWeight: 'bold',
  },
  BookingInfoText: {
    fontSize: 16,
    color: '#92465a',
    fontFamily: 'arial',
    fontWeight: 'bold',
    marginLeft: 16,
  },
  MainRectangle: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 18,
    paddingHorizontal: 30,
    marginTop: 12,
    borderRadius: 10,
  },
  TotalHoursWorked: {
    fontSize: 14,
    color: '#92465a',
    fontFamily: 'arial',
    fontWeight: 'bold',
  },
  LineSeperator: {
    borderBottomColor: '#f2d8df',
    borderBottomWidth: 1,
    marginTop: 24,
    width: '100%',
  },
  GiveTipForService: {
    fontSize: 16,
    color: '#92465a',
    fontFamily: 'arial',
    fontWeight: 'bold',
  },
  Optional: {
    fontSize: 16,
    color: '#b59ea4',
    fontFamily: 'arial',
    fontWeight: 'bold',
  },
  Tip: {
    width: 81,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: '#5e4386',
    marginLeft: 4,
  },
  PriceDetailsStyle: {
    color: '#92465a',
    paddingTop: 3,
    marginRight: 16,
  },
  Total: {
    fontSize: 14,
    color: '#92465a',
    marginLeft: 20,
    fontWeight: 'bold',
  },
  TotalText: {
    fontSize: 14,
    color: '#92465a',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  CheckMarkText: {
    fontSize: 13,
    color: '#92465a',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  Button: {
    width: 343,
    backgroundColor: '#5e4386',
    borderRadius: 35,
  },
  ButtonText: {
    textAlign: 'center',
    padding: 12,
    color: 'white',
    fontSize: 14,
  },
  backgroundStyleColor: {
    backgroundColor: '#fcf0f2',
    flex: 1,
  },
  ViewStyleBookingInfo: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  ViewStylePricingDetails: {
    marginTop: 28,
    marginLeft: 5,
    alignSelf: 'flex-start',
  },
  ViewStyleSitterInformation: {
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 35,
  },
  NameMarginStyle: {
    marginTop: 5,
  },
  GiveTipForServiceStyle: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 24,
    marginLeft: 20,
  },
  RateYourSitterStyle: {
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  starContainerStyle: {
    position: 'absolute',
    left: 20,
  },
  TermsStyle: {
    flexDirection: 'row',
    marginTop: 11,
    width: '96%',
    marginLeft: 20,
  },
  PrimaryButtonStyle: {
    alignSelf: 'center',
    marginTop: 35,
  },
});
