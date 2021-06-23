import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  PageContainer: {
    backgroundColor: '#f9ede1',
    flex: 1,
    justifyContent: 'center',
  },
  CheckmarkLogo: {
    alignSelf: 'center',
  },
  Text: {
    color: '#92465a',
    fontFamily: 'arial',
    fontSize: 20,
    alignSelf: 'center',
  },
  ParagraphText: {
    color: '#92465a',
    marginTop: 8,
    fontFamily: 'arial',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 50,
  },
  MakeFinalPaymentButton: {
    width: 343,
    backgroundColor: '#e09095',
    borderRadius: 35,
    alignSelf: 'center',
  },
  MakeFinalPaymentButtonText: {
    textAlign: 'center',
    padding: 14,
    color: 'white',
    fontSize: 14,
  },
  ContactJosieButton: {
    width: 343,
    marginTop: 13,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderColor: '#e09095',
    alignSelf: 'center',
  },
  ContactJosieButtonText: {
    textAlign: 'center',
    padding: 14,
    color: '#e09095',
    fontSize: 14,
    fontWeight: 'bold',
  },
  PrimaryButtonStyle: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
});
