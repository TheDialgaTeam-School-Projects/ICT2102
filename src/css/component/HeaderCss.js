import {StyleSheet} from 'react-native';
import {FontSizeCss} from '../FontSizeCss';
import {Color} from '../Color';

/**
 * Stylesheet containing header styles.
 * @type {{header: object, headerLeftText: object, headerTitle: object, headerRightText: object}}
 */
export const HeaderCss = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: Color.headerBackgroundColor,
  },
  headerLeftText: {
    ...FontSizeCss.fontSizeXSmall,
    color: Color.headerTextColor,
  },
  headerTitle: {
    ...FontSizeCss.fontSizeXLarge,
    color: Color.headerTextColor,
  },
  headerRightText: {
    ...FontSizeCss.fontSizeXSmall,
    color: Color.headerTextColor,
    textAlign: 'right',
  },
});
