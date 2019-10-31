import {StyleSheet} from 'react-native';
import {FontSizeCss} from '../FontSizeCss';
import {Color} from '../Color';

/**
 * Stylesheet containing button styles.
 * @type {{button: object, buttonLabel: object, buttonIconLabel: object, buttonHeader: object, buttonHeaderLabel: object}}
 */
export const ButtonCss = StyleSheet.create({
  button: {
    backgroundColor: Color.buttonBackgroundColor,
  },
  buttonLabel: {
    ...FontSizeCss.fontSizeSmall,
    width: '100%',
    textAlign: 'center',
    color: Color.buttonTextColor,
  },
  buttonIconLabel: {
    ...FontSizeCss.fontSizeSmall,
  },
  buttonHeader: {
    backgroundColor: Color.buttonHeaderBackgroundColor,
  },
  buttonHeaderLabel: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    color: Color.buttonHeaderTextColor,
  },
});
