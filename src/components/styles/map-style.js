import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

  backbutton: {
    // ...StyleSheet.absoluteFillObject,
    alignSelf: 'flex-end',
    height: 50,
    width: 50,
    position: 'absolute',
    top: 42,
    left: 25,
  },
  CurrentLocation: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 30,
    right: 10,
  },
  button: {
    width: 159,
    paddingTop: 12,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 26,
    position: 'absolute',
    bottom: 25,
  },
  buttonText: {
    textAlign: 'center',
    padding: 3,
    color: '#5e4386',
    fontSize: 14,
    marginBottom: 12,
  },
  CurrentLocationPin: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 350,
    right: 25,
    width: 20,
    height: 20,
  },
});
