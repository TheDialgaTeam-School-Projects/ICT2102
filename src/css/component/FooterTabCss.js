import {StyleSheet} from 'react-native';
import {FontSizeCss} from '../FontSizeCss';
import {Color} from '../Color';

/**
 * Stylesheet containing footer tab styles.
 * @type {{footerTab: object, footerTabSelected: object, footerTabLabel: object}}
 */
export const FooterTabCss = StyleSheet.create({
  footerTab: {
    backgroundColor: Color.footerTabBackgroundColor,
    borderColor: Color.footerTabSelectedBackgroundColor,
    borderWidth: 1,
  },
  footerTabSelected: {
    backgroundColor: Color.footerTabSelectedBackgroundColor,
    borderColor: Color.footerTabSelectedBackgroundColor,
    borderWidth: 1,
  },
  footerTabLabel: {
    ...FontSizeCss.fontSizeXXSmall,
    color: Color.footerTabTextColor,
  },
});
