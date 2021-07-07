import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  OutsideContainer: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 8,
  },
  InnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  PhotoAndDetailsContainer: {
    flexDirection: 'row',
  },
  DetailsContainer: {
    marginLeft: 8,
  },
  ServiceRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
  ServiceImage: {
    height: 17,
    width: 18,
  },
  ServiceText: {
    color: '#92465a',
    fontFamily: 'arial',
    fontSize: 14,
    marginLeft: 8,
  },
  DateContainer: {
    flexDirection: 'row',
  },
  Date: {
    color: '#92465a',
    fontFamily: 'arial',
    fontSize: 12,
    marginTop: 8,
  },
  PurpleDot: {
    height: 5,
    width: 5,
    marginLeft: 5,
    marginTop: 13,
  },
  Time: {
    color: '#92465a',
    fontFamily: 'arial',
    fontSize: 12,
    marginLeft: 8,
    marginTop: 8,
  },
  NameText: {
    color: '#92465a',
    fontFamily: 'arial',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  ImageStyling: {
    width: 51,
    height: 51,
  },
});
