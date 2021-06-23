import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    maxHeight: 600,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#f9ede1',
  },

  buttonTextStyle: {
    textAlign: 'left',
    padding: 15,
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'arial',
  },

  text: {
    color: '#15062C',
    fontSize: 24,
    fontWeight: 'bold',
    bottom: 45,
    fontFamily: 'arial',
    marginTop: 18,
  },
  rectangle: {
    borderRadius: 12,
    height: 51,
    backgroundColor: '#e09095',
    marginBottom: 12,
  },
  rectangletwo: {
    height: 51,
    backgroundColor: '#e09095',
    borderRadius: 12,
  },
  modalOverlayStyle: {
    backgroundColor: 'black',
  },
  modalInnerContainerStyle: {
    backgroundColor: '#f9ede1',
  },
});
