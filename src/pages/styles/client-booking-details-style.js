import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  ClientBookingDetailsContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f9ede1',
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
    marginTop: 21,
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
    marginTop: 15,
    width: '90%',
  },
  BackgroundStyle: {
    backgroundColor: '#fcf0f2',
  },
  ViewFlex: {
    alignSelf: 'center',
    marginTop: 10,
  },
  BookingInfoView: {
    marginTop: 23,
    marginLeft: 20,
  },
  ViewStyleInformation: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 19,
  },
  PrimaryButtonStyle: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
});
