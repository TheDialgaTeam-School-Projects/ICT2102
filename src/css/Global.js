import {StyleSheet} from 'react-native';

const color = {
  blue: '#77aaff',
  blue2: '#99ccff',
  blue3: '#bbeeff',
  blue4: '#5588ff',
  blue5: '#3366ff',
};

const paddingCss = StyleSheet.create({
  p1: {
    padding: 10,
  },
  p2: {
    padding: 20,
  },
  pl1: {
    paddingLeft: 10,
  },
  pl2: {
    paddingLeft: 20,
  },
  pr1: {
    paddingRight: 10,
  },
  pr2: {
    paddingRight: 20,
  },
  pt1: {
    paddingTop: 10,
  },
  pt2: {
    paddingTop: 20,
  },
  pb1: {
    paddingBottom: 10,
  },
  pb2: {
    paddingBottom: 20,
  },
  px1: {
    paddingHorizontal: 10,
  },
  px2: {
    paddingHorizontal: 20,
  },
  py1: {
    paddingVertical: 10,
  },
  py2: {
    paddingVertical: 20,
  },
});

const marginCss = StyleSheet.create({
  m1: {
    margin: 10,
  },
  m2: {
    margin: 20,
  },
  ml1: {
    marginLeft: 10,
  },
  ml2: {
    marginLeft: 20,
  },
  mr1: {
    marginRight: 10,
  },
  mr2: {
    marginRight: 20,
  },
  mt1: {
    marginTop: 10,
  },
  mt2: {
    marginTop: 20,
  },
  mb1: {
    marginBottom: 10,
  },
  mb2: {
    marginBottom: 20,
  },
  mx1: {
    marginHorizontal: 10,
  },
  mx2: {
    marginHorizontal: 20,
  },
  my1: {
    marginVertical: 10,
  },
  my2: {
    marginVertical: 20,
  },
});

const fontSizeCss = StyleSheet.create({
  fontSizeXSmall: {
    fontSize: 10 * 2,
  },
  fontSizeSmall: {
    fontSize: 13 * 2,
  },
  fontSizeMedium: {
    fontSize: 16 * 2,
  },
  fontSizeLarge: {
    fontSize: 18 * 2,
  },
  fontSizeXLarge: {
    fontSize: 24 * 2,
  },
  fontSizeXXLarge: {
    fontSize: 32 * 2,
  },
});

const headerCss = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: color.blue5,
  },
  headerLeftText: {
    ...fontSizeCss.fontSizeXSmall,
    color: '#ffffff',
  },
  headerTitle: {
    ...fontSizeCss.fontSizeXLarge,
    color: '#ffffff',
  },
  headerRightText: {
    ...fontSizeCss.fontSizeXSmall,
    color: '#ffffff',
  },
});

const footerTabCss = StyleSheet.create({
  footerTab: {
    backgroundColor: '#aec6cf',
    borderColor: '#7c929b',
    borderWidth: 1,
  },
  footerTabSelected: {
    backgroundColor: '#7c929b',
    borderColor: '#7c929b',
    borderWidth: 1,
  },
  footerTabLabel: {
    color: '#000000',
    fontSize: 15,
  },
});

const buttonCss = StyleSheet.create({
  button: {
    backgroundColor: color.blue5,
  },
  buttonLabel: {
    ...fontSizeCss.fontSizeSmall,
    width: '100%',
    textAlign: 'center',
  },
  buttonHeader: {
    backgroundColor: color.blue3,
  },
  buttonHeaderLabel: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
  },
});

const formCss = StyleSheet.create({
  formLabel: {
    ...fontSizeCss.fontSizeXSmall,
  },
  formInput: {
    ...fontSizeCss.fontSizeXSmall,
  },
});

const patientInformationCss = StyleSheet.create({
  patientNameText: {
    ...fontSizeCss.fontSizeXXLarge,
    textAlign: 'center',
  },
  patientConditionsText: {
    ...fontSizeCss.fontSizeXLarge,
    textAlign: 'center',
  },
});

export const GlobalCSS = StyleSheet.create({
  ...paddingCss,
  ...marginCss,
  ...fontSizeCss,
  ...headerCss,
  ...footerTabCss,
  ...buttonCss,
  ...formCss,
  ...patientInformationCss,
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.50)',
  },
  justifyContentRight: {
    justifyContent: 'flex-end',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsBottom: {
    alignItems: 'flex-end',
  },
  reminderText: {
    fontSize: 24,
  },
});
