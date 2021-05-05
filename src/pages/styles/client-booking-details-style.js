import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  ClientBookingDetailsContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  Text: {
    fontSize: 16,
    color: '#92465a',
    fontFamily: 'arial',
    fontWeight: 'bold',
  },
  Status: {
    fontSize: 14,
    flexDirection: 'row',
    color: '#b59ea4',
    alignSelf: 'stretch',
    marginLeft: 16,
  },
  approved: {
    backgroundColor: '#f5efff',
    color: '#5e4386',
    height: 22,
    width: 68,
    borderRadius: 16,
    paddingTop: 3,
    marginRight: 19,
  },
  approvedText: {
    fontSize: 12,
    color: '#5e4386',
    textAlign: 'center',
  },
  InvoiceNumber: {
    fontSize: 14,
    textAlign: 'center',
    color: '#b59ea4',
    marginRight: 19,
  },
  Invoice: {
    fontSize: 14,
    color: '#b59ea4',
    marginLeft: 16,
  },
  Booking: {
    fontSize: 14,
    color: '#b59ea4',
    marginLeft: 16,
  },
  BookingDate: {
    fontSize: 14,
    textAlign: 'center',
    color: '#b59ea4',
    marginRight: 19,
  },
  LineSeperator: {
    borderBottomColor: '#f2d8df',
    borderBottomWidth: 1,
    marginTop: 39,
    width: '100%',
  },
  BookingInfoText: {
    fontSize: 16,
    color: '#92465a',
    fontFamily: 'arial',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  ServiceImage: {
    height: 17,
    width: 17,
  },
  NameText: {
    fontSize: 16,
    color: '#92465a',
    fontFamily: 'arial',
    fontWeight: 'bold',
  },
  DropInForPets: {
    fontSize: 14,
    color: '#92465a',
    fontFamily: 'arial',
    marginLeft: 8,
  },
  LineSeperatorBelowBookingInfo: {
    borderBottomColor: '#f2d8df',
    borderBottomWidth: 1,
    marginTop: 20,
    width: '90%',
  },
  BookedLength: {
    fontSize: 14,
    color: '#b59ea4',
    fontFamily: 'arial',
  },
  days: {
    fontSize: 14,
    color: '#92465a',
    fontFamily: 'arial',
    marginLeft: 8,
  },
  MakeFinalPaymentButton: {
    width: 343,
    backgroundColor: '#5e4386',
    borderRadius: 35,
    marginTop: 40,
  },
  MakeFinalPaymentButtonText: {
    textAlign: 'center',
    padding: 14,
    color: 'white',
    fontSize: 14,
  },
  ContactJosieButton: {
    width: 343,
    marginTop: 13,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderColor: '#5e4386',
  },
  ContactJosieButtonText: {
    textAlign: 'center',
    padding: 14,
    color: '#5e4386',
    fontSize: 14,
    fontWeight: 'bold',
  },
  BackgroundStyle: {
    backgroundColor: '#fcf0f2',
  },
  ViewFlex: {
    flexDirection: 'row',
  },
  ViewStatus: {
    flexDirection: 'row',
    marginTop: 29,
    justifyContent: 'space-between',
    width: '100%',
  },
  BookingInfoView: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    marginLeft: 50,
  },
  ImageStyle: {
    width: 51,
    height: 51,
  },
  ViewStyle: {
    marginLeft: 16,
  },
  TextMargin: {
    marginTop: 5,
  },
  ViewStyleText: {
    flexDirection: 'row',
    marginTop: 1,
  },
  ViewStyleInformation: {
    flexDirection: 'row',
    width: '100%',
  },
  ImageCalenderStyle: {
    width: 24,
    height: 24,
    marginTop: 34,
    marginLeft: 20.6,
  },
  BookedLengthView: {
    marginLeft: 12.6,
  },
  TextLengthView: {
    marginTop: 24,
    marginLeft: 8,
  },
  ViewTwoDays: {
    marginTop: 4,
  },
  ImageServiceStyle: {
    width: 24,
    height: 24,
    marginTop: 34,
    marginLeft: 50,
  },
});
