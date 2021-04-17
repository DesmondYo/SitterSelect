import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#fcf0f2',
    height: 580,
  },

  ChildTutoringTextStyle: {
    textAlign: 'left',
    padding: 15,
    color: '#92465a',
    fontSize: 16,
    fontFamily: 'arial',
    marginLeft: 50,
    marginTop: -39,
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
    borderColor: '#BDBDBD',
    borderWidth: 1,
    marginBottom: 12,
  },
  DropInForPetsIcon: {
    height: 32,
    width: 32,
    marginTop: 8,
    marginLeft: 24,
  },
  rectangletwo: {
    height: 51,
    backgroundColor: '#FFC5C4',
    borderRadius: 12,
  },
  close: {
    fontSize: 16,
    marginTop: 31,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
