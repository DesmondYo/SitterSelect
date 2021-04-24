import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  PageContainer: {
    backgroundColor: '#fcf0f2',
    flex: 1,
  },
  Text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#92465a',
    fontFamily: 'arial',
    fontWeight: 'bold',
    marginTop: 59,
  },
  Current: {
    fontSize: 14,
    marginLeft: 68,
    color: '#92465a',
    fontFamily: 'arial',
    fontWeight: 'bold',
    marginTop: 30,
  },
  Past: {
    fontSize: 14,
    textAlign: 'right',
    color: 'grey',
    fontFamily: 'arial',
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 149,
  },
  declined: {
    backgroundColor: '#FDE7E7',
    color: '#c52222',
    fontSize: 12,
    height: 22,
    width: 68,
    textAlign: 'center',
    borderRadius: 16,
    paddingTop: 3,
  },
});
