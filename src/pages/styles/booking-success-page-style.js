import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  PageContainer: {
    backgroundColor: '#fcf0f2',
    flex: 1,
    justifyContent: 'center',
  },
  OkButton: {
    width: '90%',
    height: 46,
    alignSelf: 'center',
    backgroundColor: '#5e4386',
    borderRadius: 35,
    position: 'absolute',
    bottom: 40,
  },
  OkButtonText: {
    textAlign: 'center',
    padding: 13,
    color: 'white',
    fontSize: 16,
  },
  CheckmarkLogo: {
    height: 164,
    width: 164,
    alignSelf: 'center',
  },
  Text: {
    color: '#92465a',
    marginTop: 40,
    fontFamily: 'arial',
    fontSize: 20,
    alignSelf: 'center',
  },
  ParagraphText: {
    color: '#92465a',
    marginTop: 8,
    fontFamily: 'arial',
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
