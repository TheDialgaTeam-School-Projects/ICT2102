import AsyncStorage from '@react-native-community/async-storage';
import {Controller} from '../Controller';
import {DeviceCacheManagement} from '../../service/DeviceCacheManagement';

export class HeaderController extends Controller {
  constructor(view) {
    super(view);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.willFocus = this.willFocus.bind(this);
    this.onPressLogoutButton = this.onPressLogoutButton.bind(this);
    this.onPressUserButton = this.onPressUserButton.bind(this);
  }

  /**
   * This event triggers when the component initialize.
   */
  componentDidMount() {
    this.state = {staffModel: null, patientModel: null};
  }

  /**
   * This event triggers when the screen is in focus.
   * @returns {Promise<void>}
   */
  async willFocus() {
    this.state = {
      staffModel: await DeviceCacheManagement.getStaffModelFromCache(),
      patientModel: await DeviceCacheManagement.getPatientModelFromCache(),
    };
  }

  /**
   * This event triggers when the logout button is pressed.
   * @returns {Promise<void>}
   */
  async onPressLogoutButton() {
    await AsyncStorage.removeItem('staffInformation');
    this.navigate('PatientInformation');
  }

  /**
   * This event triggers when the user button is pressed.
   * @returns {Promise<void>}
   */
  async onPressUserButton() {
    this.navigate('Profile');
  }
}
