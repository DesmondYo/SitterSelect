import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 850,
    width: Platform.OS === 'ios' ? 390 : 410,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

  backbutton: {
    ...StyleSheet.absoluteFillObject,
    alignSelf: 'flex-end',
    height: 50,
    width: 50,
    marginTop: Platform.OS === 'ios' ? 30 : 20,
    marginLeft: 20,
    position: 'absolute',
  },
  CurrentLocation: {
    ...StyleSheet.absoluteFillObject,
    alignSelf: 'flex-end',
    height: 50,
    width: 50,
    marginTop: 50,
    marginLeft: 70,
    position: 'absolute',
  },
  button: {
    marginTop: 50,
    marginBottom: Platform.OS === 'ios' ? 50 : 220,
    width: 159,
    height: 41,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 26,
    marginLeft: 15,
  },
  buttonText: {
    textAlign: 'center',
    marginTop: -9,
    marginBottom: 5,
    padding: 20,
    color: '#5e4386',
    fontSize: 14,
  },
  image: {
    alignSelf: 'flex-end',
    height: 800,
    width: 800,
    marginTop: -660,
    marginLeft: -180,
    position: 'absolute',
  },
});
