import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#f9ede1',
    height: 630,
  },
  close: {
    fontSize: 16,
    marginTop: 31,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  modalOverlayStyle: {
    backgroundColor: 'black',
  },
  modalInnerContainerStyle: {
    backgroundColor: '#f9ede1',
  },
});
