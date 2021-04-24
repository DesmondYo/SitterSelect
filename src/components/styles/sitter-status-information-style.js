import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  TextStyle: {
    color: '#92465a',
    fontFamily: 'arial',
    fontSize: 16,
    fontWeight: 'bold',
  },
  MainRectangle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 16,
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 8,
  },
  ServiceImage: {
    height: 17,
    width: 18,
  },
  Text: {
    color: '#92465a',
    fontFamily: 'arial',
    fontSize: 14,
    marginLeft: 8,
  },
  date: {
    color: '#92465a',
    fontFamily: 'arial',
    fontSize: 12,
  },
  time: {
    color: '#92465a',
    fontFamily: 'arial',
    fontSize: 12,
    marginLeft: 8,
  },
  PurpleDot: {
    height: 5,
    width: 5,
    marginTop: 4,
    marginLeft: 5,
  },
  approved: {
    backgroundColor: '#f5efff',
    color: '#5e4386',
    height: 22,
    width: 68,
    borderRadius: 16,
    paddingTop: 3,
  },
  approvedText: {
    fontSize: 12,
    color: '#5e4386',
    textAlign: 'center',
  },
  declined: {
    backgroundColor: '#FDE7E7',
    color: '#c52222',
    height: 22,
    width: 68,
    borderRadius: 16,
    paddingTop: 3,
  },
  declinedText: {
    fontSize: 12,
    color: '#c52222',
    textAlign: 'center',
  },
  pending: {
    backgroundColor: '#fdfbe7',
    color: '#c5b422',
    fontSize: 12,
    height: 22,
    width: 68,
    textAlign: 'center',
    borderRadius: 16,
    paddingTop: 3,
  },
  pendingText: {
    fontSize: 12,
    color: '#c5b422',
    textAlign: 'center',
  },
});
