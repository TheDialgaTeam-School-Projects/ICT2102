import AsyncStorage from '@react-native-community/async-storage';
import {Controller} from '../../Controller';
import {DeviceCacheManagement} from '../../../service/DeviceCacheManagement';

export class VitalsController extends Controller {
  constructor(view) {
    super(view);
    this.onPressVitalsHistory = this.onPressVitalsHistory.bind(this);
    this.willFocus = this.willFocus.bind(this);
  }

  /**
   * This event triggers when the screen is in focus.
   * @returns {Promise<void>}
   */
  async willFocus() {
    try {
      this.state = {
        patientModel: await DeviceCacheManagement.getPatientModelFromCache(
          true,
        ),
      };
    } catch (e) {
      await AsyncStorage.removeItem('patientInformation');
      this.state = {patientModel: null};
      this.navigate('RegisterPatient');
    }
  }

  onPressVitalsHistory() {
    this.navigate('VitalsHistory', {action: 'add'});
  }
}