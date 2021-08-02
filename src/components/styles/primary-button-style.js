import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  FilledButton: {
    backgroundColor: '#e09095',
    borderRadius: 35,
  },
  FilledButtonGreyedOut: {
    backgroundColor: '#B7B7B7',
    borderRadius: 35,
    marginTop: 12,
  },
  FilledButtonText: {
    textAlign: 'center',
    padding: 14,
    color: 'white',
    fontSize: 14,
  },
  OutlinedStyle: {
    marginTop: 13,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderColor: '#e09095',
  },
  OutlinedStyleText: {
    textAlign: 'center',
    padding: 14,
    color: '#e09095',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
