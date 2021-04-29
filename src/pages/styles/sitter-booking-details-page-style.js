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
  Booking: {
    fontSize: 14,
    color: '#b59ea4',
    marginLeft: 16,
  },
  BookingDate: {
    fontSize: 14,
    textAlign: 'center',
    color: '#92465a',
    marginRight: 16,
    fontWeight: 'bold',
  },
  LineSeperator: {
    borderBottomColor: '#f2d8df',
    borderBottomWidth: 1,
    marginTop: 21,
    width: '100%',
  },
  BookingInfo: {
    fontSize: 16,
    color: '#92465a',
    fontFamily: 'arial',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
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
  },
  LineSeperatorBelowBookingInfo: {
    borderBottomColor: '#f2d8df',
    borderBottomWidth: 1,
    marginTop: 19,
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
    backgroundColor: '#fcf0f2',
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
});
