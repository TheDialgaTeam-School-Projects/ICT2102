import AsyncStorage from '@react-native-community/async-storage';
import {Controller} from '../Controller';
import {DeviceCacheManagement} from '../../service/DeviceCacheManagement';
import {Config} from '../../Config';

export class PatientInformationController extends Controller {
  constructor(view) {
    super(view);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.willFocus = this.willFocus.bind(this);
    this.onPressLoginButton = this.onPressLoginButton.bind(this);
  }

  /**
   * This event triggers when the component initialize.
   * @returns {Promise<void>}
   */
  async componentDidMount() {
    this.state = {patientModel: null};
  }

  /**
   * This event triggers when the screen is in focus.
   * @returns {Promise<void>}
   */
  async willFocus() {
    try {
      if (Config.clearInternalCache) {
        await DeviceCacheManagement.clearDeviceCache();
      }

      this.state = {
        patientModel: await DeviceCacheManagement.getPatientModelFromCache(
          true,
        ),
      };
    } catch (e) {
      await AsyncStorage.removeItem('patientInformation');
      this.state = {patientModel: null};
    }
  }

  /**
   * This event triggers when the login button is pressed.
   */
  onPressLoginButton() {
    this.navigate('StaffLogin');
  }
}
