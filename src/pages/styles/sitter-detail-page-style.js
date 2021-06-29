import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  SitterDetailsContainer: {
    backgroundColor: '#f9ede1',
    flex: 1,
  },
  SitterBackgroundColor: {
    height: 255,
    width: '100%',
    backgroundColor: '#ffc5c4',
  },
  PhotoOfSitter: {
    height: 230,
    width: 170,
    marginTop: 25,
    marginLeft: 110,
  },
  SitterName: {
    fontSize: 22,
    marginTop: 20,
    marginLeft: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  StarIcon: {
    marginLeft: 20,
    height: 16,
    width: 16,
    marginTop: -16,
  },
  StarRating: {
    fontSize: 12,
    marginLeft: 37,
    color: 'black',
  },
  Location: {
    fontSize: 12,
    marginTop: 8,
    marginLeft: 22,
    color: 'black',
  },
  LineSeperator: {
    borderBottomColor: '#f2d8df',
    borderBottomWidth: 1,
    marginTop: 23,
    width: '90%',
    marginLeft: 20,
  },
  SitterDescription: {
    color: '#92465a',
    marginLeft: 20,
    marginTop: 24,
    fontFamily: 'arial',
    fontSize: 12,
  },
  TypeOfService: {
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 40,
    color: '#92465a',
    fontSize: 16,
  },
  ChangeText: {
    color: '#92465a',
    marginLeft: 300,
    marginTop: -17,
    fontSize: 14,
    fontWeight: 'bold',
  },
  BookingdateParagraphText: {
    marginLeft: 20,
    marginTop: 4,
    color: '#92465a',
    fontSize: 12,
  },
  LineWithText: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: '#887b9b',
    borderRadius: 12,
  },
  BookNowBackground: {
    width: '100%',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  Money: {
    fontWeight: 'bold',
    color: '#92465a',
    fontSize: 16,
    marginBottom: 4,
  },
  Rates: {
    fontSize: 12,
    color: 'grey',
  },
  BookNowButton: {
    width: 159,
    height: 41,
    backgroundColor: '#e09095',
    borderRadius: 35,
  },
  BookNowButtonText: {
    textAlign: 'center',
    padding: 12,
    color: 'white',
    fontSize: 14,
  },

  ViewStyleRow: {
    flexDirection: 'row',
  },

  TimePicker: {
    flexDirection: 'row',
    paddingHorizontal: 32,
    marginTop: 12,
    paddingBottom: 10,
  },
  GmailStartTimeStyle: {
    marginRight: 15,
  },
  SquareView: {
    flexDirection: 'row',
    paddingHorizontal: 32,
    left: 50,
  },
  SquareShapeView: {
    width: 25,
    height: 25,
    backgroundColor: '#8cf2ce',
    marginTop: 21,
  },
  SquareShapeViewBooked: {
    width: 25,
    height: 25,
    backgroundColor: '#bdbdbd',
    marginTop: 21,
  },
  Avalible: {
    paddingHorizontal: 7,
    flex: 1,
    paddingTop: 25,
    color: '#92465a',
  },
  Booked: {
    paddingHorizontal: 7,
    flex: 1,
    paddingTop: 25,
    color: '#92465a',
  },
  BookingDate: {
    fontWeight: 'bold',
    paddingHorizontal: 32,
    marginTop: 21,
    color: '#92465a',
    fontSize: 16,
  },
});
