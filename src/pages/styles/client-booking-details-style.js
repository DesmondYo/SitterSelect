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
  LineSeperatorBelowBookingInfo: {
    borderBottomColor: '#f2d8df',
    borderBottomWidth: 1,
    marginTop: 20,
    width: '90%',
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
  ViewStyleInformation: {
    flexDirection: 'row',
    width: '100%',
  },
});
