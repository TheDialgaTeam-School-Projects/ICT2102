import {StyleSheet} from 'react-native';
import {PaddingCss} from './PaddingCss';
import {MarginCss} from './MarginCss';
import {JustifyContentCss} from './JustifyContentCss';
import {AlignItemsCss} from './AlignItemsCss';
import {FontSizeCss} from './FontSizeCss';
import {HeaderCss} from './component/HeaderCss';
import {FooterTabCss} from './component/FooterTabCss';
import {ButtonCss} from './component/ButtonCss';
import {FormCss} from './component/FormCss';
import {LoadingModalCss} from './component/LoadingModalCss';
import {PatientInformationCss} from './view/Main/PatientInformationCss';
import {StaffLoginCss} from './view/Main/StaffLoginCss';
import {RegisterPatientCss} from './view/Main/RegisterPatientCss';
import {ReminderComponentCss} from './view/Patient/Reminders/ReminderComponentCss';

/**
 * Get global style sheet.
 * @type {
 * PaddingCss | MarginCss | JustifyContentCss | AlignItemsCss | FontSizeCss |
 * HeaderCss | FooterTabCss | ButtonCss | FormCss | LoadingModalCss |
 * PatientInformationCss | StaffLoginCss | RegisterPatientCss |
 * ReminderComponentCss
 * }
 */
export const GlobalCss = StyleSheet.create({
  ...PaddingCss,
  ...MarginCss,
  ...JustifyContentCss,
  ...AlignItemsCss,
  ...FontSizeCss,
  ...HeaderCss,
  ...FooterTabCss,
  ...ButtonCss,
  ...FormCss,
  ...LoadingModalCss,
  ...PatientInformationCss,
  ...StaffLoginCss,
  ...RegisterPatientCss,
  ...ReminderComponentCss,
});
