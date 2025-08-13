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
  bgWhite: {
    backgroundColor: '#ffffff',
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
  mt15: {
    marginTop: verticalScale(15),
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
  mt100: {
    marginTop: verticalScale(100),
  },
  mb10: {
    marginBottom: verticalScale(10),
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
  p10: {
    padding: horizontalScale(10),
  },
  p15: {
    padding: horizontalScale(15),
  },
  px15: {
    paddingHorizontal: horizontalScale(15),
  },
  textcenter: {
    textAlign: 'center',
  },
  fs1: {
    fontSize: scaleFontSize(30),
    fontFamily: 'Lato',
  },
  fs2: {
    fontSize: scaleFontSize(27),
    fontFamily: 'Lato',
  },
  fs3: {
    fontSize: scaleFontSize(21),
    fontFamily: 'Lato',
  },
  fs4: {
    fontSize: scaleFontSize(18),
    fontFamily: 'Lato',
  },
  fs5: {
    fontSize: scaleFontSize(15),
    fontFamily: 'Lato',
  },
  fs6: {
    fontSize: scaleFontSize(12),
    fontFamily: 'Lato',
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
  justifyBtn: {
    justifyContent: 'space-between',
  },
  fwbold: {
    fontWeight: '700',
  },
  fwsemibold: {
    fontWeight: '690',
  },

  authInput: {
    backgroundColor: '#22252c',
    width: Dimensions.get('window').width - 40,
    color: '#ffffff',
    borderRadius: horizontalScale(15),
    borderWidth: horizontalScale(0),
  },
  budgetInput: {
    backgroundColor: '#7de683ff',
    width: Dimensions.get('window').width - 40,
    borderColor: '#8ae38eff',
    color: '#ffffff',
    borderRadius: horizontalScale(15),
    borderWidth: horizontalScale(0),
  },
  rounded2: {
    borderRadius: horizontalScale(5),
  },
  signgoogle: {
    borderWidth: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    padding: horizontalScale(10),
    borderRadius: horizontalScale(10),
  },
  drow: {
    display: 'flex',
    flexDirection: 'row',
  },
  dcol: {
    display: 'flex',
    flexDirection: 'column',
  },
  dcolend: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  cg5: {
    gap: horizontalScale(10),
  },
  textMain: {
    color: '#e76a3d',
  },
  textSmall: {
    fontSize: scaleFontSize(13),
    fontWeight: '600',
    fontFamily: 'Lato',
  },
  textxSmall: {
    fontSize: scaleFontSize(11),
    fontWeight: '400',
    fontFamily: 'Lato',
  },
  transactionInput: {
    backgroundColor: '#ffe9ba',
    height: verticalScale(42),
    borderRadius: horizontalScale(15),
    borderTopLeftRadius: horizontalScale(15),
    borderTopRightRadius: horizontalScale(15),
    borderWidth: horizontalScale(0),
    fontSize: scaleFontSize(14),
    width: Dimensions.get('window').width - 40,
  },
  calenderInput: {
    backgroundColor: '#ffe9ba',
    height: verticalScale(42),
    borderRadius: horizontalScale(15),
    borderTopLeftRadius: horizontalScale(15),
    borderTopRightRadius: horizontalScale(15),
    borderWidth: horizontalScale(0),
    fontSize: scaleFontSize(14),
    width: Dimensions.get('window').width - 225,
  },
  transactionInputBig: {
    backgroundColor: '#ffe9ba',
    height: verticalScale(59),
    borderRadius: horizontalScale(15),
    borderTopLeftRadius: horizontalScale(15),
    borderTopRightRadius: horizontalScale(15),
    borderWidth: horizontalScale(0),
    fontSize: scaleFontSize(14),
    width: Dimensions.get('window').width - 40,
  },
  btmmodal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: horizontalScale(20),
    borderTopRightRadius: horizontalScale(20),
    minHeight: verticalScale(350),
    maxHeight: verticalScale(440),
    overflow: 'hidden',
  },
  modalContentBig: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: horizontalScale(20),
    borderTopRightRadius: horizontalScale(20),
    height: verticalScale(450),
    overflow: 'hidden',
  },
});
