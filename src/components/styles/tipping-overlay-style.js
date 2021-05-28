import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerStyle: {
    height: '70%',
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#fcf0f2',
  },

  inputText: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#92465a',
    fontFamily: 'arial',
    fontWeight: 'bold',
  },
  close: {
    fontSize: 16,
    marginTop: 31,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  input: {
    height: 40,
    width: '90%',
    margin: 12,
    borderWidth: 1,
    alignSelf: 'center',
  },
  TipButton: {
    width: '50%',
    height: 41,
    backgroundColor: '#5e4386',
    borderRadius: 35,
    alignSelf: 'center',
  },
  TipButtonText: {
    textAlign: 'center',
    padding: 12,
    color: 'white',
    fontSize: 14,
  },
  modalOverlayStyle: {
    backgroundColor: 'black',
  },
  modalInnerContainerStyle: {
    backgroundColor: '#fcf0f2',
  },
});
