import {StyleSheet} from 'react-native';
import {FontSizeCss} from '../FontSizeCss';
import {Color} from '../Color';

/**
 * Stylesheet containing form styles.
 * @type {{formLabel: object, formInput: object}}
 */
export const FormCss = StyleSheet.create({
  formLabel: {
    ...FontSizeCss.fontSizeXSmall,
    color: Color.bodyTextColor,
  },
  formInput: {
    ...FontSizeCss.fontSizeXSmall,
    color: Color.bodyTextColor,
  },
});
