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
  LineSeperator: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 9,
    width: '100%',
  },
  rectangle: {
    height: 110,
    width: '84%',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    marginTop: 20,
  },
  SitterName: {
    marginLeft: 80, 
    color: '#92465a',
    fontFamily: 'arial',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
