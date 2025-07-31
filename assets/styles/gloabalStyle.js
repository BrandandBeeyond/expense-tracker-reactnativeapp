import { Dimensions, StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from './Scaling';

export const globalStyle = StyleSheet.create({
  mainHeading: {
    fontSize: scaleFontSize(22),
    fontFamily: 'Lato',
  },
  flex: {
    flex: 1,
  },
  bgdark: {
    backgroundColor: '#17181c',
  },
  px20: {
    paddingHorizontal: horizontalScale(20),
  },
  px25: {
    paddingHorizontal: horizontalScale(25),
  },
  my20: {
    marginVertical: verticalScale(20),
  },
  mt3: {
    marginTop: verticalScale(3),
  },
  mt5: {
    marginTop: verticalScale(5),
  },
  mt10: {
    marginTop: verticalScale(10),
  },
  mt20: {
    marginTop: verticalScale(20),
  },
  mt30: {
    marginTop: verticalScale(30),
  },
  mt40: {
    marginTop: verticalScale(40),
  },
  mt100:{
     marginTop:verticalScale(100)
  },
  mb20: {
    marginBottom: verticalScale(20),
  },
  pb10: {
    paddingBottom: verticalScale(10),
  },
  py5: {
    paddingVertical: verticalScale(3),
  },
  pb30: {
    paddingBottom: verticalScale(30),
  },
  mx10: {
    marginHorizontal: horizontalScale(10),
  },
  textcenter: {
    textAlign: 'center',
  },
  fs1: {
    fontSize: scaleFontSize(30),
  },
  fs2: {
    fontSize: scaleFontSize(27),
  },
  fs3: {
    fontSize: scaleFontSize(21),
  },
  fs4: {
    fontSize: scaleFontSize(18),
  },
  textWhite: {
    color: '#ffffff',
  },
  textSecondary: {
    color: '#858484ff',
  },
  mainFont: {
    fontFamily: 'Lato, sans-serif',
  },
  dflex: {
    display: 'flex',
  },
  aligncenter: {
    alignItems: 'center',
  },
  justifycenter: {
    justifyContent: 'center',
  },

  authInput: {
    backgroundColor: '#22252c',
    width: Dimensions.get('window').width - 40,
    color: '#ffffff',
    borderRadius: horizontalScale(15),
    borderWidth: horizontalScale(0),
  },
  rounded2: {
    borderRadius: horizontalScale(5),
  },
  signgoogle: {
    borderWidth: 1,
    backgroundColor:'#ffffff',
    justifyContent: 'center',
    padding: horizontalScale(10),
    borderRadius: horizontalScale(10),
  },
  drow:{
    display:'flex',
    flexDirection:'row'
  },
  cg5:{
    gap:horizontalScale(10)
  }
});
