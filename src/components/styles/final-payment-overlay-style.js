import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    maxHeight: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#f9ede1',
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
    color: '#e09095',
    fontSize: 16,
    fontFamily: 'arial',
  },
  rectangle: {
    borderRadius: 35,
    backgroundColor: '#e09095',
    marginBottom: 12,
  },
  rectangletwo: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderColor: '#e09095',
  },
  modalOverlayStyle: {
    backgroundColor: 'black',
  },
  modalInnerContainerStyle: {
    backgroundColor: '#f9ede1',
  },
});
