import {StyleSheet} from 'react-native';
import {FontSizeCss} from '../../FontSizeCss';
import {Color} from '../../Color';

/**
 * Stylesheet containing patient information styles.
 * @type {{patientInformationContainer: object, patientNameText: object, patientConditionsText: object}}
 */
export const PatientInformationCss = StyleSheet.create({
  patientInformationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.bodyBackgroundColor,
  },
  patientNameText: {
    ...FontSizeCss.fontSizeXXLarge,
    textAlign: 'center',
    color: Color.bodyTextColor,
  },
  patientConditionsText: {
    ...FontSizeCss.fontSizeXLarge,
    textAlign: 'center',
    color: Color.bodyTextColor,
  },
});
