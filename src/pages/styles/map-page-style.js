import {StyleSheet} from 'react-native';

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
  CurrentLocation: {
    position: 'absolute',
    top: 30,
    right: 10,
  },
  button: {
    width: '40%',
    paddingTop: 12,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 26,
    marginBottom: 20,
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
    width: 5,
    height: 5,
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
});
