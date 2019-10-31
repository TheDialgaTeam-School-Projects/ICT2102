import AsyncStorage from '@react-native-community/async-storage';
import {Controller} from '../Controller';
import {StaffModel} from '../../model/Staff';
import {PatientModel} from '../../model/Patient';

export class HeaderController extends Controller {
  constructor(view) {
    super(view);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.willFocus = this.willFocus.bind(this);
    this.onPressLogoutButton = this.onPressLogoutButton.bind(this);
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
    const staffJson = await AsyncStorage.getItem('staffInformation');
    const patientJson = await AsyncStorage.getItem('patientInformation');

    if (staffJson) {
      const staffModel = StaffModel.createModel(JSON.parse(staffJson));
      this.state = {staffModel: staffModel};
    }

    if (patientJson) {
      const patientModel = PatientModel.createModel(JSON.parse(patientJson));
      this.state = {patientModel: patientModel};
    }
  }

  /**
   * This event triggers when the logout button is pressed.
   * @returns {Promise<void>}
   */
  async onPressLogoutButton() {
    await AsyncStorage.removeItem('staffInformation');
    this.navigate('PatientInformation');
  }
}
