import {Controller} from '../../Controller';
import AsyncStorage from '@react-native-community/async-storage';
import {DeviceCacheManagement} from '../../../service/DeviceCacheManagement';

export class VitalsHistoryController extends Controller {
  constructor(view) {
    super(view);
    this.onPressBackButton = this.onPressBackButton.bind(this);
    this.willFocus = this.willFocus.bind(this);
  }

  /**
   * This event triggers when the screen is in focus.
   * @returns {Promise<void>}
   */
  async willFocus() {
    try {
      const patientModel = await DeviceCacheManagement.getPatientModelFromCache(
        true,
      );
      
      const vitals = patientModel.getPatientVitals();
      
      let arrTemp = [];
      let arrDate = [];

      vitals.forEach(test => {
        arrTemp.push(test.temp);
        arrDate.push(test.dateTime);
      });

      this.state = {
        patientModel: patientModel,
        temperature: arrTemp,
        dateTime: arrDate,
      };
    } catch (e) {
      await AsyncStorage.removeItem('patientInformation');
      this.state = {patientModel: null};
      this.navigate('RegisterPatient');
    }
  }

  /**
   * This event triggers when back button is pressed.
   */
  onPressBackButton() {
    this.goBack();
  }
}
