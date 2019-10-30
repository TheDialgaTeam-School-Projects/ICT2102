import {StyleSheet} from 'react-native';
import {Color} from '../../../Color';
import {FontSizeCss} from '../../../FontSizeCss';

/**
 * Stylesheet containing reminder component styles.
 * @type {{reminderComponentHeaderText: object, reminderComponentText: object}}
 */
export const ReminderComponentCss = StyleSheet.create({
  reminderComponentHeaderText: {
    ...FontSizeCss.fontSizeXSmall,
    fontWeight: 'bold',
    color: Color.bodyTextColor,
  },
  reminderComponentText: {
    ...FontSizeCss.fontSizeXSmall,
    color: Color.bodyTextColor,
  },
});
