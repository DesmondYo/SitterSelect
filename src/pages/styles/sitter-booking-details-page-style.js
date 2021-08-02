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
    fontWeight: 'bold',
  },
  LineSeperator: {
    borderBottomColor: '#f2d8df',
    borderBottomWidth: 1,
    marginTop: 21,
    width: '100%',
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
  BackgroundStyle: {
    backgroundColor: '#f9ede1',
  },
  BookingDateStyle: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginRight: 14,
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
    paddingHorizontal: 18,
    marginTop: 26,
  },
  PrimaryButtonStyle: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
});
