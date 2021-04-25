import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  loginPageContainer: {
    backgroundColor: '#fcf0f2',
    flex: 1,
    alignItems: 'center',
  },
  SitterSelectLogo: {
    flex: 1,
    width: '60%',
    resizeMode: 'contain',
    marginTop: 22,
    alignItems: 'center',
  },
  Text: {
    fontSize: 27,
    textAlign: 'center',
    color: '#92465a',
    fontFamily: 'arial',
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 8,
  },
  password: {
    color: '#5e4386',
    fontFamily: 'arial',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 8,
    marginLeft: 8,
  },
  button: {
    marginTop: 50,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#5e4386',
    borderRadius: 26,
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
    fontSize: 16,
  },
  signUp: {
    textAlign: 'center',
    padding: 20,
    color: 'black',
    fontSize: 16,
  },
});
