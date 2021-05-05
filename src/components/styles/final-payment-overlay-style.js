import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    maxHeight: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#fcf0f2',
  },
  buttonTextStyle: {
    textAlign: 'center',
    padding: 15,
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'arial',
  },
  text: {
    marginBottom: 20,
    color: '#15062C',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'arial',
  },
  buttonTextStyleRectangleTwo: {
    textAlign: 'center',
    padding: 15,
    color: '#5E4386',
    fontSize: 16,
    fontFamily: 'arial',
  },
  rectangle: {
    borderRadius: 35,
    backgroundColor: '#5E4386',
    marginBottom: 12,
  },
  rectangletwo: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderColor: '#5e4386',
  },
  modalOverlayStyle: {
    backgroundColor: 'black',
  },
  modalInnerContainerStyle: {
    backgroundColor: '#fcf0f2',
  },
});
